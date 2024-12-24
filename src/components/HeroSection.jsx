import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative h-screen top-[-72px]"
      style={{
        backgroundImage: `url('/images/background.avif')`, // Replace with the actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="h-full flex flex-col items-center justify-center text-center">
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Your Corporate Tax AI Assistant
        </h1>
        {/* Subtitle */}
        <h2 className="text-2xl md:text-4xl font-bold text-red-600 mb-6">
          TaxGPT - Simplifying Tax Calculations
        </h2>
        {/* Description */}
        <p className="text-lg md:text-xl text-white mb-8">
          Using AI to automate and simplify your tax reporting and filing.
        </p>
        {/* Logos */}
        <div className="flex items-center justify-center space-x-2 mb-6">
          <span className="text-white">A Joint Venture between</span>
          <img
            src="/path/to/logo1.png"
            alt="Logo 1"
            className="h-8"
          /> {/* Replace with actual logo path */}
          <span className="text-white">&</span>
          <img
            src="/path/to/logo2.png"
            alt="Logo 2"
            className="h-8"
          /> {/* Replace with actual logo path */}
        </div>
        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-red-600 text-white px-6 py-3 rounded-md">
            Tax Info For Free Zone Companies
          </button>
          <button className="bg-red-600 text-white px-6 py-3 rounded-md">
            Mainland Company Corporate Tax
          </button>
          <button className="bg-red-600 text-white px-6 py-3 rounded-md">
            Freelancer Corporate Tax
          </button>
          <button className="bg-red-600 text-white px-6 py-3 rounded-md">
            Book Free Consultation
          </button>
        </div>
        {/* Search Bar */}
        <div className="mt-12">
          <input
            type="text"
            placeholder="Ask TaxGPT a question"
            className="px-4 py-2 w-[1040px] border rounded-l-md"
          />
          <button className="bg-red-600 text-white px-6 py-[9px] rounded-r-md">
            ➤
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
