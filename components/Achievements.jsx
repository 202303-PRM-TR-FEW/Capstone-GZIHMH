
import { useEffect, useState } from 'react';
import { firestore } from '../utils/firebase';

const Achievements = ({ title ,desc,  imm, total, progress, bcolor}) => {
  const [achievements, setAchievements] = useState([]);

    useEffect(() => {
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
    }, []);
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