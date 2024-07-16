import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">BREEZE</h1>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-2">About Us</h2>
            <p>Bacardi Breezer, Breezer for short, is a fruit-based alcoholic drink which comes in many flavours.</p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="/breezer-bottles.png" alt="Breezer Bottles" className="w-full md:w-3/4" />
          </div>
        </div>

        <div className="flex flex-col mt-8">
          <h2 className="text-2xl font-bold mb-2">We Bacardi</h2>
          <p>BACARDI is a rum brand established in 1862 that has been producing world-class rums since. Our history is rich, and hunger for continued innovation in the industry never ceases.</p>
          <ul className="list-none mt-4">
            <li><a href="#" className="text-blue-500 hover:underline">Our Product</a></li>
            <li><a href="#" className="text-blue-500 hover:underline">How We Work</a></li>
            <li><a href="#" className="text-blue-500 hover:underline">Our Business</a></li>
            <li><a href="#" className="text-blue-500 hover:underline">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
