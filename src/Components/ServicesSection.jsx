import React from 'react';

function ServicesSection() {
  return (
    <section className="py-16 px-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">What I Do For My Customer</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-center">
          UI/UX Design
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-center">
          App Development
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-center">
          Web Development
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
