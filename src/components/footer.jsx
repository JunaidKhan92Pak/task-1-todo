import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#ff8533] text-white py-8  mt-auto">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
          <h2 className="text-xl font-semibold mb-4">Junaid Khan</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut bibendum ex. Duis euismod fermentum
            metus, quis fringilla purus.
          </p>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li><Link to='/Home'>Home</Link></li>
            <li><Link to='/About'>About Us</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
       </ul>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p> Mohal Street<br />Okara, Pakistan<br />Email: Junaid@pakistan.com<br />Phone: +92 3266941850</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;