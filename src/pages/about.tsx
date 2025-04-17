import React from 'react';

export function About() {
  return (
    <main className="flex-1 pt-24 md:pt-32 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <h1 className="text-4xl md:text-6xl font-light font-white text-center mb-12 md:mb-16">About LiquidOS</h1>

        <div className="max-w-3xl mx-auto">
          <section className="bg-background/80 dark:bg-background/50 backdrop-blur-xl border border-border/10 rounded-lg p-8 mb-8 transform hover:scale-[1.01] transition-all duration-300">
            <h2 className="text-3xl md:text-4xl font-light mb-6 md:mb-8">Our Vision</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
              At LiquidOS, we're building a new kind of AI—one that doesn't rely on static
              models or constant retraining. Our agent learns continuously, expands its knowledge autonomously,
              and evolves its capabilities without human intervention.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground">
              Inspired by living systems, LiquidOS isn't just artificial intelligence—it's artificial life.
            </p>
          </section>

          <section className="bg-background/80 dark:bg-background/50 backdrop-blur-xl border border-border/10 rounded-lg p-8 transform hover:scale-[1.01] transition-all duration-300">
            <h2 className="text-3xl md:text-4xl font-light mb-6 md:mb-8">Why LiquidOS?</h2>
            <ul className="space-y-6">
              {[
                {
                  title: "Always Learning",
                  description: "Adapts to new data and evolving goals in real-time, ensuring continuous improvement and relevance."
                },
                {
                  title: "Self-Aware Systems",
                  description: "Understands its own capabilities and limitations, making informed decisions about when and how to evolve."
                },
                {
                  title: "Interdisciplinary Intelligence",
                  description: "Learns across domains, not just within one, creating connections and insights that would be impossible with traditional AI."
                }
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="w-2 h-2 rounded-full bg-primary mt-3 group-hover:scale-150 transition-transform duration-300" />
                  <div>
                    <h3 className="text-lg md:text-xl font-medium mb-2">{item.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
