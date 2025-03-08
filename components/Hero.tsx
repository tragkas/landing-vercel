import React from "react";


export function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center bg-gray-500 text-white px-6">

      <h1 className="text-8xl font-bold p-6">
        The Future of Web <br /> Starts Here.
      </h1>

      <p className="text-lg mt-4 max-w-xl p-6">
        Powerful tools and seamless integrations.
      </p>

      <button className="mt-6 px-6 py-3 bg-blue-600 rounded-lg text-white hover:scale-105 transition p-6">
        Get Started
      </button>
    </section>
  );
}


