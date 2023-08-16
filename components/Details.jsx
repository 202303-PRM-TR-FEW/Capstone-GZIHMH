import Image from 'next/image';
import Link from 'next/link';
import db from '../utils/db';
import { Clock, Star } from '../utils/icons';
import React,{ useState,useEffect } from 'react';
const Details = ({ course  ,link}) => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoLink,setVideoLink] = useState(null)
  const getVideoIdFromWatchUrl = (watchUrl) => {
    const regex = /[?&]v=([^&]+)/;
    const match = watchUrl.match(regex);
    return match ? match[1] : null; 
  };
  useEffect(() => {
    if (link) {
      handleShowVideo();
    }
  }, [link]);
  const handleShowVideo = () => {
    const videoId = getVideoIdFromWatchUrl(link);
    const youtubeEmbedLink = `https://www.youtube.com/embed/${videoId}`;
    setShowVideo(true);
    setVideoLink(youtubeEmbedLink);
  };

  return (
    <section className='flex flex-col w-full p-2'>
      <div className='flex flex-col items-center w-full h-full'>
      {showVideo ? (
          <iframe
            src={videoLink}
            width='600'
            height='400'
            frameBorder='0'
            allowFullScreen
            className='max-h-[400px] max-w-[600px]'
          ></iframe>
        ) : (
        <Image src={course.thumbnail} width={600} height={400} alt={course.title} className='max-h-[400px] max-w-[600px]' />
        )}
       <div className='flex justify-start flex-col ml-4 '>
          <h2 className='p-1 mb-1 mt-1'>{course.title}</h2>
          <div className='user-container min-w-[150px] w-1/4  mb-2 rounded-full flex  items-center bg-white h-[35px]'>
             <Image src={course.tutor.profilePicture} alt="User Profile " width={35} height={35} className='w-[35px] m-0 h-[35px] rounded-full' />
             <p className='text pl-2 w-full'>{course.tutor.name}</p>
          </div>
          <div className='flex flex-row text'>
          <Clock />
            <p>{course.totalDuration} </p>
          </div>
          <div className='flex flex-row text'>
          <Star />
            <p>{course.rate}</p>
          </div>
          <h3 className='mt-3 text mb-1'>Course Description</h3>
          <p className='text'>{course.description}</p>
        </div>
      </div>
      <div>
        <div className='flex flex-col lg:flex-row md:flex-col sm:flex-col items-center justify-evenly mt-5  lg:mt-5 md:mt-3 sm:mt-1 gap-2'>
          <button className="text-primary font-bold bg-transparent border border-primary max-w-[300px] w-3/5 md:w-full text-sm h-9  rounded-2xl hover:text-white hover:bg-primary">REVIEW COURSE</button>
          <button className="text-primary font-bold bg-transparent border border-primary max-w-[300px] w-3/5 md:w-full h-9 text-sm  rounded-2xl hover:text-white hover:bg-primary">
            <Link href={`/CourseOverview/${course.id}`}>
              CONTINUE LEARNING
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Details;
