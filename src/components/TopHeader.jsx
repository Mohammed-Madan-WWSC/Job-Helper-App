import React from 'react';

const TP = ({ logo, title }) => (
<header className="bg-orange-700 text-white min-h-[4rem] sm:h-16 px-3 flex flex-col sm:flex-row items-center justify-center sm:justify-start shadow-sm relative py-2 sm:py-0">
    <img
src={logo}
      alt="Logo"
className="h-8 sm:h-10 w-auto mb-1 sm:mb-0"
    />
<h1 className="text-xl sm:text-2xl font-bold text-center sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">{title}</h1>
  </header>
);

export default TP; 