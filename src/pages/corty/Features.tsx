import { Brain, Network, Zap, Search } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'Symbolic AI Engine',
      description: 'Advanced symbolic reasoning that understands code structure, semantics, and relationships beyond traditional pattern matching for deeper code comprehension.',
      gradient: 'from-red-500 to-pink-500',
      hoverGradient: 'from-red-500/5 to-pink-500/5'
    },
    {
      icon: Search,
      title: 'RAG-Powered Search',
      description: 'Retrieval-Augmented Generation combines symbolic understanding with contextual retrieval to provide precise, relevant code insights and documentation.',
      gradient: 'from-pink-500 to-violet-500',
      hoverGradient: 'from-pink-500/5 to-violet-500/5'
    },
    {
      icon: Zap,
      title: 'Agentic Capabilities',
      description: 'Autonomous AI agents that can reason about code, make intelligent decisions, and perform complex multi-step analysis across your entire codebase.',
      gradient: 'from-violet-500 to-red-500',
      hoverGradient: 'from-violet-500/5 to-red-500/5'
    },
    {
      icon: Network,
      title: 'Contextual Intelligence',
      description: 'Multi-dimensional understanding of code context, dependencies, and organizational knowledge that provides intelligent insights tailored to your specific environment.',
      gradient: 'from-red-500 to-violet-500',
      hoverGradient: 'from-red-500/5 to-violet-500/5'
    }
  ];

  return (
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
            Core Features
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Powered by Symbolic AI, RAG, and Agentic capabilities for true code intelligence at enterprise scale
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.hoverGradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`} />
              
              <div className="relative">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 glow-effect`}>
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 font-space">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;