import React from "react";
import Image from "next/image";
import BecomingPhoto from "../public/assets/images/profilePic5.jpeg";
import DesignThinking from "../public/assets/images/designThinking.jpg";

const MyLearning = () => {
  return (
    <div className="grid gap-12 lg:grid-cols-2">
      <div className="p-1 space-x-6 bg-white bg-opacity-50 shadow-xl rounded-xl group sm:flex hover:rounded-2xl">
        <Image
          src={BecomingPhoto}
          width={100}
          height={300}
          alt={"Becoming Photo"}
          className="object-cover object-top w-full h-56 transition duration-500 rounded-lg sm:h-full sm:w-5/12 group-hover:rounded-xl"
        />
        <div className="p-5 pl-0 sm:w-7/12">
          <div className="space-y-2">
            <div className="space-y-4">
              <h2>Becoming a Photographer</h2>
              <p className="text-gray-600">Clara Chaning</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-1 space-x-6 bg-white bg-opacity-50 shadow-xl rounded-xl group sm:flex hover:rounded-2xl">
        <Image
          src={DesignThinking}
          width={100}
          height={300}
          alt={"Becoming Photo"}
          className="object-cover object-top w-full h-56 transition duration-500 rounded-lg sm:h-full sm:w-5/12 group-hover:rounded-xl"
        />
        <div className="p-5 pl-0 sm:w-7/12">
          <div className="space-y-2">
            <div className="space-y-4">
              <h2>Becoming a Photographer</h2>
              <p className="text-gray-600">Clara Chaning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyLearning;
