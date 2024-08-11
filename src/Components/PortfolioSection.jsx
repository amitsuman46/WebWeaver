import React from 'react';

function PortfolioSection() {
  return (
    <section className="py-16 px-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Selected Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-sm">Project 1</div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-sm">Project 2</div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-sm">Project 3</div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-sm">Project 4</div>
      </div>
      <div className="text-center mt-8">
        <button className="bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-700">
          See All Projects
        </button>
      </div>
    </section>
  );
}

export default PortfolioSection;
