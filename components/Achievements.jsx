import React from 'react'

const Achievements = () => {
  return (




    <div className='flex flex-col items-start justify-center h-screen m-3'>


           <div><h2 className=' text-xl text-gray-900 ' > Achievements </h2></div>


    <div className='bg-slate-50 shadow  m-2  w-auto h-30 rounded-3xl flex flex-row '>

                <div className='bg-orange-100 w-20 h-20 rounded-2xl m-2 flex items-center justify-center'>

                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hourglass-low" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M6.5 17h11" />
                        <path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" />
                        <path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z" />
                      </svg>
                      </div>

        <dev className='flex flex-col items-start '  >

        
            <dev className='flex flex-row items-center justify-between '> 


                <div className=' m-1 text-gray-900 font-bold ml-2  mr-10 '> Commited Learner </div>

                <div>
                <p className='text-gray-500 text-sm  mt-4 mb-4 ml-20  '> 2/3 </p>
                </div>


            </dev>


            <div className="bg-gray-200 h-2 w-80 rounded-xl overflow-hidden mx-2 ">
                 <div className="h-full bg-orange-400 rounded-lg " style={{ width: '20%' }}></div>
                    </div>
            <dev className=' m-1 ml-2 text-gray-500 text-sm '> Reach a 3 day streak  </dev>
            
        </dev>


    </div>









    <div className='bg-slate-50 shadow  m-2  w-auto h-30 rounded-3xl flex flex-row '>

<div className='bg-lime-100 w-20 h-20 rounded-2xl m-2 flex items-center justify-center'>

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hourglass-low" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6.5 17h11" />
  <path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" />
  <path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z" />
</svg>

</div>

        <dev className='flex flex-col items-start '  >

        
            <dev className='flex flex-row items-center justify-between '> 


                <div className=' m-1 text-gray-900 font-bold ml-2 m mr-20 '> Point Collector </div>

                <div>
                <p className='text-gray-500 text-sm m-4 ml-10 '> 1200/3000 </p>
                </div>


            </dev>


            <div className="bg-gray-200 h-2 w-80 rounded-xl overflow-hidden mx-2 ">
                 <div className="h-full bg-lime-500 rounded-lg " style={{ width: '20%' }}></div>
                    </div>
            <dev className=' m-1 ml-2 text-gray-500 text-sm '> Earn 1800 more points  </dev>
            
        </dev>


    </div>















    </div>

  )
}

export default Achievements


