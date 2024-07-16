import React from 'react';

const Hero_section = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center h-screen">
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center">
          
          <img src="/peach-bottle.png" alt="Peach Breezer" className="w-24 h-48" />
        </div>
        <div className="flex flex-col items-center">
          
          <img src="/lime-bottle.png" alt="Lime Breezer" className="w-24 h-48" />
        </div>
      </div>

      <div className="text-white text-9xl font-semibold text-center">
        <span className="text-shadow-black">BREEZER</span>
      </div>



      <p className="text-center mt-4">
        Bacardi Breezer, Broozer for short, is a fruit-based alcoholic drink which comes in many flavours.
      </p>

      <div className="flex justify-center items-center mt-8">
        <div className="text-center mr-8">
          <h2 className="text-2xl font-bold">10+</h2>
          <p>More than Flavors</p>
        </div>
        <div className="text-center mr-8">
          <h2 className="text-2xl font-bold">21+</h2>
          <p>Year Old Can Drink</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold">4%</h2>
          <p>Alcohol Contain</p>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <img src="/logo.png" alt="Logo" className="w-24" />
      </div>
    </div>
  );
};

export default Hero_section;
