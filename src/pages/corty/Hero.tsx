const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-start pt-24">
      {/* Background gradient effects - Single centered sphere */}
      <div className="absolute inset-0">
        {/* Main radial gradient - single large sphere effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-red-900/25 via-red-950/15 to-transparent rounded-full blur-3xl animate-pulse-glow" />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 w-full">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-8 animate-float">
          <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
          Coming Soon - AI-powered code intelligence
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 font-space">
          The AI-native code
          <br />
          <span className="gradient-text text-glow">intelligence platform</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-4 max-w-4xl mx-auto font-space font-medium">
          Index. Understand. Collaborate.
        </p>
        <p className="text-base lg:text-lg text-gray-500 mb-16 max-w-3xl mx-auto leading-relaxed">
          We're building the future of code intelligence. Unify your
          organization's code and knowledge with Corty's multi-repo, AI-powered
          context engine. Transform how your team navigates, understands, and
          collaborates on complex codebases.
        </p>

        {/* Vision Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2 font-space">
              10x
            </div>
            <div className="text-sm text-gray-400">Faster code discovery</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-white mb-2 font-space">
              Symbolic AI
            </div>
            <div className="text-sm text-gray-400">Powered intelligence</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2 font-space">
              ∞
            </div>
            <div className="text-sm text-gray-400">Possibilities ahead</div>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="mt-20">
          <p className="text-gray-500 text-sm mb-6 font-mono tracking-wider uppercase">
            The Problem We're Solving
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800/50">
              <h3 className="text-white font-semibold mb-2 font-space">
                Distributed Repository Challenges
              </h3>
              <p className="text-gray-400 text-sm">
                Current AI code agents struggle with enterprise environments
                where repositories are distributed across multiple systems and
                organizational boundaries, limiting their effectiveness.
              </p>
            </div>
            <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800/50">
              <h3 className="text-white font-semibold mb-2 font-space">
                Third-Party Code Integration
              </h3>
              <p className="text-gray-400 text-sm">
                Enterprise applications typically build upon extensive
                third-party libraries and frameworks, requiring comprehensive
                indexing and seamless integration with proprietary codebases.
              </p>
            </div>
            <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800/50">
              <h3 className="text-white font-semibold mb-2 font-space">
                Enterprise Security Requirements
              </h3>
              <p className="text-gray-400 text-sm">
                Organizations require on-premise deployment solutions that
                maintain complete data sovereignty and comply with strict
                security protocols without external code sharing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
