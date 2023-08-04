import React from 'react';

const ThisWeek = ({text, bar, percentage }) => {
  return (

    <div className="flex flex-row  justify-between">




    <div className= {` day-container flex flex-col items-center m-7 ${bar} `} >

      <div className="progress-bar bg-gray-200   w-4   h-48   rounded-xl   flex flex-col justify-end"  >
        <div className="  progress-indicator bg-blue-500   rounded-xl   " style={{ height: `${percentage}%` }} > </div>
      </div>

      <div className="font-bold text-black mt-2"> {text}  </div> 
    </div>


  


   
  </div>

  

  );
};

export default ThisWeek;
