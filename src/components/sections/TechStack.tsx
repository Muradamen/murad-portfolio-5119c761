import { techStack } from "@/lib/data";
import Reveal from "@/components/Reveal";

const TechStack = () => {
  // Double the array for seamless loop
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <section id="stack" className="py-24 md:py-32 overflow-hidden">
      <div className="container px-4">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Technologies I work with daily to build modern, scalable applications.
            </p>
          </div>
        </Reveal>

        {/* Infinite Marquee */}
        <div className="relative">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex overflow-hidden">
            <div className="flex animate-marquee hover:[animation-play-state:paused]">
              {duplicatedStack.map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 mx-4 group"
                >
                  <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card hover:border-primary/50 transition-all duration-300">
                    <span className="text-2xl">{tech.icon}</span>
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Secondary row - reverse direction */}
        <div className="relative mt-6">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex overflow-hidden">
            <div className="flex animate-marquee [animation-direction:reverse] hover:[animation-play-state:paused]">
              {duplicatedStack.reverse().map((tech, index) => (
                <div
                  key={`${tech.name}-reverse-${index}`}
                  className="flex-shrink-0 mx-4 group"
                >
                  <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card hover:border-primary/50 transition-all duration-300">
                    <span className="text-2xl">{tech.icon}</span>
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
