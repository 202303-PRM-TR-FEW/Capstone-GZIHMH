import React from 'react'
import Image from 'next/image'
import FeaturedCoursesImage from '../public/assets/images/background2.jpeg'
import FeaturedTeachersImage from "../public/assets/images/profilePic1.jpeg"


const FeaturedCourses = () => {
    return (
        <div className='w-212 h-92 rounded-26 bg-white-300 shadow-xl rounded-md'>
            <Image
                src={FeaturedCoursesImage}
                width={200}
                height={180}
                alt={'Featured Courses Images'}
                className="rounded-[20px] max-w-[300px]"
            />
            <div className="absolute" >
                <div className="flex -mt-20 ml-5 items-center shadow-xl max-w-sm rounded-md">
                    <Image
                        src={FeaturedTeachersImage}
                        width={32}
                        height={32}
                        alt={'Featured Teachers Images'}
                        className="h-16 w-16 rounded-full"
                    />
                    <p className="flex-center text-gray-900 font-medium">John Eames</p>
                </div>
            </div>
            <div className="flex flex-col justify-between m-2 py-4">
                <div>
                    <div className="flex items-center">
                        <h2>Power BI</h2>
                    </div>
                    <p className="flex items-center">
                        <p className="text-sm text-gray-500"><span className="text-gray-900 font-medium">⏲1h 53m</span></p>
                        <p className="text-sm text-gray-500 px-4"><span className="text-gray-900 font-medium">★4.9/5</span></p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            59$
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}


export default FeaturedCourses;