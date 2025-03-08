// Navigation Component
export function Navigation() {
  return (
    <nav className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl flex space-x-6 shadow-lg border border-white/20">
      <a href="#features" className="text-white hover:text-blue-300 transition">Features</a>
      <a href="#pricing" className="text-white hover:text-blue-300 transition">Pricing</a>
    </nav>
  );
}

