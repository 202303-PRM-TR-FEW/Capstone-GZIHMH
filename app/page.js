import CheckElement from '@/components/CheckElement'
import TopSearches from '@/components/TopSearches'
import Image from 'next/image'

export default function Intro() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24">


      <div>

          <div className="flex flex-row"> 
            <div>
              <Image src="/assets/icons/icon.png" 
              alt="icon image"
              width={30} 
              height={30}
              />
              </div>

              <div>
                <p> LearnU </p>
              </div>

          </div> 

          <div className='blue_btn font-bold  '>
            <button> GET STARTED </button>
          </div>


      </div>

      <div className='bg-white    rounded-3xl '>
        <Image src="/assets/images/welcomepage.png" 
        alt="intro image"
        width={500}
        height={500}

        />
      </div>



    </main>
  )
}