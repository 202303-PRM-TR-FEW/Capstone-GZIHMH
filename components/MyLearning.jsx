import React from 'react';
import Image from 'next/image';
import BecomingPhoto from '../public/assets/images/photo-1541516160071-4bb0c5af65ba.jpeg';
import DesignThinking from "../public/assets/images/2c1a496b-9948-4cb1-b87e-dbd417261382.jpg";

const MyLearning = () => {
    return (
        <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col h-full">
            <div className="flex rounded-2xl w-[680px] h-[172px] m-3 opacity-100 bg-white hover:bg-blue-200 bg-opacity-30 rounded-5 border hover:border-primary shadow">
                <Image
                    src={BecomingPhoto}
                    width={190}
                    height={172}
                    alt={'Becoming Photo'}
                    className="flex flex-row"
                />
                <div className="ml-4 p-4 w-[510px]">
                    <div className="flex flex-row justify-between mt-4">
                        <div className="px-1">
                            <h2>Becoming a Photographer</h2>
                            <p className="text-gray-600">Clara Chaning</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between my-2">
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                            <div className="w-2/3 h-full text-center text-xs text-white bg-blue-600 rounded-full"></div>
                        </div>
                    </div>
                    <p className="text-black text-sm">
                        69% Completed
                    </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col h-full">
                <div className="flex rounded-2xl w-[680px] h-[172px] m-3 opacity-100 bg-white hover:bg-blue-200 bg-opacity-30 rounded-5 border hover:border-primary shadow">
                    <Image
                        src={DesignThinking}
                        width={190}
                        height={172}
                        alt={'Becoming Photo'}
                        className="flex flex-row"
                    />
                    <div className="ml-4 p-4 w-[510px]">
                        <div className="flex flex-row justify-between mt-4">
                            <div className="px-1">
                                <h2>Design Thinking 2.0</h2>
                                <p className="text-gray-600">Chris Kinley</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between my-2">
                            <div className="w-full h-2 bg-gray-200 rounded-full">
                                <div className="w-2/3 h-full text-center text-xs text-white bg-blue-600 rounded-full"></div>
                            </div>
                        </div>
                        <p className="text-black text-sm">
                            27% Completed
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyLearning;
