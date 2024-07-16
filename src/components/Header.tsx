import React, { useState } from 'react';

const Header: React.FC = () => {
    const [selected, setSelected] = useState('Home');

    return (
        <header className="bg-white p-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
                <img src={require('../images/bacardi_logo.png')} alt='Logo' className="w-16 h-16 object-contain" />
            </div>

            {/* Navigation Links */}
            <div className="space-x-10">
                <a href="#" className={`text-black ${selected === 'Home' ? 'font-bold text-sm' : 'text-sm'}`} onClick={() => setSelected('Home')}>Home</a>
                <a href="#" className={`text-black ${selected === 'Flavours' ? 'font-bold text-sm' : 'text-sm'}`} onClick={() => setSelected('Flavours')}>Flavours</a>
                <a href="#" className={`text-black ${selected === 'Products' ? 'font-bold text-sm' : 'text-sm'}`} onClick={() => setSelected('Products')}>Products</a>
                <a href="#" className={`text-black ${selected === 'About Us' ? 'font-bold text-sm' : 'text-sm'}`} onClick={() => setSelected('About Us')}>About Us</a>
                <a href="#" className={`text-black ${selected === 'Contact Us' ? 'font-bold text-sm' : 'text-sm'}`} onClick={() => setSelected('Contact Us')}>Contact Us</a>
            </div>

            {/* Call to Action */}
            <div>
                <button className="bg-white hover:bg-gray-200 text-black px-4 py-2 rounded border border-black">
                    Shop Now
                </button>
            </div>
        </header>
    );
};

export default Header;
