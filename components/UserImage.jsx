import React from 'react';

const UserImage = () => {
    const name = 'Clara Manning';
    const image = '/assets/images/profilePic5.jpeg';

    return (
        <div className='user-container w-[170px] rounded-2xl flex items-center bg-white h-[39px]'>
            <img src={image} alt="User Profile "  className='w-[35px] h-[35px] rounded-full'/>
            <p className='opacity-60'>{name}</p>
        </div>
    );
};

export default UserImage;
