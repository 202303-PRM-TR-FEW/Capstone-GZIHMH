import React from 'react';
import InfoBar from '@/components/InfoBar';

const ProfilePage = () => {
  // Example usage
  const coursesCount = 0;
  const followersCount = 2;
  const followingCount = 32;

  return (
    <div>
      <InfoBar
        courses={coursesCount}
        followers={followersCount}
        following={followingCount}
      />
    </div>
  );
};

export default ProfilePage;
