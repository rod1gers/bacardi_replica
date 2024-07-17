import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto mt-36" style={{paddingLeft: '100px', paddingRight: '100px'}}>
      
      <div className='relative'>
        <div className="flex-row justify-between items-center md:flex-row">
          <img src={require('../images/orangeFruit.png')} alt="Breezer Logo" className="w-24 md:ml-4" />
          <h1 className="text-2xl font-bold mb-4 md:mb-0">About Us</h1>
        </div>
        <div className="text-white hidden sm:block lg:text-8xl md:text-7xl md:-top-28 font-semibold text-center absolute -right-72 -top-5 z-10">
          <span className="text-shadow-black">BREEZER</span>
        </div>
      </div>  

      <p className="text-left text-2xl mt-4">
        Bacardi Breezer, Broozer for short, is a fruit-based alcoholic <br /> drink which comes in many flavours.
      </p>

      <div className="flex flex-col lg:flex-row w-full mt-28">
        <img src={require('../images/multipleDrinks.png')} alt="Multiple Drinks" className="lg:w-1/2" />
        
        <div className="flex flex-col lg:w-1/2 lg:ml-8 lg:mt-0 mt-8 lg:right-0 md:right-40">
          <h1 className="text-2xl font-bold mb-4">We Bacardi</h1>
          <hr className="border-gray-300 my-4 w-full lg:w-96" />
          <p className="text-gray-700 text-2xl mb-6 w-full lg:w-96">
            BACARDÍ is a rum brand established in 1862 that has been producing world-class rums since. Our history is rich, and hunger for continued innovation in the industry never ceases.
          </p>
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">Our Product</h2>
            <hr className="border-gray-300 my-4 w-full lg:w-96" />
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">How We Work</h2>
            <hr className="border-gray-300 my-4 w-full lg:w-96" />
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">Our Business</h2>
            <hr className="border-gray-300 my-4 w-full lg:w-96" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
            <hr className="border-gray-300 my-4 w-full lg:w-96" />
          </div>
        </div>
      </div>


      
    </div>
  );
};

export default AboutUs;
