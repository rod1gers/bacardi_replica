import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-4">
      <div className="container mx-auto flex justify-between">
        <div className="flex flex-col items-center">
          <img src="/bacardi-logo.png" alt="Bacardi Logo" className="w-24" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-2">ABOUT US</h3>
          <ul className="list-none space-y-2">
            <li><a href="#">About Bacardi</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Media</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-2">LINKS</h3>
          <ul className="list-none space-y-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">Flavours</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-2">STAY IN THE KNOW</h3>
          <input type="email" placeholder="Enter email address" className="border p-2" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-2">FOLLOW US</h3>
          <div className="flex space-x-2">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <p className="text-center mt-4">Copyright © uixreesu.com All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
