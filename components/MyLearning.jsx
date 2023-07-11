import React from 'react'
import Image from 'next/image'
import BecomingPhoto from '../public/assets/images/photo-1541516160071-4bb0c5af65ba.jpeg'
import DesignThinking from "../public/assets/images/2c1a496b-9948-4cb1-b87e-dbd417261382.jpg"

const MyLearning = () => {
    return (
        <div className="grid gap-12 lg:grid-cols-2">
            <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                <Image
                    src={BecomingPhoto}
                    width={100}
                    height={300}
                    alt={'Becoming Photo'}
                    className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
                />
                <div className="sm:w-7/12 pl-0 p-5">
                    <div className="space-y-2">
                        <div className="space-y-4">
                            <h2>Becoming a Photographer</h2>
                            <p className="text-gray-600">Clara Chaning</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                <Image
                    src={DesignThinking}
                    width={100}
                    height={300}
                    alt={'Becoming Photo'}
                    className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
                />
                <div className="sm:w-7/12 pl-0 p-5">
                    <div className="space-y-2">
                        <div className="space-y-4">
                            <h2>Becoming a Photographer</h2>
                            <p className="text-gray-600">Clara Chaning</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MyLearning;



