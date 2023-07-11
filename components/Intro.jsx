import React from 'react'
import Image from 'next/image'
const Intro = () => {
  return (
    <div>
      


      <div className='flex justify-start'>
          <div className="flex flex-row  items-center  ">
            <div>
              <Image src="/assets/icons/icon.png"
                alt="icon image"
                width={70}
                height={40}
              />
            </div>

            <div>
              <p className='text-primary font-bold'> LearnU </p>
            </div>
          </div>


        </div>


        <div>

          <div className='text-gray-800 font-bold py-1 text-3xl '>
            <p> Discover passion </p>
          </div>

          <div className=' text-gray-600 py-5 '>
            <p> find out what topics you find interesting, <br /> learn a new skill & connect with people that <br /> are passionate about similer topics.  </p>
          </div>


          <div className="blue_btn  font-bold   w-40  py-5 ">
            <button className="   py-1"> GET STARTED </button>
          </div>
        </div>




    </div>
  )
}

export default Intro
