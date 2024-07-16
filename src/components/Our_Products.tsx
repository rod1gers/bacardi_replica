import React, { useState, useEffect } from 'react';
import { Drink } from '../types';

const Our_Products = () => {
  const [drinks, setDrinks] = useState<Drink[]>([]);

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
        if (!response.ok) {
          throw new Error('Failed to fetch drinks');
        }
        const data = await response.json();
        setDrinks(data.drinks.slice(0, 5)); // Limiting to 5 drinks for display
      } catch (error) {
        console.error('Error fetching drinks:', error);
      }
    };

    fetchDrinks();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold">Drinks List</h1>
        <img src="/cranberry-icon.png" alt="Cranberry Icon" className="w-8 h-8" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {drinks.map((drink) => (
          <div key={drink.idDrink} className="bg-white rounded-lg p-4 text-center">
            <img
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
              className="w-full h-40 object-contain mb-2"
            />
            <h2 className="text-xl font-bold mb-1">{drink.strDrink}</h2>
            <p className="text-gray-500">{drink.strCategory}</p>
            <p>Size: {drink.strMeasure1}</p>
            <p className="font-bold">Price: ₹{drink.idDrink}.00/-</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View All
        </button>
      </div>
    </div>
  );
};

export default Our_Products;
