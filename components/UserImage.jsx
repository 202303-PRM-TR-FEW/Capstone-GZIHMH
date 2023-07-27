import React from 'react';
import Image from 'next/image';

const UserImage = () => {
    const name = 'Clara Manning';
    const image = '/assets/images/profilePic5.jpeg';

    return (
        <div className='user-container w-[170px] rounded-2xl flex items-center bg-white h-[39px]'>
            <Image src={image} alt="User Profile" width={35} height={35} className='rounded-full' />
            <p className='opacity-60'>{name}</p>
        </div>
    );
};

export default UserImage;
