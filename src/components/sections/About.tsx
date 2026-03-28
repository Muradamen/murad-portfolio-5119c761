import { aboutText } from "@/lib/data";
import Reveal from "@/components/Reveal";
import { Target, TrendingUp, Database } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container px-4">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
          </div>
        </Reveal>

        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-lg text-muted-foreground leading-relaxed mb-12 whitespace-pre-line text-center">
              {aboutText}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-card p-6 text-center card-glow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Data Analysis</h3>
                <p className="text-sm text-muted-foreground">Turning raw data into clear, actionable business insights</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-2xl border border-border bg-card p-6 text-center card-glow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Visualization</h3>
                <p className="text-sm text-muted-foreground">Building interactive dashboards that tell compelling data stories</p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="rounded-2xl border border-border bg-card p-6 text-center card-glow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Machine Learning</h3>
                <p className="text-sm text-muted-foreground">Applying ML models to predict outcomes and automate decisions</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
