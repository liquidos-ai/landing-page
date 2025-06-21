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
                Built in Rust for unmatched performance
              </div>

              {/* Main heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 font-space">
                The AI Platform for
                <br />
                <span className="gradient-text text-glow">
                  Building Tomorrow
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-4 font-space font-medium">
                Performance. Intelligence. Evolution.
              </p>
              <p className="text-base lg:text-lg text-gray-500 mb-16 max-w-3xl leading-relaxed">
                LiquidOS is the cutting-edge AI tech stack that powers the next
                generation of intelligent systems. Built from the ground up in
                Rust, we deliver unparalleled performance and reliability for
                enterprises pushing the frontiers of artificial intelligence.
              </p>
            </div>

            {/* Right Column - ParticleSphere */}
            <div className="lg:relative order-last lg:order-last">
              <ParticleSphere />
            </div>
          </div>

          {/* Performance Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 font-space">
                100x
              </div>
              <div className="text-sm text-gray-400">Faster processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 font-space">
                <span className="text-orange-500">🦀</span> Rust
              </div>
              <div className="text-sm text-gray-400">Powered performance</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 font-space">
                Zero
              </div>
              <div className="text-sm text-gray-400">Runtime overhead</div>
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
              Why LiquidOS?
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              A revolutionary AI platform that combines the speed of Rust with
              cutting-edge AI capabilities
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />

              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 mb-4">
                  <Cpu className="w-5 h-5 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-space">
                  Rust-Powered Core
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Built entirely in Rust for memory safety, blazing performance,
                  and zero-cost abstractions in AI workloads.
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
                  AI-First Architecture
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Purpose-built for AI workloads with native support for LLMs,
                  embeddings, and distributed computing.
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
                  Enterprise Ready
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Production-grade reliability with built-in security, audit
                  trails, and compliance features.
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
                  Developer Experience
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Intuitive APIs, comprehensive SDKs, and tools that make
                  building AI applications a breeze.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-black relative">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-red-900/20 via-red-950/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-space">
              Products from our team
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Discover the powerful products and solutions powered by our AI
              platform
            </p>
          </div>

          {/* Product Cards */}
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Corty Feature Card */}
            <div className="relative bg-gradient-to-r from-red-900/15 via-pink-900/15 to-violet-900/15 rounded-3xl p-10 border border-red-500/20 backdrop-blur-sm hover:border-red-500/40 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-violet-500/5 rounded-3xl" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-space">
                    Corty
                  </h3>
                </div>
                <p className="text-gray-400 mb-6 text-lg">
                  Our flagship AI-native code intelligence platform. Index,
                  understand, and collaborate on complex codebases with the
                  power of symbolic AI, RAG, and agentic capabilities.
                </p>
                <Link
                  to="/corty"
                  className="inline-flex items-center text-red-400 hover:text-red-300 font-semibold transition-colors"
                >
                  Learn more about Corty
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* AutoAgents Feature Card */}
            <div className="relative bg-gradient-to-r from-red-900/15 via-pink-900/15 to-violet-900/15 rounded-3xl p-10 border border-red-500/20 backdrop-blur-sm hover:border-red-500/40 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-violet-500/5 rounded-3xl" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-violet-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-space">
                    AutoAgents
                  </h3>
                  <div className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                    <span className="text-xs text-green-400 font-semibold">
                      OPEN SOURCE
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 mb-6 text-lg">
                  A powerful, fully open-source AI agent library built in Rust.
                  Create autonomous agents that can reason, plan, and execute
                  complex tasks with blazing performance and memory safety.
                </p>
                <a
                  href="https://github.com/liquidos-ai/AutoAgents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-400 hover:text-red-300 font-semibold transition-colors"
                >
                  View on GitHub
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm mb-4">
              Explore the frontier of AI with us
            </p>
            <div className="flex justify-center gap-2">
              <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
