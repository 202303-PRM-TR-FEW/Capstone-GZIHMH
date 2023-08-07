import React from 'react'

const LastYearComparison = ({title, title2, progressBar, percentage,number }) => {
  return (

    <div className=''>
      


    <div className=' flex flex-row items-center  justify-center p-3 '>
    
    
    
      
    <div className=' flex item-start  '>

    <h2 className='text-gray-500 text-sm w-20 '>
         {title} <br/>  {title2}
      </h2>

    </div>
    
    
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
