import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import Reveal from "@/components/Reveal";

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container px-4">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A selection of projects I've built, from cloud platforms to developer tools.
            </p>
          </div>
        </Reveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`group relative rounded-2xl border border-border bg-card p-6 card-glow ${
                  project.featured ? "lg:col-span-2 lg:row-span-1" : ""
                }`}
              >
                {/* Project icon */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Folder className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View live site"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/20 text-primary border-0">
                      Featured
                    </Badge>
                  </div>
                )}
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/muradamin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View All on GitHub
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
