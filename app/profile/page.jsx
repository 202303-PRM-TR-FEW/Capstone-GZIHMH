import React from 'react';
import InfoBar from '@/components/InfoBar';
import FinishedCourses from '@/components/FinishedCourses';

const ProfilePage = () => {
  // Example usage
  const coursesCount = 3; // Update the number of finished courses
  const followersCount = 2;
  const followingCount = 32;

  return (
    <div>
      <InfoBar
        courses={coursesCount}
        followers={followersCount}
        following={followingCount}
      />
      <FinishedCourses />
    </div>
  );
};

export default ProfilePage;
