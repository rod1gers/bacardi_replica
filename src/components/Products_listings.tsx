import React, { useState, useEffect } from 'react';
import { Drink } from '../types'; 


const Products_listings = () => {
  const [drinks, setDrinks] = useState<Drink[]>([]);

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
        if (!response.ok) {
          throw new Error('Failed to fetch drinks');
        }
        const data = await response.json();
        if (data.drinks) {
          setDrinks(data.drinks.slice(0, 4)); 
        }
      } catch (error) {
        console.error('Error fetching drinks:', error);
      }
    };

    fetchDrinks();
  }, []);

  return (
    <div className="container mx-auto " style={{ paddingLeft: '100px', paddingRight: "100px" }}>
      <div className='relative'>
        <div className="absolute flex-row justify-between items-center md:flex-row md:-top-28 sm:-top-24 -top-28">
          <img src={require('../images/orangeFruit.png')} alt="Breezer Logo" className="w-24 md:ml-4" />
          <h1 className="text-2xl font-bold mb-4 md:mb-0">Breezer Flavoure</h1>
        </div>
        <div className="text-white lg:text-8xl md:text-6xl font-semibold text-center absolute md:-right-96 -right-72 -top-5 z-10">
          <span className="text-shadow-black">BREEZER</span>
        </div>
      </div>  
        

      <p className="text-left mt-60 top-9 text-2xl">
        Bacardi Breezer, Broozer for short, is a fruit-based alcoholic <br /> drink which comes in many flavours.
      </p>
      <div className="flex w-full">
        <div className="flex flex-wrap justify-center ml-0 gap-4 mt-32">
          {drinks.map((drink) => (
            <div key={drink.idDrink} className="bg-gray-100 rounded-lg p-4 w-full md:w-56">
              <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                className="w-full h-80 object-contain mb-2" 
              />
              <h2 className="text-2xl font-bold text-center mt-2">{drink.strDrink}</h2>
              <p className="text-gray-500 text-center">{drink.strCategory}</p>
            </div>
          ))}
        </div>
      <div />
      <div className="relative -right-24 mt-60 md:-right-14 sm:left-0 hidden md:block ">
        <img src={require('../images/viewAllLogo.png')} alt="View All Logo" className="" />
      </div>
    </div>

    </div>
  );
};

export default Products_listings;
