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
    // Hide button initially when screen changes
    setScb(false);
    
    if (isLastScreen) {
      // Show result button immediately without delay
      setScb(true);
    } else {
      // Show next button after a delay for regular screens
      const timer = setTimeout(() => {
        setScb(true);
      }, 1000); // 1 second delay for next buttons
      
      return () => clearTimeout(timer);
    }
  }, [currentScreen, isLastScreen]); // Reset timer when screen changes

  const hdlNext = () => {
window.scrollTo({ top: 0, behavior: 'smooth' });
    onNext();
};

    return (
    <>
      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in-up {
          animation: fadeInScale 0.5s ease-out forwards;
        }
      `}</style>
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
                  ? 'bg-orange-400 w-6 sm:w-8'
                  : idx < currentScreen
? 'bg-emerald-500 w-1.5 sm:w-2'
                  : 'bg-gray-300 w-1.5 sm:w-2'
}`}
            />
))}
        </div>

                <div className="min-w-[80px] sm:min-w-[100px] h-[42px] sm:h-[48px] flex justify-center items-center relative">
          <button
            onClick={hdlNext}
            className={`flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:from-orange-500 hover:to-red-600 transition-all duration-200 text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[80px] sm:min-w-[100px] justify-center ${
              scb ? 'animate-fade-in-up' : 'opacity-0 pointer-events-none'
            }`}
          >
            <span className="whitespace-nowrap">{isLastScreen ? 'Results' : 'Next'}</span>
            <ChevronRight size={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>
        </div>
      </div>
    </footer>
    </>
  );
};

export default N; 