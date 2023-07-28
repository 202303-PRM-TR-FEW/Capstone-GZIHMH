

import React from 'react'

const MyPerformance = ({ imageSrc, title, count, backgroundColor, text }) => {
  return (
     <div className="flex flex-col items-center justify-center m-2 ">
      <div
        className={`bg-white rounded-3xl p-2 m-2  w-full ${backgroundColor}`}
        
      >
        <div className={`flex items-center justify-center rounded-2xl p-4 mb-4 ${backgroundColor}`}>
          <div dangerouslySetInnerHTML={{ __html: imageSrc }} />
        </div>
        
        <h2 className="text-sm font-bold mb-2 text-gray-900 text-center ">
          {title}
        </h2>





          <p className="text-2xl font-bold text-gray-900 flex items-center justify-center">
          {count} 
              <h1 className="text-xl mx-1 text-gray-900 text-center ">
                 {text}
              </h1>
        </p> 

      
      

      </div>
    </div>
  )
}

export default MyPerformance
