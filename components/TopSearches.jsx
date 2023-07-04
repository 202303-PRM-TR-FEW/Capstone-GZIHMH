import React from 'react'

const TopSearches = (props) => {
  const Top = ["Marketing Strategy", "UX Design", "Excel", "Adobe Photoshop", "CRM", "Photography", "Content Making"]
  return (
    <div className='flex flex-row'>
      <button className='outline_btn' key={props.index}>{props.item}</button>
    </div>
  )
}

export default TopSearches
