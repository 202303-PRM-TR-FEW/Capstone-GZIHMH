import React from 'react';

const UserImage = () => {
  const name = 'Clara Manning';
  const image = '/assets/images/profilePic5.jpeg';

  return (
    <div className='user-container p-0 w-[170px] rounded-full flex  items-center bg-white h-[35px]'>
      <img src={image} alt="User Profile " width={35} height={35} className='w-[35px] h-[35px] rounded-full' />
      <p className='opacity-60'>{name}</p>
    </div>
  );
};

export default UserImage;
