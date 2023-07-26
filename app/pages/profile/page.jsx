import React from 'react';
import InfoBar from '@/components/InfoBar';
import Achievements from '@/components/Achievements';
import Friends from '@/components/Friends';
import FriendsSuggestion from '@/components/FriendsSuggestion';
import StatisticalCard from '@/components/StatisticalCard';
// ... (import statements)

const CheckIcon = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check w-10 h-10 text-white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M5 12l5 5l10 -10" />
</svg>
`;

const CheckIcon2 = `
<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hourglass-low" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fb923c" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path fill="#fb923c" d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" />
  <path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z" />
</svg>
`;
const CheckIcon3 = `
<svg fill="#84cc16" width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon line-color" stroke="#84cc16"> <g id="SVGRepo_bgCarrier" strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.048"></g> <g id="SVGRepo_iconCarrier"> <path id="secondary" d="M17.17,5H20a1,1,0,0,1,1,1V7a4,4,0,0,1-4,4h0" fill="none" stroke="#84cc16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.128" /> <path id="secondary-2" data-name="secondary" d="M6.74,5H4A1,1,0,0,0,3,6V7a4,4,0,0,0,4,4H7" fill="none" stroke="#84cc16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.128" /> <path id="primary" d="M8,21h8M7,9.57a6.78,6.78,0,0,0,4.26,6.29h0a2,2,0,0,0,1.48,0h0A6.78,6.78,0,0,0,17,9.57V3H7Zm5,6.61V21" fill="#84cc16" stroke="#84cc16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.128" /> </g> </svg>
`;

// ... (import statements)

const ProfilePage = () => {
  return (
    <div style={{ display: 'flex' }}>
      
      {/* 
      <img
            src="public/assets/01585e0f-4fe2-478d-930d-de730b3ccdc0.jpg"
            alt="Profile"
            className="w-20 h-20 rounded-full border-2 border-blue-500"
          />
      First Column */}
      <div className="w-full m-2">
      
      
        <div className="flex justify-end"> {/* Use justify-end to shift the InfoBar to the right */}
          <InfoBar name={ 'Sally Robins'} country={"New York"} image={'/assets/images/pro.jpg'} />
        </div>
        <div>
          <h2 className="text-xl text-gray-900">Total Statistics</h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <StatisticalCard
            imageSrc={CheckIcon}
            title="FINISHED COURSES"
            count={5}
            backgroundColor="bg-blue-300"
            style={{ flex: 1 }}
          />
          <StatisticalCard
            imageSrc={CheckIcon2}
            title="HOURS LEARNED"
            count={56}
            backgroundColor="bg-orange-100"
            style={{ flex: 1 }}
          />
          <StatisticalCard
            imageSrc={CheckIcon3}
            title="SKILLS ACHIEVED"
            count={7}
            backgroundColor="bg-lime-100"
            style={{ flex: 1 }}
          />
        </div>
        <div className="mt-4 w-full"> {/* This div will occupy the remaining space */}
          <Achievements className="m-0" />
        </div>
      </div>
      {/* Second Column */}
      <div style={{ flex: '1', padding: '1rem', paddingLeft: '2rem' }}>
        <FriendsSuggestion />
        <Friends />
      </div>
    </div>
  );
};

export default ProfilePage;
