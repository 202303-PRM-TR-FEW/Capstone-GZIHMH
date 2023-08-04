'use client'
import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import signUp from '@/app/pages/api/auth/signup'
import { ReturnIcon } from '@/utils/icons'
import GetStarted from './GetStarted'
// import { storage } from './firebase.js';
const RegistrationForm = ({ route }) => {
  const [showGetStarted, setShowGetstarted] = useState(false);
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [country, setCountry] = useState('')
  const [name, setName] = useState('')
  const[username,setUsername]=useState('')
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };
  const handleForm = async (event) => {
    event.preventDefault()
    console.log("im  handling the form ")
    console.log(email, password)
    const { result, error } = await signUp(email, password,name,country,username,selectedImage);

    if (error) {
        return console.log(error)
    }

    // else successful
    console.log(result)
     return route.push("/pages/home")
}
  const handleReturnClick = () => {
    console.log('im goback button')
    setShowGetstarted(true)
  }
  if (showGetStarted) {
    return <GetStarted routers={route} />;
  }
  return (
    <div className=" w-full " action="#">
      <div className=" ml-8 mb-4  flex flex-row justify-between items-center md:pr-12">
        <div className='flex flex-row  items-center h-full justify-start'>
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

      <div className=" m-12 rounded-lg  dark:border md:mt-0  xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className=" ">
              
              <form className=" pl-0 " onSubmit={handleForm}>
                  <div className='mb-4'>
              <label for="name" className="block mb-2 ml-2 text-sm font-medium text-gray-900 dark:text-white">
                Name
              </label>
                      <input type="name" name="name" id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name"
                      required onChange={(e) => setName(e.target.value)} />
                  </div>

                        
                  <div className='mb-4'>
                      <label for="country" className="block mb-2 ml-2  text-sm font-medium text-gray-900 dark:text-white">
                        Country
                      </label>
              <input type="country" name="country" id="country" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Country" required onChange={(e) => setCountry(e.target.value)} />
                  </div>
                  

                  <div className='mb-4'>
              <label for="email" className="block mb-2 ml-2  text-sm font-medium text-gray-900 dark:text-white">
                E-mail</label>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required
                onChange={(e) => setEmail(e.target.value)} />
                  </div>

                
                  <div className='mb-4'>
                  <label for="image" className="block mb-2 ml-2  text-sm font-medium text-gray-900 dark:text-white">Profile Photo</label>
                     
                    <input type="file"  className ="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"onChange={handleImageChange} />
                    {/* <button className="cat_btn" onClick={handleUpload}>Upload Image</button> */}
                  </div>





                  <div className='mb-4'>
              <label for="username" className="block mb-2 ml-2 text-sm font-medium text-gray-900 dark:text-white">
                Username</label>
              <input type="username" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required=""
                onChange={(e) => setUsername(e.target.value)} />
                  </div>

                
                  <div className='mb-4'>
              <label for="password" className="block mb-2 ml-2 text-sm font-medium text-gray-900 dark:text-white">
                Password</label>
              <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
                onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  
                  
                  <div>
                    {/* <Link href = '/pages/home'> */}
                      <button className=" blue_btn  m-2 py-1"  type="submit" > Sign Up </button>
                    {/* </Link> */}
                  </div>
               




              </form>
          </div>
      </div>


    </div>
  )
}

export default RegistrationForm
