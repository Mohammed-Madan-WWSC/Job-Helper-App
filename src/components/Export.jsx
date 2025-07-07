import React from 'react';
import { ChevronLeft } from 'lucide-react';
import TP from './TopHeader';
import logo from '../logo.png';

const E = ({ selectedJobs, onBack, onChatGPT }) => {
return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-orange-50 to-red-100">
<TP 
        logo={logo}
title="Final Results"
      />
      
<main className="max-w-2xl mx-auto px-4 py-8 pb-24">
        <div className="bg-white rounded-2xl shadow-lg p-8">
<div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">Well done!</h1>
<p className="text-gray-700 text-lg leading-relaxed">
              We have more coming, but for now, these are your top interest areas:
</p>

          </div>

<div className="space-y-4">
            {selectedJobs.map((sj, idx) => (
<div 
                key={idx} 
className="relative border rounded-lg p-4 bg-orange-200 border-orange-400 shadow-md transition-all duration-200"
              >
<h3 className="text-gray-800 font-medium text-center pr-10">
                  {sj.job.job}
</h3>
              </div>
))}
          </div>
</div>
      </main>

<footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-200 shadow-xl">
        <div className="max-w-2xl mx-auto px-3 sm:px-6 py-3 sm:py-4 flex justify-between items-center gap-2 sm:gap-4">
<button
            onClick={onBack}
className="flex items-center gap-1 sm:gap-2 bg-gray-100 text-gray-700 px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-gray-200 transition-all duration-200 text-sm sm:text-base font-medium min-w-[80px] sm:min-w-[100px] justify-center"
          >
<ChevronLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
            Back
</button>

          <div className="flex gap-2">
<button
              onClick={onChatGPT}
className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[80px] sm:min-w-[100px] justify-center"
>
              ChatGPT
</button>
          </div>
</div>
      </footer>
</div>
  );
};

export default E; 