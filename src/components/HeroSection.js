import React from 'react';
import heroImage from '../images/HeroSection.jpg';

const HeroSection = () => {
  return (
    <div className="hero-section relative text-center">
      <img src={heroImage} alt="Hero" className="w-full h-auto" />
      <div className="hero-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
        <h1 className="text-4xl font-bold mb-4" id="editable-heading">
          Extracting value from your <span className="text-green-500">Data.</span><br/> Its what we do
        </h1>
        <p className="text-xl" id="editable-subtext">
          Unlock the full potential of your data, take your business to the next <br/> level with our powerful analytics solutions
        </p>
        <button className="bg-green-500 text-gray-800 px-6 py-2 rounded-full mt-4">
          Let's talk
          <span className="ml-2">&#8594;</span> {/* Right arrow */}
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
