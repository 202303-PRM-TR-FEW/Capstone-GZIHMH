import React from 'react';

const StatisticalCard = ({ imageSrc, title, count, backgroundColor }) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`bg-white rounded-3xl p-6 ${backgroundColor}`}
        style={{ width: '200px', height: '180px' }}
      >
        <div
          className={`flex items-center justify-center rounded-3xl p-4 mb-4 ${backgroundColor}`}
          style={{ width: '100%', height: '80px', marginTop: '-12px' }}
        >
          <div dangerouslySetInnerHTML={{ __html: imageSrc }} />
        </div>
        <h2 className="text-sm font-bold mb-2 text-black text-center w-150">
          {title}
        </h2>
        <p className="text-2xl font-bold text-black flex items-center justify-center w-100">
          {count}
        </p>
      </div>
    </div>
  );
};

export default StatisticalCard;
