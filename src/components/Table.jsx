import React from 'react';
import { CRITERIA_NAMES, THRESHOLDS } from '../utils/d';
import { getCat, getCatColor } from '../utils/c';

const T = ({ assessmentData }) => {
const getPctFromT = (val, t) => {
    return ((val - t) / t) * 100;
};

  return (
<div className="overflow-x-auto shadow-lg rounded-lg">
      <table className="min-w-full bg-white">
<thead>
          <tr className="bg-gray-100">
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Criteria</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Input Value</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Threshold</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
</tr>
        </thead>
<tbody className="divide-y divide-gray-200">
          {Object.entries(assessmentData).map(([k, val]) => (
<tr key={k} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
{CRITERIA_NAMES[k]}
              </td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {val}%
</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
{THRESHOLDS[k]}%
              </td>
<td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getCatColor(val, THRESHOLDS[k])}`}>
{getCat(val, THRESHOLDS[k])}
                </span>
</td>
            </tr>
))}
        </tbody>
</table>
    </div>
);
};

export default T; 