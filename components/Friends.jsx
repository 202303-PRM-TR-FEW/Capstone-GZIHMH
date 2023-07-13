import React from 'react'
import Image from 'next/image'

const Friends = () => {
  return (
    
      
 <div> 
    
                <div>
                         <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white mb-4"> Friends </h5>
                </div>

                
                    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-3xl shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">

                    </div>

                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                            <li className="py-3 sm:py-1">
                        

                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0"> 
                                        
                                        <Image 
                                                src="/assets/images/profilePic3.jpeg"
                                                width={500}
                                                height={500}
                                                alt="Picture of the author"
                                                className='w-10 h-10 rounded-full'
                                                />


                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            William Walker 
                                        </p>
                                    
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-blue-500 dark:text-white">
                                        PROFILE
                                    </div>
                                </div>
                            </li>





                            <li className="py-3 sm:py-1">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                       
                                    <Image 
                                                src="/assets/images/profilePic2.jpeg"
                                                width={500}
                                                height={500}
                                                alt="Picture of the author"
                                                className='w-10 h-10 rounded-full'
                                                />

                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Anna Clarke
                                        </p>
                                        
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-blue-500 dark:text-white">
                                        PROFILE
                                    </div>
                                </div> 
                            </li>


                        </ul>
                </div>


                            <div className=''>
                            <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                            VIEW ALL 
                        </a>
                            </div>

                </div>



                <div className=' flex flex-row justify-items-center mt-8 '>
                <button class="bg-blue-500  hover:bg-blue-700 text-white font-medium  py-1  w-full mr-1 rounded-lg">
                    FIND FRIENDS 
                </button>

                <button class="bg-blue-500 hover:bg-blue-700 text-white font-medium py-1  w-full ml-1 rounded-lg">
                    INVITE FRIENDS 
                </button>
                </div>

</div>


  )
}

export default Friends
