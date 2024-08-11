import React from 'react';

function HeroSection() {
  return (
    <section className="flex justify-between items-center py-16 px-8 bg-gray-50">
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold mb-6">
          Hello, my name’s Taylor. I’m Graphic Designer.
        </h1>
        <div className="flex space-x-4">
          <button className="bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-700">
            Contact Me
          </button>
          <button className="bg-gray-200 text-gray-700 py-2 px-6 rounded hover:bg-gray-300">
            Download CV
          </button>
        </div>
      </div>
      <div className="hidden md:block">
        <img src="path_to_image" alt="Taylor" className="rounded-full w-80 h-80" />
      </div>
    </section>
  );
}

export default HeroSection;
