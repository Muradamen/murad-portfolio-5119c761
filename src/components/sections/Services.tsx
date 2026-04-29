import { services } from "@/lib/data";
import Reveal from "@/components/Reveal";
import { Database, LayoutDashboard, TrendingUp, Brain, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Database,
  LayoutDashboard,
  TrendingUp,
  Brain,
};

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-card/30">
      <div className="container px-4">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Services I <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Practical, business-focused data services designed to deliver measurable impact.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Database;
            return (
              <Reveal key={service.title} delay={index * 0.1}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 card-glow">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
