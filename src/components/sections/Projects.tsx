import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import Reveal from "@/components/Reveal";

import projectPython from "@/assets/project-python-foundations.jpg";
import projectSuperstore from "@/assets/project-superstore.jpg";
import projectWater from "@/assets/project-water-access.jpg";
import projectData from "@/assets/project-data.jpg";
import projectAsr from "@/assets/project-asr.jpg";
import projectHousePrice from "@/assets/project-house-price.jpg";
import projectAttrition from "@/assets/project-employee-attrition.jpg";
import projectFraud from "@/assets/project-fraud-detection.jpg";
import projectNlp from "@/assets/project-nlp-sentiment.jpg";
import projectLoan from "@/assets/project-loan-approval.jpg";
import projectSegmentation from "@/assets/project-customer-segmentation.jpg";
import projectEcommerce from "@/assets/project-ecommerce-forecast.jpg";
import projectAnomaly from "@/assets/project-anomaly-detection.jpg";

const projectImages: Record<string, string> = {
  "1": projectAttrition,
  "2": projectSuperstore,
  "3": projectSuperstore,
  "4": projectSegmentation,
  "5": projectHousePrice,
  "6": projectHousePrice,
  "7": projectAttrition,
  "8": projectEcommerce,
  "9": projectSegmentation,
  "10": projectFraud,
  "11": projectNlp,
  "12": projectLoan,
  "13": projectSegmentation,
  "14": projectSegmentation,
  "15": projectAnomaly,
  "16": projectHousePrice,
  "17": projectWater,
  "18": projectWater,
  "19": projectWater,
  "20": projectWater,
};

// Suppress unused import warnings — kept available for future projects
void projectPython; void projectData; void projectAsr;

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
              Real-world data analysis projects showcasing business insights, dashboards, and problem-solving.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`group relative rounded-2xl border border-border bg-card overflow-hidden card-glow h-full flex flex-col ${
                  project.featured ? "lg:col-span-1" : ""
                }`}
              >
                {projectImages[project.id] && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={projectImages[project.id]}
                      alt={project.title}
                      loading="lazy"
                      width={800}
                      height={512}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Folder className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="View on GitHub">
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="View live">
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Key Insight */}
                  {project.insights && (
                    <div className="mb-4 p-3 rounded-lg bg-primary/5 border border-primary/10">
                      <div className="flex items-start gap-2">
                        <Lightbulb className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-foreground/80">{project.insights}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/20 text-primary border-0 backdrop-blur-sm">
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
              <a href="https://github.com/Muradamen" target="_blank" rel="noopener noreferrer">
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
