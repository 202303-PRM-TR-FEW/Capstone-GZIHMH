import React from 'react'

const LastYearComparison = ({title, title2, progressBar, percentage,number }) => {
  return (
    <div>
      


    <div className=' flex flex-row  '>
    
    
    
      
    
    <h2 className='text-gray-600  text-sm my-3 '>
         {title} <br/>  {title2}
      </h2>
    
      <div className={`${progressBar}`}>
      <div className="w-80 bg-gray-200 rounded-full dark:bg-gray-700 mr-10 ml-3 my-5">
      <div className="bg-blue-600 text-xs font-medium text-blue-100 text-right p-0.5 leading-none rounded-full" style={{ width: `${percentage}%` }}>  <p > {number} </p> </div>
        </div>
      </div>
    
    
    
    
      
    
    
      </div>
    
    
    
    
        </div>
  )
}

export default LastYearComparison
