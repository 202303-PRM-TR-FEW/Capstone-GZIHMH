'use client'
import React,{useState} from 'react'
import Image from 'next/image'
import Login from './Login';
import Link from 'next/link';
const GetStarted = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };
  const handleContinueAsGuestClick = () => {
    
  };

  if (showLogin) {
    // If showLogin is true, render the Login component.
    return <Login />;
  }

  return (
    <div>
      


      <div className='flex justify-start'>
      <div className="flex flex-row  items-center h-full justify-start ">
            <div>
              <Image src="/assets/icons/logo.png"
                alt="icon image"
                width={70}
                height={40}
              />
            </div>

            <div>
              <p className='text-primary font-bold'> Course Worm </p>
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


          <div className=" font-bold  flex justify-between  py-5 ">
            <div>
                  <button className="blue_btn  m-2  py-1" onClick={handleLoginClick}> Login </button>
            </div>
      <div>
        <Link href = '/pages/home'>
        <button className=" blue_btn  m-2 py-1" onClick={handleContinueAsGuestClick} > Continue as a guest </button>
        </Link>
        
      </div>
            
          </div>
        </div>




    </div>
  )
}

export default GetStarted
