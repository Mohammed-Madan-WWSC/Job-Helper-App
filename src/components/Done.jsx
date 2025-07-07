import React, { useState, useEffect } from 'react';

const D = ({ index, shouldShow = false }) => {
const [isAnim, setIsAnim] = useState(false);
  const [sr, setSr] = useState(false);

useEffect(() => {
    if (shouldShow) {
      setSr(true);
      setIsAnim(true);
} else {
      setSr(false);
      setIsAnim(false);
}
  }, [shouldShow]);

if (!sr) {
    return (
<div className="w-full mb-6 px-4 box-border">
        <div className="h-[360px]"></div>
</div>
    );
}

  return (
<div
      className={`w-full mb-6 px-4 box-border transform transition-all duration-700 ${
        isAnim ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
}`}
    >
<div className="p-6 rounded-2xl shadow-xl border-2 bg-gradient-to-br from-orange-50 to-red-100 border-orange-200 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] group flex flex-col justify-between h-[360px]">
        <div></div>
<div className="text-center">
          <div className="text-6xl mb-4">👍🏻</div>
<h3 className="text-xl font-bold text-orange-800 mb-2 group-hover:text-orange-900 transition-colors">
            Good job!
</h3>
          <p className="text-orange-700 text-sm leading-relaxed">
You've reached the end.
            Click the button below to view the results.
</p>
        </div>
<div></div>
      </div>
</div>
  );
};

export default D; 