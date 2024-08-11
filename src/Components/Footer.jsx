import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-bold mb-4 md:mb-0">PORTOSTAR</div>
        <div className="mb-4 md:mb-0">
          <ul className="flex space-x-8">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="text-sm">
          <p>Email: contact@portostar.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
