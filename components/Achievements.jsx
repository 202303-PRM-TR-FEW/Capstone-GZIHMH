
import { useEffect, useState } from 'react';
import {auth,firestore,getDocs,getDoc,collection,where,query,doc} from '../utils/firebase';

const Achievements = ({ title ,desc,  imm, total, progress, bcolor}) => {
  const [achievements, setAchievements] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default state is not logged in

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      // Check if the user is logged in or not
      setIsLoggedIn(!!user); // !!user converts user to a boolean
    });

    return () => unsubscribe(); // Clean up the listener when the component unmounts
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      const fetchAchievements = async () => {
        try {
          const achievementsRef = firestore.collection('ACHIEVEMENTS');
          const snapshot = await achievementsRef.get();
          const achievementData = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
          setAchievements(achievementData);
          console.log('Fetched achievements:', achievementData);
        } catch (error) {
          console.error('Error fetching achievements:', error);
        }
      };

      fetchAchievements();
    }
  }, [isLoggedIn]); // Fetch achievements when the authentication status changes

  if (!isLoggedIn) {
    return null; // If user is not logged in, do not render anything
  }

  return (
    <div>
    {achievements.map(achievement => (
    <div className='bg-slate-50 shadow p-2   m-2 rounded-3xl flex flex-row  '>
      <div className={`flex items-center justify-center rounded-3xl p-4  ${achievement.svg} w-40 bg-opacity-20`}>
                <div dangerouslySetInnerHTML={{ __html: achievement.svg}} />
      </div>
        <dev className='flex flex-col w-full p-2 '  >
            <dev className='flex flex-row items-center justify-between '> 
                <div className=' m-1 text-gray-900 font-bold ml-2  mr-10 '> {achievement.name} </div>
                <div>
                <p className='text-gray-500 text-sm  mt-4 mb-4 ml-20  '> {achievement.totalscore}/{achievement.pointValue} </p>
                </div>
            </dev>
            <div className="bg-gray-200 h-2 rounded-xl overflow-hidden mx-2 ">
                 <div className={`h-full ${bcolor} rounded-lg`} style={{ width: '40%' }}></div>
                  </div>
            <dev className=' m-1 ml-2 text-gray-500 text-sm '> {achievement.description} </dev> 
        </dev>
       )
    </div>
    ))}
    </div>
  )
}

export default Achievements