import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { GlassCard } from "@/components/ui/glass-card";
import { projects, projectCategories, type Project } from "@/data/profile";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen py-20">
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Portfolio"
            title="My Projects"
            description="A collection of machine learning applications, AI systems, and data science solutions."
          />

          <div className="flex flex-wrap justify-center gap-2 mt-12 mb-8">
            {projectCategories.map((category) => (
              <Button
                key={category.value}
                variant={activeFilter === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category.value)}
                data-testid={`button-filter-${category.value}`}
              >
                {category.label}
              </Button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <GlassCard className="h-full">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-block px-2 py-1 text-xs font-medium rounded-md bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 capitalize">
                          {project.category}
                        </span>
                        {project.featured && (
                          <Badge variant="secondary" className="text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>

                      <h3 className="text-xl font-semibold mb-2" data-testid={`text-project-${project.id}`}>
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-1">
                        {project.description}
                      </p>

                      {project.metrics && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.metrics.map((metric) => (
                            <span
                              key={metric}
                              className="text-xs px-2 py-1 rounded-md bg-green-500/10 text-green-600 dark:text-green-400"
                            >
                              {metric}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.slice(0, 5).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.techStack.length > 5 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.techStack.length - 5}
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            data-testid={`link-github-${project.id}`}
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
                            data-testid={`link-demo-${project.id}`}
                          >
                            <ExternalLink className="w-4 h-4" />
                            Demo
                          </a>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="ml-auto gap-1"
                          onClick={() => setSelectedProject(project)}
                          data-testid={`button-details-${project.id}`}
                        >
                          Details
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block px-2 py-1 text-xs font-medium rounded-md bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 capitalize">
                    {selectedProject.category}
                  </span>
                  {selectedProject.featured && (
                    <Badge variant="secondary" className="text-xs">
                      Featured
                    </Badge>
                  )}
                </div>
                <DialogTitle className="text-2xl" data-testid="text-modal-title">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription>
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 py-4">
                <div>
                  <h4 className="font-medium mb-2">About this project</h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {selectedProject.metrics && (
                  <div>
                    <h4 className="font-medium mb-2">Key Metrics</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="text-sm px-3 py-1 rounded-md bg-green-500/10 text-green-600 dark:text-green-400"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="font-medium mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="gap-2">
                        <Github className="w-4 h-4" />
                        View Code
                      </Button>
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
