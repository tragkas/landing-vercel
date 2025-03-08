export function Features() {
  const features = [
    { title: "AI-Powered Tools", description: "Leverage the power of AI for smarter designs and automation." },
    { title: "Lightning-Fast Performance", description: "Optimized for speed and efficiency with cutting-edge technology." },
    { title: "Intuitive User Experience", description: "A seamless experience designed for all users." },
    { title: "Secure Cloud Storage", description: "Your data is safe with our top-tier encryption and security." },
    { title: "24/7 Support", description: "Get round-the-clock support from our team of experts." },
    { title: "Seamless Integrations", description: "Easily connect with your favorite tools and services." },
  ];

  return (
    <section id="features" className="p-6 flex flex-col items-center justify-center bg-gray-500 text-white px-6">
      <h2 className="text-4xl font-bold mb-8">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {features.map((feature, index) => (
          <div key={index} className="bg-white/10 p-6 rounded-lg backdrop-blur-lg shadow-lg hover:scale-105 transition text-center">
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-300 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}



