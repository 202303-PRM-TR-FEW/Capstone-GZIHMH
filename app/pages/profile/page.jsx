'use client'
import { React,useState,useEffect } from 'react';
import InfoBar from '@/components/InfoBar';
import Achievements from '@/components/Achievements';
import Friends from '@/components/Friends';
import FriendsSuggestion from '@/components/FriendsSuggestion';
import StatisticalCard from '@/components/StatisticalCard';
import {auth,firestore,getDocs,getDoc,collection,where,query,doc} from '@/utils/firebase'
import getAchievements from '../api/getAchievements';
import { useAuthContext } from '@/context/AuthContext';
import findFriends from '../api/findFriends';
const CheckIcon = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check w-10 h-10 text-white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M5 12l5 5l10 -10" />
</svg>
`;

const CheckIcon2 = `
<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hourglass-low w-10 h-10" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fb923c" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path fill="#fb923c" d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" />
  <path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z" />
</svg>
`;
const CheckIcon3 = `
<svg fill="#84cc16" width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon line-color" stroke="#84cc16"> <g id="SVGRepo_bgCarrier" strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.048"></g> <g id="SVGRepo_iconCarrier"> <path id="secondary" d="M17.17,5H20a1,1,0,0,1,1,1V7a4,4,0,0,1-4,4h0" fill="none" stroke="#84cc16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.128" /> <path id="secondary-2" data-name="secondary" d="M6.74,5H4A1,1,0,0,0,3,6V7a4,4,0,0,0,4,4H7" fill="none" stroke="#84cc16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.128" /> <path id="primary" d="M8,21h8M7,9.57a6.78,6.78,0,0,0,4.26,6.29h0a2,2,0,0,0,1.48,0h0A6.78,6.78,0,0,0,17,9.57V3H7Zm5,6.61V21" fill="#84cc16" stroke="#84cc16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.128" /> </g> </svg>
`;


const ProfilePage = () => {
  const user = useAuthContext();
  console.log("the user in profile form useAuthcountesxt: ",user)
  const [userData, setUserData] = useState(null);
  const [achiev, setAchiev] = useState([]);
  const [friends,setFriends] = useState([])
  const[profileUrl,setProfileUrl]=useState('/assets/images/defaultuser.png')
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const achData = await getAchievements();
        setAchiev(achData)
        const { uid } = auth.currentUser
        console.log("uid is :",uid)
        const userDoc = doc(firestore, 'users', uid);
        const userSnapshot = await getDoc(userDoc)
        
        if (userSnapshot.exists()) {
          const userDoc = userSnapshot.data();
           const data = await findFriends(user);
          setFriends(data)
          setUserData(userDoc);
          try {
            setProfileUrl(userDoc.profilePicture)
          } catch { setProfileUrl('/assets/images/defaultuser.png')}
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
    console.log(userData)
  }, []);
  if (!userData) {
    // If userData is still loading, you can show a loading message or spinner
    return <p>Loading user data...</p>;
  }
  return (
    <div className='w-full'>
      
      {/* 
      <img
            src="public/assets/01585e0f-4fe2-478d-930d-de730b3ccdc0.jpg"
            alt="Profile"
            className="w-20 h-20 rounded-full border-2 border-blue-500"
          />
      First Column */}
      <div className="w-full">
        <div className='flex flex-col md:flex-row  w-full'>
          <div className='flex flex-col w-full'>
            <div>
            <InfoBar name={ userData.name} country={userData.country} image={profileUrl} />

            </div>
            <div className='flex flex-col w-full'>
              <div>
                <h2 className="text-xl text-gray-900 w-full !mt-2 md:mt-10 ml-2">Total Statistics</h2>
              </div>
              <div className='flex flex-row w-full'>
                <div className='w-full'>
                  <StatisticalCard
                    imageSrc={CheckIcon}
                    title="FINISHED COURSES"
                    count={5}
                    backgroundColor="bg-blue-300"
                    
                  />
                </div>
                <div className='w-full'>
                  <StatisticalCard
                    imageSrc={CheckIcon2}
                    title="HOURS LEARNED"
                    count={56}
                    backgroundColor="bg-orange-100"
                    
                  />
                </div>
                <div className='w-full'>
                  <StatisticalCard
                    imageSrc={CheckIcon3}
                    title="SKILLS ACHIEVED"
                    count={7}
                    backgroundColor="bg-lime-100"
                    
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-col w-full'>
              <div>
                <h2 className="text-xl mt-2 md:mt-10 text-gray-900 w-full">Achievements</h2>
              </div>
              <div className='w-full flex flex-col'>
                {achiev
                        .slice(0, 2).map((ach) => (
                            <div className='w-full p-2 'key={ach.id}>
                                
                                <div className="mt-4 w-full">
                                <Achievements title={ach.name} desc={ach.description } imm={ach.svg} total={ach.totalscore} progress={ach.pointValue} bcolor={"bg-orange-400"} />
                                        
                                    </div>
                                    
                            </div>
                                
                    ))}
              
              </div>

            </div>
          </div>
          <div className='flex flex-col w-full md:pl-6 md:pr-16'>
            <div className='w-full'>
              <h5 className="m-4 w-full text-xl font-bold leading-none text-gray-900 dark:text-white mb-4">
                Friend Suggestions
              </h5>
            </div>
            <div className='w-full'>
              <FriendsSuggestion user = {user} friends={friends } />
            </div>
            <div className='w-full'>
              <h5 className="m-4 w-full text-xl font-bold leading-none text-gray-900 dark:text-white mb-4">
                Friends
              </h5>
            </div>
            <div className='w-full'>
              <Friends />
            </div>
            <div className='w-full flex flex-col md:flex-row'>
              <button className='out_btn w-full m-2'>FIND FRIENDS</button>
              <button className='blue_btn w-full m-2'> INVITE FRIENDS</button>
            </div>

          </div>
          <div>

          </div>
        </div>
      
        
      </div>
      
    </div>
  );
};

export default ProfilePage;
