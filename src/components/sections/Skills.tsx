import { skillCategories } from "@/lib/data";
import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-card/30">
      <div className="container px-4">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Core competencies powering my data analysis and machine learning work.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl border border-border bg-card p-6 card-glow h-full"
              >
                <div className="text-3xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
