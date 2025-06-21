import { Users, Target, Zap, Globe } from "lucide-react";
import profile from "../../assets/proile.jpg";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Developer-First",
      description:
        "We build for developers, by developers. Every feature is designed to enhance the developer experience.",
    },
    {
      icon: Target,
      title: "Innovation",
      description:
        "We push the boundaries of what's possible with AI and code intelligence to solve real problems.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Speed and reliability are at the core of everything we build. Your time is valuable.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "We're building tools that help development teams worldwide create better software faster.",
    },
  ];

  const team = [
    {
      name: "Sai Vishwak Korimerla",
      role: "Founder",
      bio: "Passionate AI enthusiast",
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
              We're on a mission to make every developer more productive by
              bringing AI-powered intelligence to every line of code.
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
                Corty was born from a simple observation: developers spend too
                much time searching for and understanding code. Whether
                onboarding to a new codebase, debugging complex issues, or
                trying to understand legacy systems, the tools available were
                fragmented and inefficient.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our founders, having experienced these pain points firsthand at
                big tech companies and leading development organizations,
                decided to build the code intelligence platform they wished they
                had. Combining cutting-edge AI with deep understanding of
                developer workflows, Corty is emerging as the first AI-native
                code intelligence platform.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We're building something that will help engineering teams at
                organizations of all sizes navigate complex codebases,
                accelerate development, and build better software faster.
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
                The person building the future of code intelligence
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
                <p className="text-red-400 text-lg mb-4 font-medium">
                  {team[0].role}
                </p>
                <p className="text-gray-400 leading-relaxed">{team[0].bio}</p>
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
                  passion for developer tools and AI innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="btn-primary font-space">
                    Get in Touch
                  </Link>
                  <a
                    href="mailto:support@corty.dev"
                    className="btn-secondary font-space"
                  >
                    Contact Us
                  </a>
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
