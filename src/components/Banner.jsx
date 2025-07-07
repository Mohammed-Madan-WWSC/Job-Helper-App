import React from 'react';

const B = ({ title }) => (
<div className="w-full max-w-2xl mx-auto px-4 box-border mb-8">
    <div className="bg-gradient-to-r from-orange-600 to-red-700 text-white rounded-2xl shadow-xl px-6 py-4 text-center backdrop-blur-sm border border-orange-200/20">
<h2 className="text-xl font-bold">{title}</h2>
    </div>
</div>
);

export default B; 