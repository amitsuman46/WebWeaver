import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-8">
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-bold">PORTOSTAR</div>
        <ul className="flex space-x-8">
          <li className="text-gray-700 hover:text-gray-900">Home</li>
          <li className="text-gray-700 hover:text-gray-900">About Us</li>
          <li className="text-gray-700 hover:text-gray-900">Services</li>
          <li className="text-gray-700 hover:text-gray-900">Pages</li>
          <li className="text-gray-700 hover:text-gray-900">Contact Us</li>
          <li>
            <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
              Hire Me
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
