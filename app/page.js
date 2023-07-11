import Login from '@/components/Login'
import Image from 'next/image'

export default function Intro() {
  return (
    <main className="flex min-h-screen w-full flex-row items-center justify-between">



      <div className="flex flex-col items-center flex-start m-auto ">
        <Login />
        
      </div>

      <div className='bg-white  rounded-3xl  '>
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
