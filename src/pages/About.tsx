import { Users, Target, Zap, Globe, Linkedin } from "lucide-react";
import profile from "../../assets/proile.jpg";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Infrastructure-First",
      description:
        "We build foundational systems that enable others to create amazing intelligent applications without the complexity.",
    },
    {
      icon: Target,
      title: "Reliability",
      description:
        "When your surgical robot or autonomous vehicle depends on it, failure is not an option. We build for mission-critical systems.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Built in Rust for memory safety and zero-cost abstractions. Performance and safety are non-negotiable.",
    },
    {
      icon: Globe,
      title: "Ambient Intelligence",
      description:
        "Making AI as ubiquitous and reliable as electricity - seamlessly flowing between edge, cloud, and everything in between.",
    },
  ];

  const team = [
    {
      name: "Sai Vishwak Korimerla",
      role: "Creator",
      bio: "Building the infrastructure for tomorrow's intelligent systems",
      avatar:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Main Content */}
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-red-900/20 via-red-950/10 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-space">
              About
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              We're building the foundational infrastructure that will power the
              next generation of intelligent systems across robotics,
              healthcare, and edge AI.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-gray-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8 font-space">
              Our Story
            </h2>
            <div className="prose prose-lg prose-invert">
              <p className="text-gray-300 leading-relaxed mb-6">
                LiquidOS was born from a simple observation: AI systems today
                are a mess. Cloud AI fails when internet goes down, edge
                computing can't handle complex models, and "hybrid" solutions
                are just two separate systems pretending to work together. The
                infrastructure was fragmented and unreliable.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Having experienced these challenges firsthand in robotics,
                healthcare, and edge computing environments, we decided to build
                the agentic infrastructure they wished existed. We're creating
                the foundational building blocks that enable AI agents to work
                seamlessly across any environment - from your laptop to the
                cloud to edge devices.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We're not building another AI framework. We're building the
                plumbing - the critical infrastructure that makes intelligent
                systems actually useful in the real world, whether that's
                surgical robots, autonomous vehicles, or smart factories.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4 font-space">
                Our Values
              </h2>
              <p className="text-lg text-gray-400">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-red-500/20 to-pink-500/20 mb-4">
                    <value.icon className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-space">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4 font-space">
                Meet the Team
              </h2>
              <p className="text-lg text-gray-400">
                The person building the foundational infrastructure for
                intelligent systems
              </p>
            </div>

            <div className="flex justify-center">
              <div className="text-center max-w-sm">
                <img
                  src={profile}
                  alt={team[0].name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 border-2 border-gray-700"
                />
                <h3 className="text-2xl font-bold text-white mb-2 font-space">
                  {team[0].name}
                </h3>
                <p className="text-red-400 text-lg mb-2 font-medium">
                  {team[0].role}
                </p>
                <a
                  href="https://www.linkedin.com/in/sai-vishwak-korimerla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center p-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <p className="text-gray-400 leading-relaxed mt-2 mb-4">
                  {team[0].bio}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="relative bg-gradient-to-r from-red-900/20 via-pink-900/20 to-violet-900/20 rounded-3xl p-10 border border-red-500/20 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-violet-500/5 rounded-3xl" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-4 font-space">
                  Join us on our mission
                </h3>
                <p className="text-gray-400 mb-6">
                  We're always looking for talented individuals who share our
                  passion for building foundational infrastructure and advancing
                  the agentic future.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="btn-primary font-space">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
