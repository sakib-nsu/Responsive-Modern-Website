import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "29.99",
    description: "Perfect for individuals and small teams",
    features: [
      "Up to 5 team members",
      "10GB storage",
      "Basic analytics",
      "Email support",
      "API access",
      "Mobile app",
    ],
    mostPopular: false,
  },
  {
    name: "Professional",
    price: "79.99",
    description: "Best for growing businesses",
    features: [
      "Up to 25 team members",
      "100GB storage",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Mobile app",
      "Custom integrations",
      "Advanced security",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    price: "199.99",
    description: "For large organizations",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Enterprise analytics",
      "24/7 phone support",
      "API access",
      "Mobile app",
      "Custom integrations",
      "Advanced security",
      "Dedicated account manager",
      "Custom SLA",
    ],
    mostPopular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative px-10 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center sm:mb-16 sm:py-20 lg:mb-20">
          <h2 className="mb-4 text-5xl font-bold sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Simple, Transparent
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
  Choose the perfect plan for your needs. All plans include a 14-day free trial.
</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan, key) => (
              <div
                key={key}
                className={`relative bg-slate-900/50 backdrop-blur-sm border rounded-xl p-6 sm:rounded-2xl sm:p-8 transition-all duration-300 overflow-visible group flex flex-col h-full ${
                  plan.mostPopular ? "border-blue-500 shadow-2xl shadow-blue-500/20 lg:scale-105"
                    : "border-slate-800 hover:border-slate-700"
                }`}
              >
                {plan.mostPopular && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="flex items-center space-x-1 px-3 sm:px-4 py-1 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                        <Star className="w-3 h-3 sm:w-3 sm:h-3 fill-white"></Star>
                        <span>Most Popular</span>
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6 sm:mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline justify-center">
                        <span className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            ${plan.price}
                        </span>
                        <span className="text-gray-400 ml-1 sm:ml-2 text-sm sm:text-base">/month</span>
                    </div>
                </div>

                <ul className="space-y-3 sm:space-x-0 mb-6 sm:mb-8 flex-row">
                    {plan.features.map((feature, featureKey) => (
                        <li key={featureKey} className="flex items-start space-x-2 mb-3 sm:space-x-3">
                            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-500/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400"></Check>
                            </div>
                            <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                        </li>
                    ))}
                </ul>

                <button
                  className={`w-full py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-300 mt-auto hover:scale-102 cursor-pointer text-sm sm:text-base ${
                    plan.mostPopular
                      ? "bg-gradient-to-b from-blue-500 to-cyan-500"
                      : "bg-white/5 border border-white/10 hover:bg-white/10"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
        </div>

        <div className="mt-8 text-center sm:mt-12">
            <p className="text-gray-400 text-xl text-base">
             Need a custom plan? <a href="#" className="text-blue-400 hover:underline">Contact our sales team</a>
            </p>
        </div>
      </div>
    </section>
  );
}