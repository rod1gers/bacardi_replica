import React from 'react';

const Products_listings = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Breezer Flavours</h1>
        <img src="/breezer-logo.png" alt="Breezer Logo" className="w-24" />
      </div>

      <p className="text-center mt-4">
        Bacardi Breezer, Broozer for short, is a fruit-based alcoholic drink which comes in many flavours.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <div className="bg-white rounded-lg p-4">
          <img src="/cranberry-breezer.png" alt="Cranberry Breezer" className="w-full h-40 object-contain" />
          <h2 className="text-xl font-bold mt-2">Cranberry</h2>
        </div>
        <div className="bg-white rounded-lg p-4">
          <img src="/lime-breezer.png" alt="Lime Breezer" className="w-full h-40 object-contain" />
          <h2 className="text-xl font-bold mt-2">Lime</h2>
        </div>
        <div className="bg-white rounded-lg p-4">
          <img src="/blueberry-breezer.png" alt="Blueberry Breezer" className="w-full h-40 object-contain" />
          <h2 className="text-xl font-bold mt-2">Blueberry</h2>
        </div>
        <div className="bg-white rounded-lg p-4">
          <img src="/orange-breezer.png" alt="Orange Breezer" className="w-full h-40 object-contain" />
          <h2 className="text-xl font-bold mt-2">Orange</h2>
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View All</button>
      </div>
    </div>
  );
};

export default Products_listings;
