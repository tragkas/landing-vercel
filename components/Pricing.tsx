export function Pricing() {
  const plans = [
    {
      name: "Free Plan",
      price: "$0/mo",
      features: ["Basic features", "Limited access", "Community support", "more"],
      buttonText: "Get Started",
    },
    {
      name: "Pro Plan",
      price: "$19/mo",
      features: ["Extra storage", "Priority support", "Advanced analytics", "more"],
      buttonText: "Get Started",
    },
    {
      name: "Business Plan",
      price: "$29/mo",
      features: ["Unlimited access", "AI automation", "Dedicated account manager", "more"],
      buttonText: "Get Started",
    },
  ];

  return (
    <section id="pricing" className="h-screen flex flex-col items-center justify-center bg-gray-500 text-white px-6">
      <h2 className="text-4xl font-bold mb-8">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white/10 p-6 rounded-lg backdrop-blur-lg shadow-lg hover:scale-105 transition text-left">
            <h3 className="text-2xl font-semibold">{plan.name}</h3>
            <p className="text-3xl mt-4">{plan.price}</p>
            <ul className="mt-4 text-gray-300">
              {plan.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>
            <button className="mt-6 bg-blue-500 px-4 py-2 rounded-lg hover:scale-105 transition">
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
