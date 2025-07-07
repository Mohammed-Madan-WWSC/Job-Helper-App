import React from 'react';
import TP from './TopHeader';
import logo from '../logo.png';
import { CRITERIA_NAMES } from '../utils/d';

const G = ({ assessmentData, onBack }) => {
const ce = Object.entries(assessmentData);
  const mv = Math.max(...Object.values(assessmentData));

const getBarCol = (val, idx) => {
    if (val === 0) return 'bg-gray-200';
const intens = val / 100;
    if (intens > 0.7) return 'bg-orange-600';
if (intens > 0.4) return 'bg-orange-500';
    return 'bg-orange-400';
};

  const getBarW = (val) => {
if (mv === 0) return '0%';
    return `${(val / mv) * 100}%`;
};

  return (
<div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-orange-50 to-red-100">
      <TP 
logo={logo}
        title="Youth Job Options Helper"
/>
      
<main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 backdrop-blur-sm border border-orange-100">
<h2 className="text-2xl font-bold text-orange-800 mb-6 text-center">
            Assessment Data Visualization
</h2>
          
<div className="space-y-6">
            {ce.map(([k, val], idx) => (
<div 
                key={k}
className={`p-4 rounded-lg border transition-all duration-300 hover:shadow-md ${
                  idx < 3 ? 'bg-orange-50' : ''
}`}
              >
<div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-orange-800">
{CRITERIA_NAMES[k] || k}
                  </h3>
<span className="text-orange-700 font-bold">
                    {val}%
</span>
                </div>
<div className="w-full bg-gray-200 rounded-full h-4">
                  <div 
className={`h-4 rounded-full transition-all duration-500 ${getBarCol(val, idx)}`}
                    style={{ width: getBarW(val) }}
/>
                </div>
</div>
            ))}
</div>

          <div className="mt-8 p-4 bg-orange-50 rounded-lg">
<h3 className="font-semibold text-orange-800 mb-2">Summary</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
<div>
                <span className="text-gray-600">Highest Score:</span>
<span className="font-bold text-orange-700 ml-2">
                  {mv}%
</span>
              </div>
<div>
                <span className="text-gray-600">Categories Completed:</span>
<span className="font-bold text-orange-700 ml-2">
                  {ce.filter(([_, val]) => val > 0).length}/{ce.length}
</span>
              </div>
</div>
          </div>

<div className="mt-6 flex justify-center">
            <button
onClick={onBack}
              className="px-6 py-3 bg-orange-600 text-white rounded-xl font-medium hover:bg-orange-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
>
              Back to Results
</button>
          </div>
</div>
      </main>
</div>
  );
};

export default G; 