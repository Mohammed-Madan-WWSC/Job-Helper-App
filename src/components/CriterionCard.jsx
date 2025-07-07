import React, { useState, useEffect } from 'react';
import { LOCATION_OPTIONS } from '../utils/d';

const CC = 'from-gray-50 to-gray-100 border-gray-200';
const TC = 'text-gray-700';

const C = ({ criterion, value, threshold, onChange, index, globalIndex, onSliderMouseDown, onSliderMouseUp }) => {
const [isAnim, setIsAnim] = useState(false);
  const [isActive, setIsActive] = useState(false);

useEffect(() => {
    const timer = setTimeout(() => setIsAnim(true), index * 100);
setIsActive(value > 0);
    return () => clearTimeout(timer);
}, [index, value]);

  const getSliderTxt = (ck, sv) => {
switch (ck) {
      case 'genderPreference':
if (sv <= 19) return "I like VERY BOY-ish (masculine) jobs";
        if (sv <= 39) return "I prefer jobs that are somewhat BOY-ish";
if (sv <= 59) return "I am fine with any job -- boy-ish and girl-ish";
        if (sv <= 79) return "I prefer jobs that are somewhat GIRL-ish";
if (sv <= 100) return "I like VERY GIRL-ish (feminine) jobs";
        break;
      
case 'indoorOutdoor':
        if (sv <= 19) return "Strongly prefer working indoors";
if (sv <= 39) return "Somewhat prefer working indoors";
        if (sv <= 59) return "Both are fine with me";
if (sv <= 79) return "Somewhat prefer working outdoors";
        if (sv <= 100) return "Strongly prefer working outdoors";
break;
      
      case 'creativePractical':
if (sv <= 19) return "Strongly prefer working creatively";
        if (sv <= 39) return "Somewhat prefer working creatively";
if (sv <= 59) return "A bit of both...";
        if (sv <= 79) return "Somewhat prefer working practically";
if (sv <= 100) return "Strongly prefer working practically";
        break;
      
case 'workAlone':
        if (sv <= 19) return "Alone";
if (sv <= 39) return "Maybe with 1 to 3 other people / colleagues";
        if (sv <= 59) return "With several other people (maybe 4 to 7)";
if (sv <= 79) return "With quite many different people every day (8-14)";
        if (sv <= 100) return "With lots of different people every day (at least 15+)";
break;
      
      case 'technology':
if (sv <= 19) return "I really don't like working with technology";
        if (sv <= 39) return "I prefer not to work with technology much";
if (sv <= 59) return "Maybe a LITTLE bit of technology";
        if (sv <= 79) return "I like working with technology, machines, or computers";
if (sv <= 100) return "I LOVE working with technology, machines, or computers";
        break;
      
case 'animals':
        if (sv <= 19) return "Please NO animals/plants!";
if (sv <= 39) return "I would prefer not to work with animals/plants";
        if (sv <= 59) return "I am fine with anything - with or without";
if (sv <= 79) return "I like working with animals/plants";
        if (sv <= 100) return "YES, I'd love working with animals/plants!";
break;
      
      default:
return '';
    }
return '';
  };

const renderCircs = () => {
    const circs = [];
const numCircs = 5;
    
let aci = -1;
    if (value <= 19) {
aci = 0;
    } else if (value <= 39) {
aci = 1;
    } else if (value <= 59) {
aci = 2;
    } else if (value <= 79) {
aci = 3;
    } else if (value <= 100) {
aci = 4;
    }
    
for (let i = 0; i < numCircs; i++) {
      let cc = 'bg-gray-300';
      
if (i === aci) {
        if (i === 0) {
cc = 'bg-orange-700';
        } else if (i === 1) {
cc = 'bg-orange-600';
        } else if (i === 2) {
cc = 'bg-orange-500';
        } else if (i === 3) {
cc = 'bg-orange-600';
        } else if (i === 4) {
cc = 'bg-orange-700';
        }
}
      
      circs.push(
<div
          key={i}
className={`w-10 h-10 rounded-full ${cc} transition-colors duration-200`}
        />
);
    }
    
return circs;
  };

const hdlLocSel = (lv) => {
    onChange(lv);
};

  const getSliderBg = () => {
const pct = value;
    return {
background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${pct}%, #d1d5db ${pct}%, #d1d5db 100%)`
    };
};

  if (criterion.type === 'location') {
return (
      <div
className={`w-full mb-6 px-4 box-border transform transition-all duration-700 ${
          isAnim ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
}`}
      >
<div
          className={`p-6 rounded-2xl shadow-xl border-2 bg-gradient-to-br ${CC} backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] group
                      flex flex-col justify-between h-[360px]`}
>
          <div>
            <h3 className="text-lg font-bold text-orange-700 mb-4 group-hover:text-orange-800 transition-colors text-center italic">
              {criterion.name}
            </h3>
          </div>

<div className="space-y-3 mt-auto">
            <div className="space-y-2">
{LOCATION_OPTIONS.map((opt, idx) => (
                <button
key={idx}
                  onClick={() => hdlLocSel(opt.value)}
className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left font-medium text-base ${
                    value === opt.value
? 'bg-yellow-300 border-yellow-500 text-black'
                      : 'bg-yellow-100 border-yellow-200 text-gray-700 hover:bg-yellow-200'
}`}
                >
{opt.label}
                </button>
))}
            </div>
</div>
        </div>
</div>
    );
}

  return (
<div
      className={`w-full mb-6 px-4 box-border transform transition-all duration-700 ${
        isAnim ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
}`}
    >
<div
        className={`p-6 rounded-2xl shadow-xl border-2 bg-gradient-to-br ${CC} backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] group
                    flex flex-col justify-between h-[360px]`}
>
        <div>
          <h3 className="text-lg font-bold text-orange-700 mb-2 group-hover:text-orange-800 transition-colors text-center italic">
            {criterion.name}
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">{criterion.description}</p>
</div>

        <div className="space-y-3 flex-1 flex flex-col">
<div className="flex items-center justify-center h-[65px]">
            <span className={`text-lg font-bold ${TC} transition-colors duration-300 text-center px-4 leading-tight`}>
{getSliderTxt(criterion.key, value)}
            </span>
</div>

          <div className="flex justify-center gap-3 mb-4">
{renderCircs()}
          </div>

<div className="space-y-2 mt-auto">
            <div className="relative">
<input
                type="range"
min="0"
                max="100"
value={value}
                onChange={(e) => onChange(parseInt(e.target.value))}
onMouseDown={onSliderMouseDown}
                onMouseUp={onSliderMouseUp}
onTouchStart={onSliderMouseDown}
                onTouchEnd={onSliderMouseUp}
className="w-full h-2 rounded-lg cursor-pointer"
                style={{
background: `linear-gradient(to right, #6b7280 0%, #6b7280 ${value}%, #d1d5db ${value}%, #d1d5db 100%)`,
                  outline: 'none',
border: 'none',
                  boxShadow: 'none',
WebkitAppearance: 'none',
                  MozAppearance: 'none',
appearance: 'none'
                }}
/>
            </div>
<div className="flex justify-between items-center text-sm font-medium text-gray-700 mt-1">
              <span>{criterion.leftLabel}</span>
<span>{criterion.rightLabel}</span>
            </div>
</div>
        </div>
</div>
    </div>
);
};

export default C; 