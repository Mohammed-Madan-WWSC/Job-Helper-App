import React, { useState } from 'react';
import { CRITERIA_NAMES } from '../utils/d';

const H = ({ criteriaStatus }) => {
const [sti, setSti] = useState(null);

  const tips = [
{
      title: "Career Exploration",
content: "Try different activities to discover what you enjoy most. Visit local businesses, shadow professionals, or volunteer in different fields."
    },
{
      title: "Skill Development",
content: "Focus on developing both technical and soft skills. Consider taking courses, workshops, or online classes in areas that interest you."
    },
{
      title: "Networking",
content: "Connect with professionals in fields you're interested in. Join career clubs, attend job fairs, or participate in mentorship programs."
    },
{
      title: "Education Planning",
content: "Research educational requirements for your preferred careers. Consider different paths like college, trade schools, or apprenticeships."
    },
{
      title: "Work Experience",
content: "Gain experience through internships, part-time jobs, or volunteer work. This helps you understand what different careers are really like."
    },
{
      title: "Self-Assessment",
content: "Regularly evaluate your interests, values, and goals. Your preferences may change as you learn more about yourself and different careers."
    }
];

  const atwo = (criteriaStatus?.areasToWorkOn || [])
.map(area => area.key);

  const hdlTipClick = (idx) => {
setSti(sti === idx ? null : idx);
  };

return (
    <div className="space-y-6">
{atwo.length > 0 && (
        <div>
        <h2 className="text-xl font-semibold mb-4 text-orange-500">Areas to Work On:</h2>
          <div className="flex flex-wrap gap-2">
{atwo.map((area, idx) => (
              <span
key={idx}
                                  className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium"
>
                {CRITERIA_NAMES[area] || area.replace(/([A-Z])/g, ' $1').trim()}
</span>
            ))}
</div>
        </div>
)}

      <div>
            <h3 className="text-lg font-semibold text-orange-600 mb-4">
          Career Development Tips
</h3>
        <div className="space-y-3">
{tips.map((tip, idx) => (
            <div
key={idx}
              className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                sti === idx
? 'bg-orange-50 border-2 border-orange-300'
                  : 'bg-gray-50 border border-gray-200 hover:bg-orange-50'
}`}
              onClick={() => hdlTipClick(idx)}
>
              <div className="flex items-center justify-between">
<h4 className="font-medium text-gray-800">{tip.title}</h4>
                <button
className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    sti === idx
                  ? 'bg-orange-300 border-orange-300'
                  : 'border-gray-300 hover:border-orange-300'
}`}
                >
<span className={`text-sm font-bold ${
                    sti === idx ? 'text-white' : 'text-gray-400'
}`}>
                    {sti === idx ? '−' : '+'}
</span>
                </button>
</div>
              {sti === idx && (
              <div className="mt-3 pt-3 border-t border-orange-100">
                  <p className="text-gray-700 text-sm leading-relaxed">
{tip.content}
                  </p>
</div>
              )}
</div>
          ))}
</div>
      </div>

<div className="mt-8 p-4 bg-orange-50 rounded-lg">
                    <p className="text-orange-600 text-center">
💡 Remember: Career exploration is a journey, not a destination. Be patient with yourself and keep exploring!
        </p>
</div>
    </div>
);
};

export default H; 