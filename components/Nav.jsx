'use client'
import { useState,useEffect, React } from 'react'
import Image from 'next/image'
import { signOut } from 'firebase/auth'
import { auth} from'@/utils/firebase'
import { getProviders } from 'next-auth/react'
const Nav = () => {
    const handleSignoutClick = () => {
    
    signOut(auth).then(() => {
        console.log("Sign-out successful.") 
      }).catch((error) => {
       
      });
      
  }
    const isUserLoggedin = false;
    // const [providers, setProviders] = useState(null);
    // useEffect(() => {
    //     const setProviders = async () => {
    //         const response = await getProviders();
    //         setProviders(response)
    //     }
    //     setProviders();
    // },[])
    return (
        <div>
            <aside className="flex flex-col w-20 h-screen px-5 py-8 overflow-y-auto bg-transparent dark:bg-gray-900 dark:border-gray-700">
                <a href="/" >
                    <Image src="/assets/icons/logos.png"
                        alt="icon image"
                        width={800}
                        height={800}
                        className='flex m-auto w-12 h-8'
                    />
                </a>


                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav className="-mx-3 space-y-6 ">
                        <div className="space-y-3 ">

                            <a className=" flex flex-col items-center px-3 py-2 text-gray-400 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-primary hover:text-primary" href="/pages/home">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"

                                >
                                    <path d="M12 2L2 9v13h20V9L12 2ZM11 4.82843V9H7V5.82843L12 2.17157L17 5.82843V9H13V4.82843L12 4.17157L11 4.82843ZM13 9V19H19V9H13ZM9 9V19H5V9H9Z" />
                                    <path d="M12 5V9H7V5H12ZM12 5H17V9H12V5Z" fill="#FFFFFF" />
                                </svg>

                                <span className="mx-2 text-sm font-medium">Home</span>
                            </a>

                            <a className="flex flex-col items-center px-3 py-2 text-gray-400 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-primary hover:text-primary" href="/pages/search">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="10.5" cy="10.5" r="7.5" />
                                    <line x1="16" y1="16" x2="20" y2="20" />
                                </svg>

                                <span className="mx-2 text-sm font-medium">Search</span>
                            </a>
                            <a className="flex flex-col items-center px-3 py-2 text-gray-400 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-primary hover:text-primary" href="/pages/courses">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <polygon points="10 8 16 12 10 16 10 8" />
                                </svg>

                                <span className="mx-2 text-sm font-medium">Courses</span>
                            </a>
                            <a className="flex flex-col items-center px-3 py-2 text-gray-400 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-primary hover:text-primary" href="/pages/saved">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M19 2H5C3.897 2 3 2.897 3 4V22L12 17L21 22V4C21 2.897 20.103 2 19 2Z" />
                                </svg>

                                <span className="mx-2 text-sm font-medium">Saved</span>
                            </a>
                            <a className="flex flex-col items-center px-3 py-2 text-gray-400 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-primary hover:text-primary" href="/pages/profile">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                    <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                    <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />

                                </svg>

                                <span className="mx-2 text-sm font-medium">Profile</span>
                            </a>
                            {
                                isUserLoggedin ? (
                                    <button className='cat_btn' onclick ={handleSignoutClick}>
                                sign out
                            </button>
                                ) : (
                                        <>
                                        </>
                                )
                            }
                            
                        </div>


                    </nav>
                </div>
            </aside>
        </div>

    )
}

export default Nav

