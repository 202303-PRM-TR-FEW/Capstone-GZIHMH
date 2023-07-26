import React from 'react'

const Achievements = ({ title ,desc,  imm, total, progress, bcolor}) => {
  return (

    <div className='bg-slate-50 shadow p-2   m-2 rounded-3xl flex flex-row '>

      <div className={`flex items-center justify-center rounded-3xl p-4  ${bcolor} w-40 bg-opacity-20`}>
                <div dangerouslySetInnerHTML={{ __html: imm }} />
      </div>

        <dev className='flex flex-col w-full p-2 '  >

        
            <dev className='flex flex-row items-center justify-between '> 


                <div className=' m-1 text-gray-900 font-bold ml-2  mr-10 '> {title} </div>

                <div>
                <p className='text-gray-500 text-sm  mt-4 mb-4 ml-20  '> {progress}/{total} </p>
                </div>


            </dev>


            <div className="bg-gray-200 h-2 rounded-xl overflow-hidden mx-2 ">
                 <div className={`h-full ${bcolor} rounded-lg`} style={{ width: '40%' }}></div>
                    </div>
            <dev className=' m-1 ml-2 text-gray-500 text-sm '> {desc} </dev>
            
        </dev>


    </div>
  )
}

export default Achievements