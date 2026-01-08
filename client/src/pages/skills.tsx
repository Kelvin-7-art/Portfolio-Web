import { motion } from "framer-motion";
import { Code2, Brain, BarChart3, Cloud, Eye, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { GlassCard } from "@/components/ui/glass-card";
import { skillCategories } from "@/data/profile";

const iconMap: Record<string, typeof Code2> = {
  Code2,
  Brain,
  BarChart3,
  Cloud,
  Eye,
  MessageSquare,
};

export default function Skills() {
  return (
    <div className="min-h-screen py-20">
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Expertise"
            title="Technical Skills"
            description="A comprehensive toolkit spanning programming, machine learning, data analysis, and deployment."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {skillCategories.map((category, index) => {
              const IconComponent = iconMap[category.icon] || Code2;
              return (
                <GlassCard key={category.name} delay={index * 0.1}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-cyan-500" />
                    </div>
                    <h3 className="text-xl font-semibold" data-testid={`text-skill-category-${index}`}>
                      {category.name}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                        className="flex items-center justify-between gap-3 group"
                      >
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0">
                          {skill.name}
                        </span>
                        <div className="flex-1 flex items-center gap-2">
                          <div className="flex-1 h-1.5 rounded-full bg-accent overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.proficiency}%` }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 + skillIndex * 0.05, duration: 0.5 }}
                              className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Core Competencies"
            title="What I Specialize In"
            description="Key areas where I bring expertise and deliver results."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <GlassCard delay={0} hover={false} className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 flex items-center justify-center shrink-0">
                  <span className="text-3xl font-bold text-red-500">FD</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fraud Detection</h3>
                  <p className="text-muted-foreground mb-4">
                    Building intelligent systems to detect fraudulent transactions in financial data using ensemble methods, neural networks, and anomaly detection techniques.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Imbalanced Learning</Badge>
                    <Badge variant="secondary">Ensemble Methods</Badge>
                    <Badge variant="secondary">Real-time Detection</Badge>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard delay={0.1} hover={false} className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center shrink-0">
                  <span className="text-3xl font-bold text-green-500">TS</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Time Series Forecasting</h3>
                  <p className="text-muted-foreground mb-4">
                    Predicting stock prices, cryptocurrency trends, and forex movements using Prophet, ARIMA, LSTM, and GRU models with volatility analysis.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Prophet</Badge>
                    <Badge variant="secondary">LSTM/GRU</Badge>
                    <Badge variant="secondary">Technical Analysis</Badge>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard delay={0.2} hover={false} className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center shrink-0">
                  <span className="text-3xl font-bold text-purple-500">CV</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Computer Vision</h3>
                  <p className="text-muted-foreground mb-4">
                    Developing face recognition systems, emotion detection, and image classification models using OpenCV, YOLO, and CNN architectures.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Face Recognition</Badge>
                    <Badge variant="secondary">Object Detection</Badge>
                    <Badge variant="secondary">CNN</Badge>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard delay={0.3} hover={false} className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center shrink-0">
                  <span className="text-3xl font-bold text-blue-500">NLP</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">NLP & LLMs</h3>
                  <p className="text-muted-foreground mb-4">
                    Building conversational AI with LangChain, sentiment analysis systems, and text processing pipelines using transformers and OpenAI APIs.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">LangChain</Badge>
                    <Badge variant="secondary">Transformers</Badge>
                    <Badge variant="secondary">Prompt Engineering</Badge>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Always Learning, Always Growing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The field of AI and machine learning evolves rapidly. I stay current with the latest research, 
              frameworks, and best practices to deliver cutting-edge solutions.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
