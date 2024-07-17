import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start w-full lg:w-3/4 px-4">
        <div className="flex flex-col items-center mb-4 lg:mb-0">
          <img src={require('../images/bacardi_logo.png')} alt='Logo' className="w-24 h-24 lg:w-40 lg:h-40 object-contain" />
        </div>
        <div className="flex flex-col items-center text-center lg:items-start mb-4 lg:mb-0">
          <h3 className="text-xl lg:text-2xl font-bold mb-2">ABOUT US</h3>
          <ul className="list-none space-y-2 text-lg lg:text-2xl">
            <li><a href="#">About Bacardi</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Media</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div className="flex flex-col items-center text-center lg:items-start mb-4 lg:mb-0">
          <h3 className="text-xl lg:text-2xl font-bold mb-2">LINKS</h3>
          <ul className="list-none text-lg lg:text-2xl space-y-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">Flavours</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl lg:text-2xl font-bold mb-2">STAY IN THE KNOW</h3>
          <input type="email" placeholder="Enter email address" className="border p-2 mb-4 w-full lg:w-1/2" />
          <h3 className="text-xl lg:text-2xl font-bold mb-2">FOLLOW US</h3>
          <div className='flex gap-3'>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
      <p className="text-center mt-4 text-sm lg:text-base">Copyright © uixreesu.com All Right Reserved</p>
    </footer>
  );
};

export default Footer;
