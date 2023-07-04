import React from 'react'

const TopSearches = () => {
  const Top = ["Marketing Strategy" , "UX Design" , "Excel" , "Adobe Photoshop" , "CRM" , "Photography" , "Content Making" ] 
  return (
    <div className='flex flex-row'>
       {Top.map((item, index) => (
        <button className='outline_btn' key={index}>{item}</button>
      ))}
    </div>
  )
}

export default TopSearches
