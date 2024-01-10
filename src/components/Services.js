// src/components/Services.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCode, faMobile, faLaptop, faBook, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const servicesData = [
    { title: 'Service 1', description: 'Description 1', icon: faCoffee },
    { title: 'Service 2', description: 'Description 2', icon: faCode },
    { title: 'Service 3', description: 'Description 3', icon: faMobile },
    { title: 'Service 4', description: 'Description 4', icon: faLaptop },
    { title: 'Service 5', description: 'Description 5', icon: faBook },
    { title: 'Service 6', description: 'Description 6', icon: faGlobe },
  ];

  return (
    <div className="text-center">
      <h1 className="text-xl text-green-500 font-bold">OUR SERVICES</h1>
      <h1 className="text-2xl text-gray-500 font-bold mb-12">Service We Provide</h1>
      <div className="grid grid-cols-3 gap-4">
        {servicesData.map((service, index) => (
          <div key={index} className="rounded-full border border-gray-300 p-4 text-center">
            <div className="rounded-full bg-gray-300 p-4 shadow-inner">
              <FontAwesomeIcon icon={service.icon} size="2x" className="mb-2 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
