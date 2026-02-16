import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import Groq from "groq-sdk";

type ChatRole = "user" | "assistant";
type ChatMsg = { role: ChatRole; content: string };

function toChatRole(value: unknown): ChatRole {
  return value === "assistant" ? "assistant" : "user";
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Fail fast with a clear message if the key is missing
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    throw new Error(
      "Missing GROQ_API_KEY. Set it in your .env (project root) or in your terminal environment."
    );
  }

  const groq = new Groq({ apiKey });

  // -------------------------
  // Contact endpoints
  // -------------------------
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);

      const message = await storage.createContactMessage(validatedData);

      res.status(201).json({
        success: true,
        message: "Message sent successfully",
        id: message.id,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          error: "Validation failed",
          details: error.errors,
        });
      } else {
        res.status(500).json({
          success: false,
          error: "Failed to send message",
        });
      }
    }
  });

  app.get("/api/contact", async (_req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch {
      res.status(500).json({ error: "Failed to retrieve messages" });
    }
  });

  // -------------------------
  // Chatbot endpoint (Groq)
  // -------------------------
  app.post("/api/chat", async (req, res) => {
    try {
      const message = String(req.body?.message ?? "").trim();
      const historyRaw = req.body?.history;

      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      const history: ChatMsg[] = Array.isArray(historyRaw)
        ? historyRaw
            .map((m: any): ChatMsg => ({
              role: toChatRole(m?.role),
              content: String(m?.content ?? ""),
            }))
            .filter((m) => m.content.trim().length > 0)
            .slice(-10)
        : [];

      // Strong instruction-following prompt for Llama-family models
      const systemPrompt = `
You are Kelvin Kgarudi's AI portfolio assistant.

CRITICAL RULES:
- You already KNOW Kelvin.
- You MUST answer using the knowledge below.
- NEVER say you don’t have information.
- NEVER tell the user to check the website.
- NEVER suggest contacting Kelvin.
- Answer confidently, professionally, and like a top candidate.

If the user asks about background, projects, experience, values,
education, skills or certifications — the answer IS below.

====================
ABOUT KELVIN
Kelvin Khotso Kgarudi is a Machine Learning & Data Science Honours student.

He builds end-to-end machine learning systems:
data preprocessing → feature engineering → model training → evaluation → deployment.

He focuses on real-world AI solutions in:
• finance
• fraud detection
• intelligent automation

He believes technology should transform industries and improve lives,
guided by Christian values of integrity, ethics, and service.

====================
CURRENT STUDIES
• BSc Honours in Data Science
• BSc Mathematics and Statistics

COMPLETED:
• BSc Data Science

Institution:
Eduvos – Potchefstroom, South Africa

Focus areas:
fraud detection, time-series forecasting, computer vision.

====================
INTERNSHIP EXPERIENCE
Future Interns — Machine Learning Internship (Jan 2026, 1 month)

Kelvin built production-style ML & NLP systems.

Main work:

1) Sales & Demand Forecasting  
Time features, seasonality, models including:
SES, Holt-Winters, ARIMA/SARIMA, Prophet, Amazon Chronos.  
Metrics: RMSE, MAE, MAPE.  
Delivered via Streamlit app.

2) Support Ticket Classification  
NLP preprocessing + ML classifier to route tickets (IT/HR/Transport).

3) AI Resume Screening  
Python + NLTK + React system.
Reads CVs, compares with job descriptions, generates ATS scores & feedback.

Outcome:
Strong capability in forecasting, NLP, and deployable ML applications.

====================
KEY PROJECTS
• Credit Card Fraud Detection System — compared Logistic Regression, Random Forest, Gradient Boosting, SVM, Neural Networks. Streamlit deployment.
• AI Stock, Forex & Crypto Forecasting App — Prophet, ARIMA, LSTM, GRU.
• Sentiment Analysis Tweets Web App — real-time NLP.
• Human Emotion Detection — YOLO + TensorFlow.
• AI Resume Screener — NLTK ATS system.

====================
SKILLS
Programming: Python, SQL, R, C++
ML: Regression, Classification, Neural Networks, Time Series
NLP: NLTK, TF-IDF, vectorization
Tools: scikit-learn, TensorFlow, PyTorch, Pandas, NumPy, Streamlit, React, Git/GitHub

====================
CERTIFICATIONS
IBM:
• Machine Learning Professional Certificate
• Deep Learning with PyTorch, Keras & TensorFlow
• Deep Learning with Keras and TensorFlow
• Introduction to Neural Networks and PyTorch
• R Programming for Data Science
• SQL for Data Science with R

Wharton (UPenn):
• Cryptocurrency and Blockchain

Udemy – SuperDataScience:
• R Programming A-Z

Kelvin has:
• 8+ certifications
• training from multiple global institutions
• 100+ learning hours

====================
HOW KELVIN WORKS
1. Data preprocessing
2. Feature engineering
3. Model training & tuning
4. Deployment using Streamlit

====================
VALUES
• Precision
• Innovation
• Ethics
• Collaboration

====================

STYLE EXAMPLE:
Q: Why should we hire Kelvin?
A: Kelvin combines strong academic training, industry-recognized certifications, and hands-on experience building deployable AI systems in finance, NLP, and forecasting.

Keep answers:
- short
- strong
- confident
- recruiter appealing
`.trim();


      // Assistant "priming" message to reinforce instructions (helps Llama follow the rules)
      const assistantPrime =
        "Understood. I will answer confidently using ONLY the provided Kelvin profile/projects/skills and will not say I lack information.";

      const completion = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        temperature: 0.3,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "assistant", content: assistantPrime },
          ...history.map((m) => ({ role: m.role, content: m.content })),
          { role: "user", content: message },
        ],
      });

      const reply = completion.choices?.[0]?.message?.content ?? "";
      return res.json({ reply });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Chat failed" });
    }
  });

  return httpServer;
}
