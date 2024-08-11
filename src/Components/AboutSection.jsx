import React from 'react';

function AboutSection() {
  return (
    <section className="py-16 px-8 flex flex-col md:flex-row items-center bg-gray-50">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img src="path_to_image" alt="Taylor" className="rounded-full w-80 h-80 mx-auto md:mx-0" />
      </div>
      <div className="md:w-1/2 md:pl-12">
        <h2 className="text-3xl font-bold mb-4">Know More About Me From The Beginning</h2>
        <p className="text-gray-700 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <ul className="space-y-2 mb-6">
          <li className="text-gray-700">• Point 1</li>
          <li className="text-gray-700">• Point 2</li>
          <li className="text-gray-700">• Point 3</li>
        </ul>
        <button className="bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-700">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default AboutSection;
