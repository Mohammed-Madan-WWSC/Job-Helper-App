import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import TP from './TopHeader';
import T from './Table';
import H from './Hints';
import { getJobRecAnalysis } from '../utils/c';
import logo from '../logo.png';

const cvSliderToScale = (sv) => {
if (sv >= 0 && sv <= 19) return 1;
  if (sv >= 20 && sv <= 39) return 2;
if (sv >= 40 && sv <= 59) return 3;
  if (sv >= 60 && sv <= 79) return 4;
if (sv >= 80 && sv <= 100) return 5;
  return 1;
};

const getSelLoc = (lv) => {
switch(true) {
    case lv <= 25:
return "City-Center";
    case lv <= 50:
      return "Semi-Urban";
case lv <= 75:
      return "Somewhat-Rural";
case lv <= 100:
      return "Very-Rural-Village";
default:
      return "City-Center";
  }
};

const R = ({ calculationResults, onBack, onShowData, onContinue, subjectInfo, assessmentData }) => {
const { results, outcomeCategory, percentageScore } = calculationResults;
  const [sj, setSj] = useState([]);
  
const ja = getJobRecAnalysis(assessmentData);

  const getOutMsg = (cat, score) => {
if (cat === 'EXCELLENT') {
      return {
main: `Great job! Based on your preferences, we have excellent career matches for you.`,
        sub: "Here are some additional career areas to consider:"
};
    } else if (cat === 'GOOD') {
      return {
main: `Good results! We found several career paths that match your interests.`,
        sub: "Consider exploring these career areas:"
};
    } else if (cat === 'NEEDS_IMPROVEMENT') {
      return {
main: `We found some career options for you. Let's explore what might be the best fit.`,
        sub: "Focus on these career areas:"
};
    } else {
      return {
main: `Let's work together to find the perfect career match for you!`,
        sub: "Explore these career areas:"
};
    }
return { main: "Career assessment completed.", sub: "" };
  };

const outMsg = getOutMsg(outcomeCategory, percentageScore);

  const getJobCatColor = (idx) => {
if (idx < 2) return "bg-orange-200";
    if (idx < 4) return "bg-orange-150";
return "bg-orange-100";
  };

const getJobCatStyle = (idx) => {
    const baseStyle = "rounded-lg p-4 border border-orange-200 transition-all duration-300 hover:shadow-md";
return `${baseStyle} ${getJobCatColor(idx)}`;
  };

const fmtJobCat = (cat) => {
    return cat.split('_').map(word => 
word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
};

  const getScoreColor = (score) => {
if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
return 'text-red-600';
  };

const getScoreBadge = (score) => {
    if (score >= 80) return '🌟';
if (score >= 60) return '👍';
    return '📈';
};

  const getCompatColor = (pct) => {
if (pct >= 80) return 'bg-green-100 border-green-300';
    if (pct >= 60) return 'bg-yellow-100 border-yellow-300';
return 'bg-orange-100 border-orange-300';
  };

const getCompatBadge = (pct) => {
    if (pct >= 80) return '🎯';
if (pct >= 60) return '✨';
    return '💡';
};

  const hdlJobSel = (ji, job) => {
if (sj.find(sel => sel.index === ji)) {
      setSj(sj.filter(sel => sel.index !== ji));
} else if (sj.length < 3) {
      setSj([...sj, { index: ji, job }]);
}
  };

const isJobSel = (ji) => {
    return sj.find(sel => sel.index === ji);
};

  const getSelNum = (ji) => {
const sel = sj.find(sel => sel.index === ji);
    return sel ? sj.indexOf(sel) + 1 : null;
};

  const canCont = sj.length === 3;

const hdlCont = () => {
    if (canCont) {
onContinue(sj);
    }
};

    return (
<div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-orange-50 to-red-100">
      <TP 
logo={logo}
        title="Career Recommendations"
/>
      
      <main className="max-w-2xl mx-auto px-4 py-8 pb-24">
<div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
<h1 className="text-3xl font-bold text-blue-600 mb-4">SELECT TOP 3</h1>
            <p className="text-gray-700 text-lg leading-relaxed">
Now select the three options that you like the most <strong>AND</strong> that you believe you could be good at <strong>AND</strong> that are most feasible in your intended living environment...
            </p>

          </div>

<div className="space-y-4">
            {ja.topRecommendations.slice(0, 7).map((job, idx) => {
const isSel = isJobSel(idx);
              const selNum = getSelNum(idx);
              
return (
                <div 
key={idx} 
                  onClick={() => hdlJobSel(idx, job)}
className={`relative border rounded-lg p-4 cursor-pointer transition-all duration-200 hover:shadow-md ${
                    isSel 
? 'bg-orange-200 border-orange-400 shadow-md' 
                      : sj.length >= 3 
? 'bg-gray-100 border-gray-200 cursor-not-allowed opacity-60'
                        : 'bg-orange-100 hover:bg-orange-200 border-orange-200'
}`}
                >
{isSel && (
                    <div className="absolute top-2 right-2 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
{selNum}
                    </div>
)}
                  <h3 className="text-gray-800 font-medium text-center pr-10">
{job.job}
                  </h3>
</div>
              );
})}
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
{canCont && (
              <button
onClick={hdlCont}
                className="bg-gradient-to-r from-orange-600 to-red-700 text-white px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:from-orange-700 hover:to-red-800 transition-all duration-200 text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[80px] sm:min-w-[100px] justify-center"
>
                Continue
</button>
            )}
</div>
        </div>
</footer>
    </div>
);
};

export default R; 