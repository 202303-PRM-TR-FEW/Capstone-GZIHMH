
'use client'
import { use, useState } from 'react';
import Link from 'next/link';
import RegistrationForm from './RegistrationForm';
import Image from 'next/image';
import signIn from '@/app/pages/api/auth/signin';
import { ReturnIcon } from '@/utils/icons';
import GetStarted from './GetStarted';
const Login = ({ routers }) => {
  const [showGetStarted, setShowGetstarted] = useState(false);

  const [showSignup, setShowSignup] = useState(false);
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [emailError, setEmailError] = useState('');  
  const [passwordError, setPasswordError]  = useState('');
  const handleSignupClick = () => {
    setShowSignup(true);
  };
  if (showSignup) {
    return <RegistrationForm route={routers} />;
  }
  const handleSigninClick = async () => {

    const { result, error } = await signIn('firebase',userEmail,userPassword);

        if (error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          
          switch(errorCode) {
            case "auth/user-not-found":
              setEmailError("User with this email does not exist.");
              break;
            case "auth/wrong-password":
              setPasswordError("Wrong password.");
                break;
            case "auth/too-many-requests":
                alert("Too many requests. Try again later.");
                break;
            case "auth/invalid-email":
                setEmailError("invalid email");
                break;
            default:
              alert(errorMessage);
          }
        }

        // else successful
        console.log(result)
 
 
    
  }
  const handleReturnClick = () => {
    console.log('im goback button')
    setShowGetstarted(true)
  }
  if (showGetStarted) {
    return <GetStarted routers={routers} />;
  }
  return (
    <div className=" w-full flex flex-col " action="#">
      <div className=" ml-8 mb-4  flex flex-row justify-between items-center md:pr-12">
      <div className="ml-8 mb-4 flex flex-row  items-center h-full justify-start ">
        <div>
          <Image src="/assets/icons/logos.png"
            alt="icon image"
            width={70}
            height={40}
          />
        </div>

        <div>
          <p className='text-primary font-bold'> Course Worm </p>
        </div>
        </div>
        <div>
          <button className="text-sm font-medium items-center justify-center m-auto text-gray-400 hover:bg-gray-100  hover:text-primary" onClick={handleReturnClick}>
            <ReturnIcon />
            Go Back
          </button>
        </div>
      </div>
      

      <div className=" ml-4 flex flex-col rounded-lg  dark:border md:mt-0  xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col">
            <div>
              <h1 className="ml-6 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
            </div>
              <div>
              <form  className=" flex flex-col  " action="#">


                <div className='flex flex-col  md:flex-row m-4'>

                  <div className='m-2 w-full'>
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input  type="email" name="email" id="email" value={userEmail} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" onChange={e=>setUserEmail(e.target.value)}/>
                      {emailError && (     
                        <p className="text-xs text-red-600 mt-1">{emailError}</p>    
                      )}  
                  </div>


                  <div className='m-2 w-full'>
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" value={userPassword} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={e=>setUserPassword(e.target.value)}/>
                    {passwordError && (   
                      <p className="text-xs text-red-600 mt-1">{passwordError}</p>
                    )} 
                  </div>

                </div>



                <div className="my-4 flex items-center flex-col md:flex-row ">
                  <div className=" ml-12 items-center flex flex-row w-full ">
                      <div className="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                      </div>
                  </div>
                  <div className="ml-8 items-center flex flex-row w-full ">
                    <a href="#" className=" text-gray-400 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>

                  </div>
              </div>


              <div className='m-auto mt-8'>
                <button type="submit" className="w-full mb-4 text-blue-600 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleSigninClick}>Sign in</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet? <button href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500" onClick={handleSignupClick}>Sign up</button>
                </p>

              </div>
               


            </form>
          </div>
              
        </div>
      </div>


    </div>
  )
}

export default Login

