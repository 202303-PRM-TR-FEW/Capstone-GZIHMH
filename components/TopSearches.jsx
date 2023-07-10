import React from 'react'

const TopSearches = (props) => {
  return (
    <div className='flex flex-row'>
      <button className='cat_btn mr-2 my-5' key={props.index}>{props.item}</button>
    </div>
  )
}

export default TopSearches
