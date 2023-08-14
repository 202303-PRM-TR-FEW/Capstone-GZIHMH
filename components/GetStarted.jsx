'use client'
import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import Login from './Login';
import Link from 'next/link';
import { doc,auth, firestore, setDoc } from '@/utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getUserCountry } from '@/app/pages/api/ip/route';
import { useAuthContext } from '@/context/AuthContext';
import signIn from '@/app/pages/api/auth/signin';
import { usePathname } from 'next/navigation'
const GetStarted = ({ routers,popup ,isSignedIn}) => {


  const [showLogin, setShowLogin] = useState(false);
  const [ishome, setIshome] = useState(false);
  const pathname = usePathname()
 

  useEffect(()=>{
    if (pathname == '/pages/home') {
      setIshome(true)
    }    
	}, [])
  // const googleAuth = new GoogleAuthProvider();
  
  const handleLoginClick = () => {
    setShowLogin(true);
  };
  const handleContinueAsGuestClick = async () => {
    if (popup) {
      return 
    }
    const { result, error } = await signIn('anonymous');
      
      if (error) {
          return console.log(error)
      }
    
        // else successful
    console.log(result)
    console.log("my route is ",pathname)
    if (pathname == '/') {
      return routers.push('/pages/home');
    }
  };
  
  const handleGoogleLoginClick = async () => {
    // isAnonymous = false;
    const { result, error } = await signIn('google');
        
        if (error) {
            return console.log(error)
        }
        // else successful
    if (pathname == '/') {
     return  routers.push('/pages/home');
    }
    
 
  };

  if (showLogin) {
    return <Login routers={routers} />;
  }

  return (
    
    <div>
      


      <div className='flex justify-start'>
      <div className="flex flex-row w-full  items-center h-full justify-start ">
            <div>
              <Image src="/assets/icons/logos.png"
                alt="icon image"
                width={70}
                height={70}
              />
            </div>

            <div>
              <p className='text-primary font-bold'> Course Worm </p>
            </div>
          </div>


        </div>


      <div className='w-full'>
        {
          !ishome && (
            <>
            <div className='text-gray-800 font-bold py-1 text-3xl '>
            <p> Discover passion </p>
          </div>

          <div className=' text-gray-600 py-5 '>
            <p> find out what topics you find interesting, <br /> learn a new skill & connect with people that <br /> are passionate about similer topics.  </p>
          </div>
            </>
           

          )
        }
        {
          popup && (
            <div className=' text-gray-600 py-5 '>
            <p> Please sign in to continue  </p>
          </div>
          )
        }
          

          <div className=" font-bold  flex flex-col w-full  py-5 ">
            <div className='w-full'>
                  <button className="out_btn  m-2 w-full py-1" onClick={handleLoginClick}> Login / Sign up</button>
            </div>
            <div className='w-full' >
            <button className="out_btn  m-2  w-full py-1" onClick={handleGoogleLoginClick} >
            
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 186.69 190.5"
                className='mr-2'
              >
                <g transform="translate(1184.583 765.171)">
                  <path
                    fill="#4285f4"
                    d="M-1089.333-687.239v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z"
                  />
                  <path
                    fill="#34a853"
                    d="M-1142.714-651.791l-6.972 5.337-24.679 19.223h0c15.673 31.086 47.796 52.561 85.03 52.561 25.717 0 47.278-8.486 63.038-23.033l-30.913-23.986c-8.486 5.715-19.31 9.179-32.125 9.179-24.765 0-45.806-16.712-53.34-39.226z"
                  />
                  <path
                    fill="#fbbc05"
                    d="M-1174.365-712.61c-6.494 12.815-10.217 27.276-10.217 42.689s3.723 29.874 10.217 42.689c0 .086 31.693-24.592 31.693-24.592-1.905-5.715-3.031-11.776-3.031-18.098s1.126-12.383 3.031-18.098z"
                  />
                  <path
                    fill="#ea4335"
                    d="M-1089.333-727.244c14.028 0 26.497 4.849 36.455 14.201l27.276-27.276c-16.539-15.413-38.013-24.852-63.731-24.852-37.234 0-69.359 21.388-85.032 52.561l31.692 24.592c7.533-22.514 28.575-39.226 53.34-39.226z"
                  />
                </g>
              </svg>
              Login with google
            </button>
              
            </div>
            <div className='w-full'>
            <Link href = '/pages/home'>
                <button className=" blue_btn w-full m-2 py-1" onClick={handleContinueAsGuestClick} > Continue as a guest </button>
              </Link>
          
            </div>
            
          </div>
        </div>




    </div>
  )
}

export default GetStarted