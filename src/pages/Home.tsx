import { ArrowRight, Cpu, Zap, Shield, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { ParticleSphere } from "../components/ParticleSphere";

const HomePage = () => {
  return (
    <main className="relative flex-1 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black overflow-hidden flex items-start pt-24">
        {/* Background gradient effects - Single centered sphere */}
        <div className="absolute inset-0">
          {/* Main radial gradient - single large sphere effect */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-red-900/25 via-red-950/15 to-transparent rounded-full blur-3xl animate-pulse-glow" />

          {/* Subtle grid overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-8 animate-float">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                FOSS - Fully Open Source Stack
              </div>

              {/* Main heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 font-space">
                Building Blocks for the
                <br />
                <span className="gradient-text text-glow">
                  Agentic Future
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-4 font-space font-medium">
                The future stack to empower robotics, healthcare, edge AI, and beyond.
              </p>
              <p className="text-base lg:text-lg text-gray-300 mb-16 max-w-3xl leading-relaxed">
                LiquidOS provides the foundational infrastructure for the next generation of intelligent systems. 
                We're solving the AI deployment mess with building blocks that let agents work seamlessly across 
                any environment - from your laptop to the cloud to edge devices.
              </p>
            </div>

            {/* Right Column - ParticleSphere */}
            <div className="lg:relative order-last lg:order-last">
              <ParticleSphere />
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 font-space">
                Edge + Cloud
              </div>
              <div className="text-sm text-gray-400">True hybrid deployment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 font-space">
                <span className="text-orange-500">🦀</span> Rust
              </div>
              <div className="text-sm text-gray-400">Unmatched safety and performance</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 font-space">
                Ambient
              </div>
              <div className="text-sm text-gray-400">Intelligence everywhere</div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <div className="mt-12 text-center">
        <div className="relative bg-gradient-to-r from-red-900/15 via-pink-900/15 to-violet-900/15 rounded-3xl p-10 border border-red-500/20 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-violet-500/5 rounded-3xl" />
          <div className="relative">
            <h3 className="text-2xl font-bold text-white mb-3 font-space">
              Interested in Cutting Edge AI Products?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Join the waitlist to be among the first to experience AI-powered
              code intelligence that scales with your team.
            </p>

            {/* Email Input and Button */}
            <form
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              action="https://getlaunchlist.com/s/LZUJcK"
              method="POST"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent backdrop-blur-sm"
              />
              <button
                className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center whitespace-nowrap font-space shadow-lg shadow-red-500/25"
                type="submit"
              >
                Join the Waitlist
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Core Features Section */}
      <section className="py-20 bg-black relative">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-600/10 to-pink-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-violet-600/10 to-red-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-space">
              Why This Matters
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Everyone's excited about AI, but the infrastructure is held together with duct tape.
              Here's what's broken and how we're fixing it.
            </p>
          </div>

          {/* Problems Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />

              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 mb-4">
                  <Cpu className="w-5 h-5 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-space">
                  Cloud Dependency
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Cloud AI is great until your internet goes down, you have sensitive data, 
                  or milliseconds of latency actually matter.
                </p>
              </div>
            </div>

            <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />

              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-pink-500 to-violet-500 mb-4">
                  <Zap className="w-5 h-5 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-space">
                  Edge Limitations
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Edge computing sounds cool, but try running GPT-4 on a Raspberry Pi. 
                  Good luck with that.
                </p>
              </div>
            </div>

            <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />

              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-violet-500 to-red-500 mb-4">
                  <Shield className="w-5 h-5 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-space">
                  Fake Hybrid
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  "Hybrid" solutions are usually just two separate systems pretending 
                  to talk to each other. It's a nightmare to maintain.
                </p>
              </div>
            </div>

            <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />

              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-violet-500 mb-4">
                  <Code className="w-5 h-5 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-space">
                  Security Trade-offs
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Most companies end up choosing between "powerful AI" and "keeping 
                  our data safe." Why should you have to pick?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-black relative">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-red-900/20 via-red-950/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-space">
              Our Solution: True Hybrid Intelligence
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              What if AI could seamlessly flow between environments? Not forced deployment choices, 
              but intelligent distribution based on need. Welcome to Ambient Intelligence.
            </p>
          </div>

          {/* Solution Cards */}
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Actually Hybrid Card */}
            <div className="relative bg-gradient-to-r from-red-900/15 via-pink-900/15 to-violet-900/15 rounded-3xl p-10 border border-red-500/20 backdrop-blur-sm hover:border-red-500/40 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-violet-500/5 rounded-3xl" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-space">
                    Actually Hybrid (Not Just Marketing Speak)
                  </h3>
                </div>
                <p className="text-gray-400 mb-4 text-lg leading-relaxed">
                  Need faster response? Deploy one of your agents on edge closer to the data. Lost internet connection? 
                  They keep working locally. It just works.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  You need powerful AI models or Physics Simulations to run? No worries, Deploy the Agent on the cloud 
                  and Edge Intelligence can connect to the cloud with Hybrid architecture.
                </p>
              </div>
            </div>
          </div>
          </div>
      </section>

      {/* Open Source Section */}
      <section className="py-20 bg-black relative">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-600/8 to-pink-600/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-red-600/8 to-violet-600/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-space">
              Open Source Innovation
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Experience our technology firsthand. We believe in open innovation 
              and building the future together with the developer community.
            </p>
          </div>

          {/* AutoAgents Card */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gray-900/30 backdrop-blur-sm rounded-3xl p-10 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 hover:transform hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-red-500/5 to-pink-500/5 opacity-0 hover:opacity-100 rounded-3xl transition-opacity duration-500" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/25">
                    <span className="text-3xl">🤖</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white font-space">
                      AutoAgents
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="px-3 py-1 bg-violet-500/15 border border-violet-500/30 rounded-full">
                        <span className="text-xs text-violet-300 font-semibold">
                          OPEN SOURCE
                        </span>
                      </div>
                      <div className="px-3 py-1 bg-orange-500/15 border border-orange-500/30 rounded-full">
                        <span className="text-xs text-orange-300 font-semibold">
                          RUST POWERED
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                      A powerful, production-ready AI agent library that showcases the capabilities 
                      of our LiquidOS building blocks. Built entirely in Rust for maximum performance and safety.
                    </p>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Autonomous reasoning and decision making</li>
                      <li>• Multi-agent coordination and communication</li>
                      <li>• Memory-safe execution environment</li>
                      <li>• Blazing-fast performance on any hardware</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                      Start building the future today. AutoAgents demonstrates how our infrastructure 
                      enables developers to create sophisticated AI systems without the complexity.
                    </p>
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50">
                      <code className="text-green-400 text-sm">
                        cargo add autoagents<br/>
                        // Start building intelligent agents<br/>
                        // with production-ready infrastructure
                      </code>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://github.com/liquidos-ai/AutoAgents"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="mr-2 text-yellow-400">⭐</span>
                    Star on GitHub
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                  <a
                    href="https://liquidos-ai.github.io/AutoAgents/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 hover:border-violet-500/50 text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:bg-violet-500/10"
                  >
                    Quick Start Guide
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-4 font-space">The Bottom Line</h3>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We're not building another AI framework. We're building the infrastructure - 
              the foundational building blocks that make intelligent systems actually work in the real world.
            </p>
          </div>

      </section>
    </main>
  );
};

export default HomePage;
