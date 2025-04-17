import React from 'react';
import { ParticleSphere } from '../components/particle-sphere';
import { Brain, Globe2, Notebook as Robot } from 'lucide-react';

export function Home() {
  return (
    <main className="relative flex-1 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-8rem)] flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="z-10 text-center md:text-left">
              <h1 className="mb-8">
                <span className="gradient-text font-[450] text-5xl md:text-7xl xl:text-8xl block">
                  LiquidOS:
                </span>
                <span className="text-3xl md:text-4xl xl:text-5xl text-primary font-[450] leading-tight tracking-[-0.02em] block">
                  The AI Agent That
                  <br />
                  Evolves on Its Own
                </span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-[90%] md:max-w-[85%]">
                An intelligent system that adapts, grows, and evolves with knowledge—entirely on its own. 
                Welcome to the next era of AI.
              </p>
            </div>
            <div className="relative order-first md:order-last">
              <ParticleSphere />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}