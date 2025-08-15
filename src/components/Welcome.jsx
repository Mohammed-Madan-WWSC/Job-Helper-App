import React, { useState } from 'react';
import TP from './TopHeader';
import logo from '../logo.png';

const W = ({ onStart }) => {
    const [ci, setCi] = useState({
name: '',
caseworkerName: '',
age: '',
gender: ''
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
                        <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">
            Welcome!
          </h2>
          
                    <p className="text-lg text-center text-gray-700 mb-8">
            This app will help you find out what kind of jobs could fit you.
          </p>

          <form onSubmit={hdlSub} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-6">
                <h3 className="text-lg font-semibold text-orange-500">Child Information</h3>
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
                
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                    Child's Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    value={ci.age}
                    onChange={(e) => setCi(prev => ({ ...prev, age: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                    Child's Gender
                  </label>
                  <select
                    id="gender"
                    value={ci.gender}
                    onChange={(e) => setCi(prev => ({ ...prev, gender: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-orange-500">Caseworker Information</h3>
                <div>
                  <label htmlFor="caseworkerName" className="block text-sm font-medium text-gray-700 mb-1">
                    Name of Caseworker
</label>
                  <input
                    type="text"
                    id="caseworkerName"
value={ci.caseworkerName}
                    onChange={(e) => setCi(prev => ({ ...prev, caseworkerName: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
required
                  />
                </div>
              </div>
</div>

            <button
              type="submit"
            className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white py-3 px-6 rounded-xl font-medium hover:from-orange-500 hover:to-red-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl mt-8"
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