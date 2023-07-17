import React from 'react';
import InfoBar from '@/components/InfoBar';
import Achievements from '@/components/Achievements';
import Friends from '@/components/Friends';
import FriendsSuggestion from '@/components/FriendsSuggestion';

const ProfilePage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="md:col-span-2">
        <div className="md:sticky top-0">
          <InfoBar />
        </div>
      </div>
      <div className="md:col-span-2 flex flex-col">
        <FriendsSuggestion />
        <Friends />
      </div>
      <div className="md:col-span-2 md:col-start-3">
        <Achievements />
      </div>
    </div>
  );
};

export default ProfilePage;
