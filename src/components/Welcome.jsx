import React, { useState } from 'react';
import TP from './TopHeader';
import logo from '../logo.png';

const W = ({ onStart }) => {
    const [ci, setCi] = useState({
name: '',
caregiverName: ''
  });

const hdlSub = (e) => {
e.preventDefault();
   onStart(ci);
};

  return (
<div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-orange-50 to-red-100">
      <TP 
        logo={logo}
title="Youth Job Options Helper"
      />
      
      <main className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm border border-orange-100">
<h2 className="text-2xl font-bold text-center text-orange-800 mb-6">
            Welcome!
          </h2>
          
          <p className="text-lg text-center text-gray-700 mb-8">
Are you ready to discover job opportunities that match your preferences and interests?
          </p>

          <form onSubmit={hdlSub} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-6">
                <h3 className="text-lg font-semibold text-orange-700">Child Information</h3>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
Child's Name
                  </label>
                  <input
                    type="text"
id="name"
                    value={ci.name}
onChange={(e) => setCi(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-6">
<h3 className="text-lg font-semibold text-orange-700">Caregiver Information</h3>
                <div>
                  <label htmlFor="caregiverName" className="block text-sm font-medium text-gray-700 mb-1">
                    Name of Caregiver
</label>
                  <input
                    type="text"
                    id="caregiverName"
value={ci.caregiverName}
                    onChange={(e) => setCi(prev => ({ ...prev, caregiverName: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
required
                  />
                </div>
              </div>
</div>

            <button
              type="submit"
className="w-full bg-gradient-to-r from-orange-600 to-red-700 text-white py-3 px-6 rounded-xl font-medium hover:from-orange-700 hover:to-red-800 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl mt-8"
            >
              Start Assessment
</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default W; 