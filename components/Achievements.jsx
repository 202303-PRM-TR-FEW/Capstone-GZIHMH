import React from 'react'

const Achievements = () => {
  return (

    <div className='flex items-center justify-center h-screen m-3'>

<div className='bg-gray-300  w-auto h-30 rounded-lg flex flex-row '>

<div className='bg-orange-300 w-20 h-20 rounded-lg m-2 flex items-center justify-center'>
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hourglass-low" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6.5 17h11" />
  <path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" />
  <path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z" />
</svg>
</div>

        <dev className='flex flex-col items-start'  >
            <div className=' m-2 text-gray-500 font-bold mx-3 my-3 '> Commited learner </div>
            <div className="bg-gray-200 h-2 w-80 rounded-xl overflow-hidden mx-2 ">
                 <div className="h-full bg-orange-400 " style={{ width: '20%' }}></div>
                    </div>
            <dev className='mx-3 my-1 text-gray-500 '> Reach a 3 day streak  </dev>
        </dev>


        <div>
            <p className='text-gray-500 my-2 mx-2'>2/3</p>
        </div>

    </div>

    </div>

  )
}

export default Achievements


