'use client'
import Login from '@/components/Login'
import RegistrationForm from '@/components/RegistrationForm'
import Image from 'next/image'
import GetStarted from '@/components/GetStarted'
import { useRouter } from 'next/navigation'
export default function Intro() {

  const router = useRouter();
  return (
    <main className="flex min-h-screen w-full flex-col sm:flex-row items-center">



      <div className="flex flex-col items-center m-auto w-full">
        
        {/* <Login />
        <RegistrationForm /> */}
        <GetStarted routers ={router} />
      </div> 


      <div className='bg-white  rounded-3xl w-full '>

        <Image src="/assets/images/welcomepage.png"
          alt="intro image"
          width={700}
          height={800}

        />
      </div>


      

    </main>
  )
}
﻿
