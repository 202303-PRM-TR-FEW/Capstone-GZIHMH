import React from 'react';
import db from '@/utils/db';

const getPersonName = (user_id) => {
  const person = db.person.find((p) => p.id === user_id);
  return person ? person.name : '';
};

const UserProfile = ({ user_id, image }) => {
  const userName = getPersonName(user_id);

  return (
    <div className='user-container shadow-lg min-w-[150px] w-1/4 mb-2 rounded-full flex items-center bg-white h-[35px]'>
      <img src={image} alt="User Profile" width={35} height={35} className='w-[35px] m-0 h-[35px] rounded-full' />
      <p className='text pl-2 w-full'>{userName}</p>
    </div>
  );
};

export default UserProfile;
