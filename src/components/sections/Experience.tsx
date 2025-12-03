import { motion } from "framer-motion";
import { Building2, Calendar, CheckCircle2 } from "lucide-react";
import { experiences } from "@/lib/data";
import Reveal from "@/components/Reveal";

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-card/30">
      <div className="container px-4">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              My professional journey building products that scale.
            </p>
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <Reveal key={exp.id} delay={index * 0.15}>
              <div
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 -translate-x-1/2 top-0" />

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`ml-8 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="rounded-2xl border border-border bg-card p-6 card-glow">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Building2 className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{exp.role}</h3>
                          <p className="text-muted-foreground text-sm">{exp.company}</p>
                        </div>
                      </div>
                    </div>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
