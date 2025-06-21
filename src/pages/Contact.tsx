import { Mail } from "lucide-react";

const Contact = () => {
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
              Contact
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              We'd love to hear from you. Whether you're interested in our
              platform, have questions, or want to explore partnerships, we're
              here to help.
            </p>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-gradient-to-r from-red-900/20 via-pink-900/20 to-violet-900/20 rounded-3xl p-10 border border-red-500/20 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-violet-500/5 rounded-3xl" />
              <div className="relative text-center">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-red-500/20 to-pink-500/20 mb-6">
                  <Mail className="w-8 h-8 text-red-400" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 font-space">
                  Ready to connect?
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  For all inquiries, partnerships, early access requests, or
                  general questions, reach out to us directly. We typically
                  respond within 24 hours.
                </p>

                <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800/50 mb-8">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <Mail className="w-5 h-5 text-red-400" />
                    <span className="text-lg font-semibold text-white font-space">
                      Email Us
                    </span>
                  </div>
                  <a
                    href="mailto:support@corty.dev"
                    className="text-2xl font-bold text-red-400 hover:text-red-300 transition-colors font-space"
                  >
                    support@liquidos.ai
                  </a>
                  <p className="text-gray-400 text-sm mt-2">
                    We'll get back to you as soon as possible
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:support@liquidos.ai"
                    className="btn-primary font-space"
                  >
                    Send us an Email
                  </a>
                  <a href="/" className="btn-secondary font-space">
                    Learn More About LiquidOS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4 font-space">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-400">
                Quick answers to common questions
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800/50">
                <h3 className="text-lg font-bold text-white mb-3 font-space">
                  When will Corty be available?
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  We're currently in development and building towards our
                  initial release. Contact us at support@liquidos.ai to join our
                  early access program and be among the first to experience our
                  AI-powered code intelligence platform.
                </p>
              </div>

              <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800/50">
                <h3 className="text-lg font-bold text-white mb-3 font-space">
                  What makes Corty different from existing tools?
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Corty combines symbolic AI, RAG-powered search, and agentic
                  capabilities to provide true code intelligence that
                  understands context, relationships, and organizational
                  knowledge across distributed repositories and enterprise
                  environments.
                </p>
              </div>

              <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800/50">
                <h3 className="text-lg font-bold text-white mb-3 font-space">
                  Do you offer enterprise solutions?
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Yes, we're building Corty with enterprise needs in mind,
                  including on-premise deployment, data sovereignty, security
                  compliance, and integration with existing development
                  workflows. Contact us to discuss your specific requirements.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
