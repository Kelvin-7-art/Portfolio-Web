import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { GlassCard } from "@/components/ui/glass-card";
import { certifications } from "@/data/profile";

const issuerColors: Record<string, string> = {
  IBM: "from-blue-500/10 to-blue-600/10",
  UPenn: "from-red-500/10 to-red-600/10",
  SDS: "from-purple-500/10 to-purple-600/10",
};

const issuerTextColors: Record<string, string> = {
  IBM: "text-blue-500",
  UPenn: "text-red-500",
  SDS: "text-purple-500",
};

export default function Certifications() {
  return (
    <div className="min-h-screen py-20">
      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Credentials"
            title="Certifications"
            description="Professional certifications demonstrating expertise in machine learning, deep learning, and data science."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {certifications.map((cert, index) => (
              <GlassCard key={cert.id} delay={index * 0.1}>
                <div className="flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${
                        issuerColors[cert.issuerLogo] || "from-cyan-500/10 to-blue-600/10"
                      } flex items-center justify-center shrink-0`}
                    >
                      <span
                        className={`text-lg font-bold ${
                          issuerTextColors[cert.issuerLogo] || "text-cyan-500"
                        }`}
                      >
                        {cert.issuerLogo}
                      </span>
                    </div>
                    <div className="flex-1">
                      <Badge variant="secondary" className="text-xs mb-2">
                        {cert.issuer}
                      </Badge>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-2 flex-1" data-testid={`text-cert-${cert.id}`}>
                    {cert.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4 pt-4 border-t border-border/50">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.date}</span>
                    </div>
                    {cert.credentialId && (
                      <div className="flex items-center gap-1 text-xs">
                        <Award className="w-4 h-4" />
                        <span className="truncate max-w-24">{cert.credentialId}</span>
                      </div>
                    )}
                  </div>

                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-cyan-500 hover:text-cyan-400 transition-colors mt-3"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Credential
                    </a>
                  )}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Continuous Learning"
            title="Commitment to Growth"
            description="Staying at the forefront of AI and machine learning through continuous education."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <GlassCard hover={false} className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">
                    {certifications.length}+
                  </div>
                  <p className="text-muted-foreground">Professional Certifications</p>
                </div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">
                    3+
                  </div>
                  <p className="text-muted-foreground">Major Institutions</p>
                </div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">
                    100+
                  </div>
                  <p className="text-muted-foreground">Hours of Learning</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Key Areas"
            title="Areas of Certification"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            {[
              { title: "Machine Learning", count: 2, color: "from-cyan-500/20 to-cyan-600/20" },
              { title: "Deep Learning", count: 2, color: "from-blue-500/20 to-blue-600/20" },
              { title: "Blockchain", count: 1, color: "from-purple-500/20 to-purple-600/20" },
              { title: "Programming", count: 1, color: "from-green-500/20 to-green-600/20" },
            ].map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl bg-gradient-to-br ${area.color} border border-border/50 text-center`}
              >
                <div className="text-3xl font-bold mb-2">{area.count}</div>
                <p className="text-sm text-muted-foreground">{area.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
