import React, { useState, useEffect } from 'react';
import { Drink } from '../types';

const Our_Products = () => {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
        if (!response.ok) {
          throw new Error('Failed to fetch drinks');
        }
        const data = await response.json();
        setDrinks(data.drinks.slice(0, 6));
      } catch (error) {
        console.error('Error fetching drinks:', error);
      }
    };

    fetchDrinks();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredDrinks = drinks.filter(drink =>
    drink.strDrink.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-32 " style={{ paddingLeft: '100px', paddingRight: '100px' }}>
      <div className='flex'>
        <div className="text-white w-full text-8xl md:text-7xl font-semibold relative -left-80 -top-5 z-10">
          <span className="text-shadow-black">BREEZER</span>
        </div>
        <div className="relative ml-28 right-60 lg:right-0 top-40 w-full md:w-auto md:-left-72 md:top-24 md:right-0 sm:-left-72 sm:top-44">
          <img src={require('../images/fruit.png')} alt="Fruit Logo" className="w-24 md:ml-4 absolute -left-56 -top-24 z-20" />
          <div className="text-black text-2xl font-bold mb-4 md:mb-0">Our Product</div>
          <p className="text-black text-left w-64 mt-4 text-2xl md:w-64 sm:w-64 lg:w-96">
            Bacardi Breezer, Broozer for short, is a fruit-based alcoholic <br />
            drink which comes in many flavours.
          </p>
        </div>
      </div>

      <div className="relative mt-8">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for a drink..."
          className="w-1/2 p-2 border border-gray-300 rounded mb-4"
        />
      </div>

      <div className='relative'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDrinks.map((drink) => (
            <div key={drink.idDrink} className="mt-8 md:mt-4 bg-gray-100 rounded-lg p-4 flex flex-col items-start">
              <div className="w-full flex justify-center mb-2">
                <img
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                  className="w-60 h-80 object-cover rounded-lg"
                />
              </div>
              <div className="w-full flex flex-col items-start">
                <h2 className="text-5xl font-bold mb-1">{drink.strDrink}</h2>
                <p className="text-gray-500 mb-2">{drink.strCategory}</p>
                <div className="flex-row justify-between w-full">
                  <p>Size: {drink.strMeasure1}</p>
                  <p className="font-bold ">Price: ₹{drink.idDrink}.00/-</p>
                </div>
                <button className="bg-gray-100 hover:bg-gray-200 relative -top-11 text-black px-4 py-2 rounded border border-black self-end mt-2">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <img src={require('../images/viewAllLogo.png')} alt="View All Logo" className="" />
      </div>
    </div>
  );
};

export default Our_Products;
