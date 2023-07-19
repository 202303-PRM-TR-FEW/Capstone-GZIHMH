
import { storage, firestore } from './firebase';
import categories_db from './categories_db';

export const collectionNames = {
    USERS: 'users',
    COURSES: 'courses',
    CATEGORIES: 'categories',
    LESSONS: 'lessons',
    ACHIEVEMENTS: 'achievements',
    LEVELS: 'levels',
    TUTOR_DETAILS:'tutor-details',
};
export const initialAchievements = [
    { name: 'Commited Learner', description: 'Reach a 3 day streak', totalscore: 3, pointValue: 1, svg: (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hourglass-low" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fb923c" fill="none" strokeLinecap="round" strokeLinejoin="round" > <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path fill="#fb923c" d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" /> <path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z" /> </svg>) },
    { name: 'Point Collector', description: 'Earn 3000 points', totalscore: 3000, pointValue: 1, svg: (<svg fill="#84cc16" width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon line-color" stroke="#84cc16"> <g id="SVGRepo_bgCarrier" strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.048"></g> <g id="SVGRepo_iconCarrier"> <path id="secondary" d="M17.17,5H20a1,1,0,0,1,1,1V7a4,4,0,0,1-4,4h0" fill="none" stroke="#84cc16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.128" /> <path id="secondary-2" data-name="secondary" d="M6.74,5H4A1,1,0,0,0,3,6V7a4,4,0,0,0,4,4H7" fill="none" stroke="#84cc16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.128" /> <path id="primary" d="M8,21h8M7,9.57a6.78,6.78,0,0,0,4.26,6.29h0a2,2,0,0,0,1.48,0h0A6.78,6.78,0,0,0,17,9.57V3H7Zm5,6.61V21" fill="#84cc16" stroke="#84cc16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.128" /> </g> </svg> ), },    
    { name: 'Knowledge Trailblazer', description: 'Watch 10 videos in a row', totalscore: 10, pointValue: 2, svg: ( <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#0284c7"> <g> <rect fill="none" height="24" width="24" /> </g> <g> <path d="M23,12l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,12l2.44,2.79l-0.34,3.7 l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,12z M10.09,16.72l-3.8-3.81l1.48-1.48l2.32,2.33 l5.85-5.87l1.48,1.48L10.09,16.72z" /> </g> </svg> ), },
    { name: 'Lifelong Learner', description: 'Achieve a 30-day streak of daily video learning', totalscore: 30, pointValue: 3, svg: ( <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#f97316" fill="none" strokeLinecap="round" strokeLinejoin="round" > <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /> <line x1="16" y1="2" x2="16" y2="6" /> <line x1="8" y1="2" x2="8" y2="6" /> <line x1="3" y1="10" x2="21" y2="10" /> </svg> ), },
    { name: 'Master of Curiosity', description: 'Watch 50 videos on different topics', totalscore: 50, pointValue: 5, svg: ( <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#0284c7" viewBox="0 0 24 24"> <rect fill="none" height="24" width="24" /> <g> <path d="M19.88,18.47c0.44-0.7,0.7-1.51,0.7-2.39c0-2.49-2.01-4.5-4.5-4.5s-4.5,2.01-4.5,4.5s2.01,4.5,4.49,4.5c0.88,0,1.7-0.26,2.39-0.7L21.58,23L23,21.58L19.88,18.47z M16.08,18.58c-1.38,0-2.5-1.12-2.5-2.5c0-1.38,1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5C18.58,17.46,17.46,18.58,16.08,18.58z M15.72,10.08c-0.74,0.02-1.45,0.18-2.1,0.45l-0.55-0.83l-3.8,6.18l-3.01-3.52l-3.63,5.81L1,17l5-8l3,3.5L13,6C13,6,15.72,10.08,15.72,10.08z M18.31,10.58c-0.64-0.28-1.33-0.45-2.05-0.49c0,0,5.12-8.09,5.12-8.09L23,3.18L18.31,10.58z" /> </g> </svg> ), }, 
    { name: 'Dedicated Scholar', description: 'Complete 100 video lessons in your learning journey', totalscore: 100, pointValue: 10, svg: ( <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-award" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fb923c" fill="none" strokeLinecap="round" strokeLinejoin="round" > <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <circle cx="12" cy="8" r="7" /> <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /> </svg> ), }, 
    { name: 'Perpetual Progress', description: 'Achieve a 100-day streak of daily video learning', totalscore: 100, pointValue: 15, svg: ( <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sun" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fb923c" fill="none" strokeLinecap="round" strokeLinejoin="round" > <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <circle cx="12" cy="12" r="5" /> <line x1="12" y1="1" x2="12" y2="3" /> <line x1="12" y1="21" x2="12" y2="23" /> <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /> <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /> <line x1="1" y1="12" x2="3" y2="12" /> <line x1="21" y1="12" x2="23" y2="12" /> <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /> <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /> </svg> ), }, 
    { name: 'Video Virtuoso', description: 'Watch 500 videos and absorb a wealth of knowledge', totalscore: 500, pointValue: 20, svg: ( <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="#0284c7" > <path d="M0 0h24v24H0z" fill="none" /> <path d="M18 4l2 3h-3l-2-3h-2l2 3h-3l-2-3H8l2 3H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4zm-6.75 11.25L10 18l-1.25-2.75L6 14l2.75-1.25L10 10l1.25 2.75L14 14l-2.75 1.25zm5.69-3.31L16 14l-.94-2.06L13 11l2.06-.94L16 8l.94 2.06L19 11l-2.06.94z" /> </svg> ), }, 
    { name: 'Eager Explorer', description: 'Explore 10 different subject categories through video learning', totalscore: 10, pointValue: 3, svg: ( <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fb923c" fill="none" strokeLinecap="round" strokeLinejoin="round" > <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <circle cx="12" cy="12" r="10" /> <polygon points="16.74 8.52 15 3 9 3 7.26 8.52 12 14 16.74 8.52" /> </svg> ), }, 
    { name: 'Champion of Learning', description: 'Achieve a 365-day streak, showcasing a year of continuous learning dedication', totalscore: 365, pointValue: 25, svg: ( <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-crown" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fb923c" fill="none" strokeLinecap="round" strokeLinejoin="round" > <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M12 4v-1" /> <path d="M8 8v-1a4 4 0 0 1 8 0v1" /> <path d="M16 8v-1" /> <path d="M12 4c1.657 0 3 1.337 3 3s-1.343 3-3 3-3 -1.337-3 -3 1.343-3 3 -3zm0 0v1m0 0v1" /> <path d="M12 18.01l-3 -3.01l3 -3l3 3.01l-3 3z" /> </svg> ), }, 
    { name: 'Enlightened Visionary', description: 'Reach the highest level of achievement with 1,500 videos watched', totalscore: 1500, pointValue: 30, svg: ( <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-target" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fb923c" fill="none" strokeLinecap="round" strokeLinejoin="round" > <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <circle cx="12" cy="12" r="10" /> <circle cx="12" cy="12" r="6" /> <circle cx="12" cy="12" r="2" /> </svg> ), },
];

export const initialLevels = [
    { name: 'Beginner'},
    { name: 'Intermediate'},
    { name: 'Advanced'},
  ];
export const initialUsers = [
    { name:'Michael Nuendorff',country:'United States',
    email:'michaelnuendorff@gmail.com', 
    username:'michaelnuendorff',
    profilePicture:'/assets/images/michaelnuendorff.jpg', 
    coursesWatched: [],
    coursesSaved: [],
    friends: [],
    wordsSearched: [],
    isTutor:true,
}
];
export const initialTutorDetails = [
{tutorId:'',
experties:[],
teachingExperience:'5 years',
coursePublished:[],
}
];
export const initialCourses = [
    { title: 'Sales Training: Back to Basics', 
    description: `This impactful selling course targets beginning or under-performing salespeople, providing them with the essential tools to reach higher levels of success. Key topics covered include:
    Understanding why certain salespeople excel while others struggle.
    Setting effective and achievable sales goals.
    Utilizing data-driven KPIs to drive sales performance.
    Creating actionable weekly plans for consistent progress.`

},
    { title: 'Course 2', description: 'Description of Course 2' },
];

// Function to initialize the database schema (creating collections if needed)
export const initializeDatabaseSchema = async () => {
    try {
        // Check if the collections already exist before initializing
        const collections = await firestore.listCollections();
        const collectionNamesSet = new Set(collections.map((col) => col.id));
    
        // Create the 'courses' collection if it doesn't exist
        if (!collectionNamesSet.has(collectionNames.COURSES)) {
            const coursesRef = firestore.collection(collectionNames.COURSES);
            await Promise.all(initialCourses.map((course) => coursesRef.add(course)));
        }
    
        // Create the 'achievements' collection if it doesn't exist
        if (!collectionNamesSet.has(collectionNames.ACHIEVEMENTS)) {
            const achievementsRef = firestore.collection(collectionNames.ACHIEVEMENTS);
            await Promise.all(initialAchievements.map((achievement) => achievementsRef.add(achievement)));
        }
  
        // Create the 'levels' collection if it doesn't exist
        if (!collectionNamesSet.has(collectionNames.LEVELS)) {
            const levelsRef = firestore.collection(collectionNames.LEVELS);
            await Promise.all(initialLevels.map((level) => levelsRef.add(level)));
        }
        // Create the 'categories' collection if it doesn't exist
        if (!collectionNamesSet.has(collectionNames.CATEGORIES)) {
            const categoriesRef = firestore.collection(collectionNames.CATEGORIES);
            await Promise.all(categories_db.map((category) => categoriesRef.add(category)));
        }
        // Create the 'users' collection if it doesn't exist
        if (!collectionNamesSet.has(collectionNames.USERS)) {
            const usersRef = firestore.collection(collectionNames.USERS);
            await Promise.all( initialUsers.map((user) => usersRef.add(user)) );
        }
  
      console.log('Database schema initialized!');
    } catch (error) {
      console.error('Error initializing database schema:', error);
    }
  };

  // Function to handle profile picture upload
const uploadProfilePicture = async (userId, file) => {
    try {
      // Create a reference to the Firebase Storage location where the image will be stored
      const storageRef = storage.ref(`profile_pictures/${userId}`);
  
      // Upload the file to Firebase Storage
      const snapshot = await storageRef.put(file);
  
      // Get the download URL of the uploaded image
      const downloadURL = await snapshot.ref.getDownloadURL();
  
      const userRef = firestore.collection('users').doc(userId);
      await userRef.update({ profilePicture: downloadURL });
  
      return downloadURL;
    } catch (error) {
      console.error('Error uploading profile picture:', error);
      // Handle error here (e.g., show a notification to the user)
      return null;
    }
  };
//function to seed category data
// export const seedCategoriesData = async() => {
//     try {
//         const categoriesRef = firestore.collection(collectionNames.CATEGORIES);

//         const snapshot = await categoriesRef.get();
//         if (!snapshot.empty) {
//             console.log('Categories data already seeded in Firestore.');
//             return;
//         }

//         categories_db.forEach(async(category) => {
//             const { id, name, svg } = category;
//             await categoriesRef.doc(id.toString()).set({ name, svg });
//         });

//         console.log('Categories data seeded in Firestore.');
//     } catch (error) {
//         console.error('Error seeding categories data:', error);
//     }
// };

// Function to seed levels data into Firestore
// export const seedLevelsData = async () => {
//     try {
//       const levelsRef = firestore.collection(collectionNames.LEVELS);
  
//       // Check if the 'levels' collection is already populated
//       const snapshot = await levelsRef.get();
//       if (!snapshot.empty) {
//         console.log('Levels data already seeded in Firestore.');
//         return;
//       }
  
//       // If 'levels' collection is empty, add the dummy data
//       initialLevels.forEach(async (level) => {
//         const { name } = level;
//         await levelsRef.doc(levelNumber.toString()).set({ name });
//       });
  
//       console.log('Levels data seeded in Firestore.');
//     } catch (error) {
//       console.error('Error seeding levels data:', error);
//     }
//   };