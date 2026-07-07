import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Heart,
  Lightbulb,
  Target,
  Users,
  Award,
  FileText,
  Brain,
  Sparkles,
  BarChart3,
  Ticket,
  Calculator,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { GlassCard } from "@/components/ui/glass-card";
import { profile, education } from "@/data/profile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Committed to building accurate, reliable ML systems with rigorous evaluation and testing.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Always exploring cutting-edge techniques and frameworks to solve complex problems.",
  },
  {
    icon: Heart,
    title: "Ethics",
    description: "Developing AI responsibly with consideration for fairness, transparency, and societal impact.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Believing in the power of teamwork and knowledge sharing to achieve greater outcomes.",
  },
];

const futureInternsHighlights = [
  {
    icon: BarChart3,
    title: "Task 01: Sales & Demand Forecasting",
    description:
      "Built an end-to-end forecasting solution (Superstore dataset) with time-based feature engineering, trend/seasonality analysis, and multiple models: SES, Holt/Holt-Winters, ARIMA/SARIMA, intermittent demand, Prophet, and GenAI (Amazon Chronos). Evaluated using RMSE, MAE, MAPE and deployed an interactive Streamlit app.",
  },
  {
    icon: Ticket,
    title: "Task 02: Support Ticket Classification",
    description:
      "Developed an NLP-powered system to classify support tickets into departments (IT/HR/Transport), applying text preprocessing + feature extraction and training an ML classifier for faster, more accurate routing.",
  },
  {
    icon: FileText,
    title: "Task 03: AI Resume Screening (NLTK + React)",
    description:
      "Built an AI-powered resume screening system using Python, NLP, NLTK, and React.js. Processes resumes (PDF), matches them against a job description, generates ATS-style scores + structured feedback, and highlights strengths and improvement areas.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen py-20">
      {/* HERO / INTRO */}
      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-500/10 via-background to-blue-600/10 border border-border/50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Avatar className="w-48 h-48">
                      <AvatarImage
                        src="/KelvinKgarudiImage/KelvinKgarudi.png"
                        alt={profile.name}
                        className="object-cover"
                      />
                      <AvatarFallback className="text-6xl font-bold bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-500">
                        KK
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm text-center p-2 shadow-lg shadow-cyan-500/20">
                  Honours Student
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Badge variant="secondary" className="mb-4">
                About Me
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-about-title">
                {profile.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-4">{profile.role}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">{profile.bio}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">{profile.aboutExtended}</p>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest) => (
                  <Badge key={interest} variant="outline">
                    {interest}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="py-20 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Experience"
            title="Professional Experience"
            description="Combining academic teaching with hands-on machine learning development."
          />

          {/* Experience Timeline - Most Recent First */}
          <div className="mt-12 space-y-8">
            {/* Mathematics Tutor - Eduvos (MOST RECENT) */}
            <GlassCard delay={0}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 flex items-center justify-center shrink-0">
                    <Calculator className="w-5 h-5 text-cyan-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">Mathematics Tutor</h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      Eduvos · Part-time
                    </p>
                    <p className="text-xs text-muted-foreground mb-3">
                      May 2026 - Jun 2026 · 2 mos
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Tutored Calculus 1 students, helping them understand foundational concepts, 
                      problem-solving techniques, and applications in computer science and data analysis. 
                      Developed personalized learning strategies and provided one-on-one support to improve 
                      student performance.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {["Calculus 1", "Mathematics", "Problem Solving", "Student Support", "Academic Tutoring"].map((t) => (
                        <Badge key={t} variant="outline" className="text-xs">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="shrink-0">
                  May - Jun 2026
                </Badge>
              </div>
            </GlassCard>

            {/* Future Interns - Machine Learning Intern */}
            <GlassCard delay={0.1}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 flex items-center justify-center shrink-0">
                    <Brain className="w-5 h-5 text-cyan-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">Machine Learning Intern</h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      Future Interns · Internship
                    </p>
                    <p className="text-xs text-muted-foreground mb-3">
                      Jan 2026 - Feb 2026 · 2 mos
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Completed a hands-on ML internship delivering portfolio-ready projects across forecasting, 
                      NLP classification, and HR-tech screening. Built end-to-end solutions with Python, NLTK, 
                      Streamlit, and React.js.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {["Python", "NLTK", "Streamlit", "React.js", "ARIMA", "Model Evaluation", "Git/GitHub"].map((t) => (
                        <Badge key={t} variant="outline" className="text-xs">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="shrink-0">
                  Jan - Feb 2026
                </Badge>
              </div>
            </GlassCard>
          </div>

          {/* Future Interns - Detailed Tasks */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6 text-center md:text-left">
              Future Interns — Project Highlights
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {futureInternsHighlights.map((item, idx) => (
                <GlassCard key={item.title} delay={0.2 + idx * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-cyan-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-sm">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Outcome / Summary */}
          <div className="mt-8">
            <GlassCard delay={0.5}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-cyan-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Key Outcomes</h3>
                    <p className="text-sm text-muted-foreground">
                      Strengthened expertise in <b>time series forecasting</b>, <b>text classification</b>, and
                      <b> NLP preprocessing with NLTK</b>, while building deployable applications for business 
                      and HR-tech use cases. Complemented with <b>mathematical teaching experience</b> that 
                      enhanced communication and analytical skills.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    RMSE / MAE / MAPE
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    ARIMA / SARIMA
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Prophet
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Amazon Chronos
                  </Badge>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* MY APPROACH */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="What I Do"
            title="My Approach"
            description="End-to-end machine learning development with a focus on practical applications."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <GlassCard delay={0}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 flex items-center justify-center shrink-0">
                  <span className="text-2xl">01</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Data Preprocessing</h3>
                  <p className="text-sm text-muted-foreground">
                    Cleaning, transforming, and preparing data for analysis. Handling missing values, outliers, and ensuring data quality.
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard delay={0.1}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 flex items-center justify-center shrink-0">
                  <span className="text-2xl">02</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Feature Engineering</h3>
                  <p className="text-sm text-muted-foreground">
                    Creating meaningful features that capture domain knowledge and improve model performance significantly.
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard delay={0.2}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 flex items-center justify-center shrink-0">
                  <span className="text-2xl">03</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Model Training</h3>
                  <p className="text-sm text-muted-foreground">
                    Selecting and training appropriate algorithms, hyperparameter tuning, and cross-validation for optimal results.
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard delay={0.3}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 flex items-center justify-center shrink-0">
                  <span className="text-2xl">04</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Deployment</h3>
                  <p className="text-sm text-muted-foreground">
                    Building user-friendly interfaces with Streamlit and deploying models for real-world applications.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Values"
            title="What Drives Me"
            description="Core principles that guide my work and professional growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((value, index) => (
              <GlassCard key={value.title} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-cyan-500" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Education"
            title="Academic Background"
            description="My formal education in Computer Science and Data Science."
          />

          <div className="mt-12 relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-blue-600/50 to-transparent hidden md:block" />

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-0 md:pl-20"
                >
                  <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hidden md:block" />
                  <GlassCard hover={false}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 flex items-center justify-center shrink-0">
                        {edu.current ? (
                          <Briefcase className="w-5 h-5 text-cyan-500" />
                        ) : (
                          <GraduationCap className="w-5 h-5 text-cyan-500" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h4 className="font-semibold">{edu.degree}</h4>
                          {edu.current && (
                            <Badge variant="secondary" className="text-xs">
                              Current
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {edu.institution} - {edu.location}
                        </p>
                        <p className="text-xs text-muted-foreground mb-2">{edu.period}</p>
                        <p className="text-sm text-muted-foreground">{edu.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
