import { useEffect, useState } from 'react';
import { firestore } from '../utils/firebase';

function Fetch_Achievements() {
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
        <h1>Achievements</h1>
        <ul>
          {achievements.map(achievement => (
            <li key={achievement.id}>
              <h2>{achievement.name}</h2>
              <p>{achievement.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
export default Fetch_Achievements;


