import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="p-4 mt-8 bg-gray-800 text-white">
      <div className="grid grid-nogutter md:grid-cols-4 sm:grid-cols-1">
        {/* Enlaces */}
        <div className="p-3">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="list-none">
            <li><a href="/" className="text-white hover:text-gray-400">Home</a></li>
            <li><a href="/about" className="text-white hover:text-gray-400">About Us</a></li>
            <li><a href="/services" className="text-white hover:text-gray-400">Services</a></li>
            <li><a href="/contact" className="text-white hover:text-gray-400">Contact</a></li>
          </ul>
        </div>

        {/* Formulario de suscripción */}
        <div className="p-3">
          <h3 className="text-xl font-semibold">Subscribe</h3>
          <p className="text-sm mb-2">Get the latest updates and offers.</p>
          <InputText className="w-full mb-3" placeholder="Enter your email" />
          <Button label="Subscribe" className="p-button-outlined w-full" />
        </div>

        {/* Redes sociales */}
        <div className="p-3">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-2xl text-white hover:text-gray-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl text-white hover:text-gray-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl text-white hover:text-gray-400" />
            </a>
          </div>
        </div>

        {/* Información */}
        <div className="p-3">
          <h3 className="text-xl font-semibold">Contact Info</h3>
          <p className="text-sm">1234 Street Name, City, Country</p>
          <p className="text-sm">+1 (555) 123-4567</p>
          <p className="text-sm">email@example.com</p>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-4 mt-4">
        <p className="text-center text-sm text-gray-400">© 2024 Company Name. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
