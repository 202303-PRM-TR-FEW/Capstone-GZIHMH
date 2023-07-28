 'use client'
import Login from '@/components/Login'
import RegistrationForm from '@/components/RegistrationForm'
import Image from 'next/image'
import GetStarted from '@/components/GetStarted'
import { getUserCountry } from './pages/api/ip/route'
// import { GetServerSideProps } from 'next'
export default function Intro({ ip }) {
  console.log("ip is ",ip)
  const router = '';
  //const result = getUserCountry(ip);
  console.log("fuck")
  // console.log(result)
  return (
    <main className="flex min-h-screen w-full flex-col sm:flex-row items-center">



      <div className="flex flex-col items-center m-auto w-full">
        
        {/* <Login />
        <RegistrationForm /> */}
        <GetStarted routers={router} userCountry={ip} />
        
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
Intro.getInitialProps = async ({ req }) => {
  const ip = req.headers["x-real-ip"] || req.connection.remoteAddress;
  
  return { ip };
};

