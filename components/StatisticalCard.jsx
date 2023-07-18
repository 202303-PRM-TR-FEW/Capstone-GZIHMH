import React from 'react';

const StatisticalCard = ({ imageSrc, title, count, backgroundColor }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className={`bg-white rounded-lg p-6 ${backgroundColor}`} style={{ width: '250px' }}>
        <div className={`flex items-center justify-center rounded-lg p-4 mb-4 ${backgroundColor}`}>
          <div dangerouslySetInnerHTML={{ __html: imageSrc }} /> {/* Use dangerouslySetInnerHTML to render the SVG */}
        </div>
        <h2 className="text-lg font-bold mb-2 text-black text-center">{title}</h2>
        <p className="text-2xl font-bold text-black flex items-center justify-center">{count}</p>
      </div>
    </div>
  );
};

export default StatisticalCard;
