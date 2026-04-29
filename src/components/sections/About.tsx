import { aboutText, aboutHighlights } from "@/lib/data";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Target, TrendingUp, Database, CheckCircle2, Download } from "lucide-react";

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
            <div className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 whitespace-pre-line">
              {aboutText}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-6 mb-12">
              <h3 className="font-semibold mb-4 text-foreground">My work includes:</h3>
              <ul className="space-y-3">
                {aboutHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col items-center text-center mb-12">
              <Button size="lg" asChild>
                <a
                  href="/Murad_Amin_Data_Analyst_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV (PDF)
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                📩 Open to freelance and remote opportunities
              </p>
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
