import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MapPinIcon } from '@/utils/icons';

import {firestore,collection,doc,query,getDoc,getDocs,where, } from '@/utils/firebase'
import getUser from '@/app/pages/api/getUser';

const InfoBar = (props) => {
  const [coursesCount, setCoursesCount] = useState(0);
  const [followersCount, setFollowersCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  console.log("user data is ; ",props.user)
  const [user,setUser ] = useState(props.userDetails)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUser(props.userDetails.uid);
        setUser(data);
        console.log("the data from user func is: ", data);
  
        if (data.courses) {
          setCoursesCount(data.courses.length);
        }
  
        // Fetch followers count
        await fetchFollowers(data);
  
        // Fetch following count from user data
        if (data.following) {
          setFollowingCount(data.following.length);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  
  const fetchFollowers = async (data) => {
    const users = collection(firestore, 'users')
    const allUsersSnapshot = await getDocs(users);
    const followers = allUsersSnapshot.docs.filter(doc => {
      const userData = doc.data();
      return userData.following && userData.id == data.uid;
    });
    console.log("followers data is ; ",followers)
    setFollowersCount(followers.length)
  }
  return (
    <div className='p-3 w-full'>
      <div className="flex flex-row w-full">
        <div className='m-4'>
          <Image src={props.image} alt="profile image" width={300} height={300} className='rounded-full bg-cover bg-center bg-no-repeat w-32 h-28 object-cover overflow-hidden' />
        </div>
        <div className='flex flex-col w-full '>
          <div className='flex flex-col'>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{props.name}</h1>
            <p className="text-sm font-bold text-gray-500 mb-2 flex items-center">
              <MapPinIcon /> <span className="ml-2">{props.country}</span>
            </p>
          </div>
          <div className="flex justify-center items-center mb-4 ">
            <div className="flex flex-row items-center bg-gray-100 rounded-3xl w-full border-8 p-4 m-auto border-white">
              <div className="flex flex-col items-center w-full">
                <span className="text-lg font-bold mb-2 text-gray-900">{coursesCount}</span>
                <span className="text-gray-900 text-xs uppercase font-bold ">My COURSES</span>
              </div>
              <div className="flex flex-col items-center w-full">
                <span className="text-lg font-bold mb-2 text-gray-900">{followersCount}</span>
                <span className="text-gray-900 text-xs uppercase font-bold ">FOLLOWERS</span>
              </div>
              <div className="flex flex-col items-center w-full">
                <span className="text-lg font-bold mb-2 text-gray-900">{followingCount}</span>
                <span className="text-xs uppercase text-gray-900 font-bold ">FOLLOWING</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default InfoBar;
