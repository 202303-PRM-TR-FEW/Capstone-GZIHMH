import React from "react";
import Image from "next/image";
import MyActivityData from '../utils/MyActivityData';

const Activities = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-500 dark:text-white"> Monday </h5>
      </div>  

      <div className="flow-root">   
        <ul role="list">  
          {MyActivityData.map((item, index) => (
            <React.Fragment key={index}>
              {index === 2 && (
                <>
                  
                  <li className="py-3 sm:py-1">
                    <hr className="border-t-2 border-gray mb-4" />
                    <p className="text-sm font-bold text-gray-500 mb-2">10 DAYS AGO</p>
                  </li>
                </>
              )}
              <li className="py-3 sm:py-1">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      className="w-11 h-11 rounded-xl"
                      src={item.image}
                      alt={item.name}
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <a className="text-sm font-bold text-gray-900 truncate dark:text-white">
                      {item.title}
                    </a>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {item.name}
                    </p>
                  </div>
                </div>
              </li>

              {index === 2 && (
                <li className="py-3 sm:py-1">
                  <hr className="border-t-2 border-gray mt-2 mb-4" />
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
        <a href="#" className="text-sm hover:underline dark:text-blue-500 text-blue-500 font-bold py-3 sm:py-4">
          VIEW ALL ACTIVITY
        </a>
      </div>
    </div>
  );
};

export default Activities;