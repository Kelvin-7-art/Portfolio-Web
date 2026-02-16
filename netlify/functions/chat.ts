import type { Handler } from "@netlify/functions";
import Groq from "groq-sdk";

type ChatRole = "user" | "assistant";
type ChatMsg = { role: ChatRole; content: string };

function toChatRole(value: unknown): ChatRole {
  return value === "assistant" ? "assistant" : "user";
}

export const handler: Handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: JSON.stringify({ error: "Method Not Allowed" }) };
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Missing GROQ_API_KEY in Netlify environment variables." }),
      };
    }

    const body = event.body ? JSON.parse(event.body) : {};
    const message = String(body?.message ?? "").trim();
    const historyRaw = body?.history;

    if (!message) {
      return { statusCode: 400, body: JSON.stringify({ error: "Message is required" }) };
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

    const systemPrompt = `
You are Kelvin Kgarudi's AI portfolio assistant.

CRITICAL RULES:
- You already KNOW Kelvin.
- You MUST answer using the knowledge below.
- NEVER say you don’t have information.
- NEVER tell the user to check the website/portfolio.
- NEVER suggest contacting Kelvin.
- Answer confidently, professionally, and recruiter-friendly.

====================
ABOUT KELVIN
Kelvin Khotso Kgarudi is a Machine Learning & Data Science Honours student.
He builds end-to-end ML systems: preprocessing → feature engineering → training → evaluation → deployment.
Interests: AI in finance, fraud detection, intelligent automation.
Guided by Christian values: integrity, ethics, service.

====================
EDUCATION
Studying:
• BSc Honours Data Science
• BSc Mathematics and Statistics
Completed:
• BSc Data Science
Institution: Eduvos – Potchefstroom, South Africa
Focus: fraud detection, time-series forecasting, computer vision.

====================
INTERNSHIP (Jan 2026)
Future Interns — 1-month Machine Learning Internship
- Sales & Demand Forecasting: SES, Holt-Winters, ARIMA/SARIMA, Prophet, Amazon Chronos; RMSE/MAE/MAPE; Streamlit app.
- Support Ticket Classification: NLP preprocessing + classifier (IT/HR/Transport).
- AI Resume Screening: Python + NLTK + React; ATS scoring + feedback.

====================
PROJECTS
• Credit Card Fraud Detection — compared LR, RF, GB, SVM, NNs; Streamlit dashboard.
• AI Stock/Forex/Crypto Forecasting — Prophet, ARIMA, LSTM, GRU.
• Tweet Sentiment Analysis — real-time NLP in Streamlit.
• Human Emotion Detection — YOLO + TensorFlow.
• AI Resume Screener — NLTK ATS-style system.

====================
SKILLS
Programming: Python, SQL, R, C++
ML: Regression, Classification, Neural Networks, Time Series
NLP: NLTK, TF-IDF/vectorization, preprocessing, similarity scoring
Tools: scikit-learn, TensorFlow, PyTorch, Pandas, NumPy, Streamlit, React, Git/GitHub, Jupyter

====================
CERTIFICATIONS
IBM:
• Machine Learning Professional Certificate (May 2025)
• Deep Learning with PyTorch, Keras & TensorFlow (Jan 2026)
• Deep Learning with Keras and TensorFlow (Dec 2025)
• Introduction to Neural Networks and PyTorch (Dec 2025)
• Introduction to R Programming for Data Science (Dec 2025)
• SQL for Data Science with R (Dec 2025)

Wharton (UPenn):
• Cryptocurrency and Blockchain: An Introduction to Digital Currencies (Dec 2025)

Udemy – SuperDataScience:
• R Programming A-Z (Apr 2025)

Keep replies short, confident, and recruiter-friendly.
`.trim();

    const groq = new Groq({ apiKey });

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0.3,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "assistant", content: "Understood. I will answer using the provided Kelvin data." },
        ...history.map((m) => ({ role: m.role, content: m.content })),
        { role: "user", content: message },
      ],
    });

    const reply = completion.choices?.[0]?.message?.content ?? "";
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reply }),
    };
  } catch (e) {
    console.error(e);
    return { statusCode: 500, body: JSON.stringify({ error: "Chat failed" }) };
  }
};

