import React from 'react';
import InfoBar from '@/components/InfoBar';
import Achievements from '@/components/Achievements';
import Friends from '@/components/Friends';

const ProfilePage = () => {
  const coursesCount = 3; // Update the number of finished courses
  const followersCount = 2;
  const followingCount = 32;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="md:col-span-2">
        <div className="md:sticky top-0">
          <InfoBar
            courses={coursesCount}
            followers={followersCount}
            following={followingCount}
          />
        </div>
      </div>
      <div className="md:col-span-2">
        <Friends />
      </div>
      <div className="md:col-span-2 md:col-start-3">
        <Achievements />
      </div>
    </div>
  );
};

export default ProfilePage;
