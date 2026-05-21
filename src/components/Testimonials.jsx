const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Developer",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
    content:
      "This AI-powered development platform has revolutionized how we write code.",
  },
  {
    name: "Marcus Rodriguez",
    role: "Tech Lead",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
    content:
      "The automated testing and debugging features are game-changers. We ship code faster and with more confidence.",
  },
  {
    name: "Emily Watson",
    role: "CTO",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300",
    content:
      "Our development velocity increased by 300% since adopting this platform. It has transformed our workflow.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16">
          {/* Left Side - Header */}
          <div className="w-full text-center lg:w-1/2 lg:text-left">
            <h2 className="mb-4 text-4xl font-bold leading-tight sm:mb-6 sm:text-5xl lg:text-6xl">
              What developers are saying about us
            </h2>

            <p className="mx-auto max-w-2xl text-base text-gray-400 sm:text-lg lg:mx-0">
              Everything you need to build, test, and deploy applications with
              AI-powered development tools.
            </p>
          </div>

          {/* Right Side - Testimonials */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6 sm:space-y-8">
              {testimonials.map((testimonial, key) => (
                <div
                  key={key}
                  className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 backdrop-blur-sm sm:rounded-2xl sm:p-6"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                        “
                      </div>
                    </div>

                    <div className="flex-1">
                      <p className="mb-4 text-base leading-relaxed text-white sm:text-lg">
                        {testimonial.content}
                      </p>

                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="h-12 w-12 rounded-full object-cover"
                        />

                        <div>
                          <h4 className="text-sm font-semibold text-white sm:text-base">
                            {testimonial.name}
                          </h4>

                          <p className="text-xs text-gray-400 sm:text-sm">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}