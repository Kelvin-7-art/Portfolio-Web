import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Award,
  BarChart3,
  Ticket,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { GlassCard } from "@/components/ui/glass-card";
import { profile, projects, skillCategories, education, testimonials } from "@/data/profile";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-background to-blue-600/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent" />

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div variants={itemVariants}>
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2 inline-block animate-pulse" />
              Available for opportunities
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            data-testid="text-hero-title"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              {profile.shortName}
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto"
          >
            {profile.role}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            {profile.headline}
          </motion.p>

          {/* ✅ NEW: Short Future Interns highlight (home) */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto mb-10">
            <GlassCard hover={false} className="p-5 md:p-6 text-left">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-cyan-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      <b>Future Interns — Machine Learning Internship</b> (Jan 2026)
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Built end-to-end ML/NLP projects: <b>Sales & Demand Forecasting</b>, <b>Support Ticket Classification</b>, and an
                      <b> AI Resume Screener</b> using <b>NLTK</b>.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 md:justify-end">
                  <Badge variant="outline" className="text-xs">
                    Python
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    NLTK
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    NLP
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Forecasting
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <BarChart3 className="w-4 h-4 mt-0.5 text-cyan-500" />
                  <span>Task 01: Forecasting (ARIMA/SARIMA, Prophet, Chronos)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Ticket className="w-4 h-4 mt-0.5 text-cyan-500" />
                  <span>Task 02: Ticket Classification (NLP + ML)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <FileText className="w-4 h-4 mt-0.5 text-cyan-500" />
                  <span>Task 03: Resume Screener (NLTK + React)</span>
                </div>
              </div>

              <div className="mt-4">
                <Link href="/about">
                  <Button variant="outline" className="gap-2" data-testid="button-future-interns-more">
                    View Internship Details
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link href="/projects">
              <Button size="lg" className="gap-2 px-8" data-testid="button-view-projects">
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <a href={profile.cvPath} download>
              <Button size="lg" variant="outline" className="gap-2 px-8" data-testid="button-download-cv">
                <Download className="w-4 h-4" />
                Download CV
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="ghost" className="gap-2" data-testid="button-contact">
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 md:py-32 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Featured Work"
            title="Selected Projects"
            description="A showcase of my most impactful work in machine learning, fraud detection, and AI applications."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {featuredProjects.map((project, index) => (
              <GlassCard key={project.id} delay={index * 0.1}>
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded-md bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 capitalize">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2" data-testid={`text-project-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button variant="outline" size="lg" className="gap-2" data-testid="button-view-all-projects">
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* The rest of your file stays the same (About, Skills, Education, Testimonials, CTA) */}
      {/* ... */}
    </div>
  );
}
