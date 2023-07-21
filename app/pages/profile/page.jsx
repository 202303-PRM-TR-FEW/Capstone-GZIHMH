import React from 'react';
import InfoBar from '@/components/InfoBar';
import Achievements from '@/components/Achievements';
import Friends from '@/components/Friends';
import FriendsSuggestion from '@/components/FriendsSuggestion';
import StatisticalCard from '@/components/StatisticalCard';

const ProfilePage = () => {
  const CheckIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check w-12 h-12 text-white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 12l5 5l10 -10" />
  </svg>
`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="md:col-span-2">
        <div className="md:sticky top-0">
          <InfoBar />
          <StatisticalCard 
           imageSrc={CheckIcon} 
           title="Finished Courses" // Specify the title for the finished courses section
           count={5} // Specify the number of finished courses
           backgroundColor="bg-blue-300"
          />
        </div>
      </div>
      <div className="md:col-span-2 md:col-start-3 flex flex-col space-y-4">
        <div className="md:pl-8">
          <FriendsSuggestion />
        </div>
        <div className="md:pl-8">
          <Friends />
        </div>
      </div>
      <div className="md:col-span-2 md:col-start-3">
        <Achievements />
      </div>
    </div>
  );
};

export default ProfilePage;
