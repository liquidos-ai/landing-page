//NOT USED, Keeping for later

import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Corty has completely transformed how our team onboards new developers. What used to take weeks now takes days.",
      author: "Sarah Chen",
      role: "Engineering Manager",
      company: "Stripe",
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote:
        "The AI-powered search is incredible. I can find any piece of code across our 50+ microservices in seconds.",
      author: "Marcus Rodriguez",
      role: "Senior Developer",
      company: "Shopify",
      avatar:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote:
        "The code intelligence features have helped us reduce technical debt by 40% and catch potential issues before they hit production.",
      author: "Emily Watson",
      role: "Tech Lead",
      company: "GitHub",
      avatar:
        "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-black relative">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-violet-600/10 to-pink-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-600/10 to-orange-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-space">
            Trusted by leading
            <span className="gradient-text block">engineering teams</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            See what developers and engineering leaders are saying about Corty
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />

              <div className="relative">
                {/* Quote Icon and Rating */}
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-6 h-6 text-red-400/50" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-red-400 text-red-400"
                      />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full object-cover border-2 border-gray-700"
                  />
                  <div>
                    <div className="font-semibold text-white font-space text-sm">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Logos */}
        <div className="mt-16">
          <p className="text-center text-gray-500 mb-10 font-mono tracking-wider uppercase text-sm">
            Trusted by engineering teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-40 hover:opacity-60 transition-opacity duration-500">
            {[
              "Stripe",
              "Shopify",
              "GitHub",
              "Netflix",
              "Airbnb",
              "Uber",
              "Dropbox",
              "Slack",
            ].map((company) => (
              <div
                key={company}
                className="text-lg font-bold text-gray-400 hover:text-gray-300 transition-colors font-space"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
