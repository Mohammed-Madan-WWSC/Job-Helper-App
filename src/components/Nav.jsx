import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const N = ({ 
currentScreen, 
  totalScreens, 
canContinue, 
  isLastScreen, 
onBack, 
  onNext, 
backDisabled 
}) => {
const [scb, setScb] = useState(false);

  useEffect(() => {
if (canContinue && isLastScreen) {
      const timer = setTimeout(() => {
setScb(true);
      }, 1000);
return () => clearTimeout(timer);
    } else if (canContinue) {
setScb(true);
    } else {
setScb(false);
    }
}, [canContinue, isLastScreen]);

  const hdlNext = () => {
window.scrollTo({ top: 0, behavior: 'smooth' });
    onNext();
};

  return (
<footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-200 shadow-xl">
      <div className="max-w-2xl mx-auto px-3 sm:px-6 py-3 sm:py-4 flex justify-between items-center gap-2 sm:gap-4">
<button
          onClick={onBack}
disabled={backDisabled}
          className="flex items-center gap-1 sm:gap-2 bg-gray-100 text-gray-700 px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed transition-all duration-200 text-sm sm:text-base font-medium min-w-[80px] sm:min-w-[100px] justify-center"
>
          <ChevronLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
Back
        </button>

<div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          {Array.from({ length: totalScreens }, (_, idx) => (
<div
              key={idx}
className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                idx === currentScreen
? 'bg-orange-600 w-6 sm:w-8'
                  : idx < currentScreen
? 'bg-emerald-500 w-1.5 sm:w-2'
                  : 'bg-gray-300 w-1.5 sm:w-2'
}`}
            />
))}
        </div>

{scb && canContinue ? (
          <button
onClick={hdlNext}
            className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-orange-600 to-red-700 text-white px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:from-orange-700 hover:to-red-800 transition-all duration-200 text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[80px] sm:min-w-[100px] justify-center"
>
            <span className="whitespace-nowrap">{isLastScreen ? 'Results' : 'Next'}</span>
<ChevronRight size={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>
) : (
          <div className="min-w-[80px] sm:min-w-[100px]" />
)}
      </div>
</footer>
  );
};

export default N; 