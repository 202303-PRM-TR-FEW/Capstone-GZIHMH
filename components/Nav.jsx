'use client'
import { useState,useEffect, React } from 'react'
import Image from 'next/image'
import { signOut } from 'firebase/auth'

import { auth,getDoc,doc,firestore} from'@/utils/firebase'
import { HomeIcon, Logout, ProfileIcon, SavedIcon, CoursesIcon, SearchIcon}from '@/utils/icons'
import { useAuthContext } from '@/context/AuthContext'
import signIn from '@/app/pages/api/auth/signin'
const Nav = ({ router }) => {
    const user = useAuthContext();
    
    const isanon =  user.user && user.user.isAnonymous 
    

    const handleSignoutClick = async () => {
    await signOut(auth).then(() => {
        signIn('anonymous')
      }).catch((error) => {
       
      });
      
    }
  
    return (
        <div>
            <aside className="flex flex-col w-20  px-5 py-8 overflow-y-auto bg-transparent ">
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

                            <a className=" flex flex-col items-center px-3 py-2 text-gray-400 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100   hover:text-primary" href="/pages/home">
                               <HomeIcon/>
                                <span className="mx-2 text-sm font-medium">Home</span>
                            </a>

                            <a className="flex flex-col items-center px-3 py-2 text-gray-400 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100   hover:text-primary" href="/pages/search">
                                <SearchIcon/>

                                <span className="mx-2 text-sm font-medium">Search</span>
                            </a>
                            <a className="flex flex-col items-center px-3 py-2 text-gray-400 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100   hover:text-primary" href="/pages/courses">
                                <CoursesIcon />

                                <span className="mx-2 text-sm font-medium">Courses</span>
                            </a>
                            <a className="flex flex-col items-center px-3 py-2 text-gray-400 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100   hover:text-primary" href="/pages/saved">
                                <SavedIcon/>

                                <span className="mx-2 text-sm font-medium">Saved</span>
                            </a>
                            <a className="flex flex-col items-center px-3 py-2 text-gray-400 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100   hover:text-primary" href="/pages/profile">
                               <ProfileIcon/>

                                <span className="mx-2 text-sm font-medium">Profile</span>
                            </a>
                            {
                                isanon==false? (
                                    <div className='flex flex-col items-center px-3 py-2 justify-center m-auto text-gray-400 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100  hover:text-primary'>
                                        
                                        <button className="flex flex-col text-sm font-medium items-center justify-center m-auto text-gray-400 hover:bg-gray-100  hover:text-primary" onClick={handleSignoutClick}>
                                        <Logout/>
                                sign out
                            </button>
                                    </div>
                                    
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

