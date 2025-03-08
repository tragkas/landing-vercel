import React from "react";
import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Pricing } from "../components/Pricing"
import { Footer } from "../components/Footer";

// Export all components together
export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </>
  );
}