import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [selected, setSelected] = useState('Home');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-gray-200' : 'bg-white'} p-0.5 flex justify-between items-center lg:px-20 md:px-10 sm:px-5`}>
          {/* Logo */}
          <div className="flex items-center">
            <img src={require('../images/bacardi_logo.png')} alt='Logo' className="w-12 h-12 md:w-16 md:h-16 object-contain" />
          </div>
    
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 lg:space-x-10">
            <a href="#" className={`text-black ${selected === 'Home' ? 'font-bold' : ''} text-xl lg:text-2xl`} onClick={() => setSelected('Home')}>Home</a>
            <a href="#" className={`text-black ${selected === 'Flavours' ? 'font-bold' : ''} text-xl lg:text-2xl`} onClick={() => setSelected('Flavours')}>Flavours</a>
            <a href="#" className={`text-black ${selected === 'Products' ? 'font-bold' : ''} text-xl lg:text-2xl`} onClick={() => setSelected('Products')}>Products</a>
            <a href="#" className={`text-black ${selected === 'About Us' ? 'font-bold' : ''} text-xl lg:text-2xl`} onClick={() => setSelected('About Us')}>About Us</a>
            <a href="#" className={`text-black ${selected === 'Contact Us' ? 'font-bold' : ''} text-xl lg:text-2xl`} onClick={() => setSelected('Contact Us')}>Contact Us</a>
          </div>
    
          {/* Mobile Menu */}
          <div className="md:hidden">
            <button className="text-black" onClick={() => setSelected(selected)}>
              {/* Mobile menu icon */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
    
          {/* Call to Action */}
          <div className="hidden md:block">
            <button className="bg-white hover:bg-gray-200 text-black text-xl lg:text-2xl px-3 lg:px-4 py-2 rounded border border-black">
              Shop Now
            </button>
          </div>
        </header>
    );
};

export default Header;
