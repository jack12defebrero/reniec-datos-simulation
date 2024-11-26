import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: 'Home',
      command: () => navigate('/'),
    },
    {
      label: 'Que es RENIEC?',
      command: () => navigate('/what-is-reniec'),
    },
    {
      label: 'Como Funciona',
      command: () => navigate('/how-it-works'),
    },
    {
      label: 'Contactanoa',
      command: () => navigate('/contact'),
    },
  ];

  return (
    <div className="p-4 mt-8 bg-gray-800 text-white">
      <div className="grid grid-nogutter md:grid-cols-4 sm:grid-cols-1">
        {/* Quick Links */}
        <div className="p-3">
          <h3 className="text-xl font-semibold">Enlaces</h3>
          <ul className="list-none">
            {items.map((item, index) => (
              <li key={index}>
                <button
                  className="text-white hover:text-gray-400 bg-transparent border-none cursor-pointer"
                  onClick={item.command}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe Form */}
        <div className="p-3">
          <h3 className="text-xl font-semibold">Suscribete</h3>
          <p className="text-sm mb-2">para ofrecer servicios o mensajes personalizados.</p>
          <input
            type="email"
            placeholder="Enter your email"
            className=" border-round-2xl w-full mb-3 p-2 border rounded"
          />
          <button className=" border-round w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Suscribete
          </button>
        </div>

        {/* Social Media */}
        <div className="p-3">
          <h3 className="text-xl font-semibold">Redes Sociales</h3>
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

        {/* Contact Information */}
        <div className="p-3">
          <h3 className="text-xl font-semibold">Informacion de contacto</h3>
          <p className="text-sm">1234 LIMA, LIMA, PERU</p>
          <p className="text-sm">+1 (555) 123-4567</p>
          <p className="text-sm">Support@reniec.com</p>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-4 mt-4">
        <p className="text-center text-sm text-gray-400">© 2024 RENIEC. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
