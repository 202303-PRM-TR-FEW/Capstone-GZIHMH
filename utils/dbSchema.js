import { storage, firestore, collection, addDoc, where, query, updateDoc, ref, uploadBytes, doc, getDownloadURL, getDoc, getDocs } from './firebase.js';
import categories_db from './categories_db.js';

// const fs = require('fs');
// import imageFile from '../public/assets/images/michaelnuendorff.jpeg';
// import thumb from '../public/assets/images/thumbnailsales.jpeg';
// const imageFile = require('../public/assets/images/michaelnuendorff.jpeg');
// const thumb = require('../public/assets/images/thumbnailsales.jpeg')
// const imageFileBuffer = fs.readFileSync('../public/assets/images/michaelnuendorff.jpeg');
// const thumbBuffer = fs.readFileSync('../public/assets/images/thumbnailsales.jpeg');
// const imageFile = new Blob([imageFileBuffer], { type: 'image/jpeg' });
// const thumb = new Blob([thumbBuffer], { type: 'image/jpeg' });
const collectionNames = {
    USERS: 'users',
    COURSES: 'courses',
    CATEGORIES: 'categories',
    LESSONS: 'lessons',
    ACHIEVEMENTS: 'achievements',
    LEVELS: 'levels',
    TUTOR_DETAILS: 'tutor-details',
};
const initialAchievements = [
    { name: 'Commited Learner', description: 'Reach a 3 day streak', totalscore: 3, pointValue: 1, svg: `(<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hourglass-low" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fb923c" fill="none" strokeLinecap="round" strokeLinejoin="round" > <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path fill="#fb923c" d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" /> <path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z" /> </svg>)` },
    { name: 'Point Collector', description: 'Earn 3000 points', totalscore: 3000, pointValue: 1, svg: `(<svg fill="#84cc16" width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon line-color" stroke="#84cc16"> <g id="SVGRepo_bgCarrier" strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.048"></g> <g id="SVGRepo_iconCarrier"> <path id="secondary" d="M17.17,5H20a1,1,0,0,1,1,1V7a4,4,0,0,1-4,4h0" fill="none" stroke="#84cc16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.128" /> <path id="secondary-2" data-name="secondary" d="M6.74,5H4A1,1,0,0,0,3,6V7a4,4,0,0,0,4,4H7" fill="none" stroke="#84cc16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.128" /> <path id="primary" d="M8,21h8M7,9.57a6.78,6.78,0,0,0,4.26,6.29h0a2,2,0,0,0,1.48,0h0A6.78,6.78,0,0,0,17,9.57V3H7Zm5,6.61V21" fill="#84cc16" stroke="#84cc16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.128" /> </g> </svg> )`, },
    { name: 'Knowledge Trailblazer', description: 'Watch 10 videos in a row', totalscore: 10, pointValue: 2, svg: ` ( <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#0284c7"> <g> <rect fill="none" height="24" width="24" /> </g> <g> <path d="M23,12l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,12l2.44,2.79l-0.34,3.7 l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,12z M10.09,16.72l-3.8-3.81l1.48-1.48l2.32,2.33 l5.85-5.87l1.48,1.48L10.09,16.72z" /> </g> </svg> )`, },
    { name: 'Lifelong Learner', description: 'Achieve a 30-day streak of daily video learning', totalscore: 30, pointValue: 3, svg: `( <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#f97316" fill="none" strokeLinecap="round" strokeLinejoin="round" > <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /> <line x1="16" y1="2" x2="16" y2="6" /> <line x1="8" y1="2" x2="8" y2="6" /> <line x1="3" y1="10" x2="21" y2="10" /> </svg> )`, },
    { name: 'Master of Curiosity', description: 'Watch 50 videos on different topics', totalscore: 50, pointValue: 5, svg: ` ( <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#0284c7" viewBox="0 0 24 24"> <rect fill="none" height="24" width="24" /> <g> <path d="M19.88,18.47c0.44-0.7,0.7-1.51,0.7-2.39c0-2.49-2.01-4.5-4.5-4.5s-4.5,2.01-4.5,4.5s2.01,4.5,4.49,4.5c0.88,0,1.7-0.26,2.39-0.7L21.58,23L23,21.58L19.88,18.47z M16.08,18.58c-1.38,0-2.5-1.12-2.5-2.5c0-1.38,1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5C18.58,17.46,17.46,18.58,16.08,18.58z M15.72,10.08c-0.74,0.02-1.45,0.18-2.1,0.45l-0.55-0.83l-3.8,6.18l-3.01-3.52l-3.63,5.81L1,17l5-8l3,3.5L13,6C13,6,15.72,10.08,15.72,10.08z M18.31,10.58c-0.64-0.28-1.33-0.45-2.05-0.49c0,0,5.12-8.09,5.12-8.09L23,3.18L18.31,10.58z" /> </g> </svg> )`, },
    { name: 'Dedicated Scholar', description: 'Complete 100 video lessons in your learning journey', totalscore: 100, pointValue: 10, svg: ` ( <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-award" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fb923c" fill="none" strokeLinecap="round" strokeLinejoin="round" > <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <circle cx="12" cy="8" r="7" /> <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /> </svg> )`, },
    { name: 'Perpetual Progress', description: 'Achieve a 100-day streak of daily video learning', totalscore: 100, pointValue: 15, svg: `( <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sun" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fb923c" fill="none" strokeLinecap="round" strokeLinejoin="round" > <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <circle cx="12" cy="12" r="5" /> <line x1="12" y1="1" x2="12" y2="3" /> <line x1="12" y1="21" x2="12" y2="23" /> <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /> <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /> <line x1="1" y1="12" x2="3" y2="12" /> <line x1="21" y1="12" x2="23" y2="12" /> <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /> <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /> </svg> )`, },
    { name: 'Video Virtuoso', description: 'Watch 500 videos and absorb a wealth of knowledge', totalscore: 500, pointValue: 20, svg: ` ( <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="#0284c7" > <path d="M0 0h24v24H0z" fill="none" /> <path d="M18 4l2 3h-3l-2-3h-2l2 3h-3l-2-3H8l2 3H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4zm-6.75 11.25L10 18l-1.25-2.75L6 14l2.75-1.25L10 10l1.25 2.75L14 14l-2.75 1.25zm5.69-3.31L16 14l-.94-2.06L13 11l2.06-.94L16 8l.94 2.06L19 11l-2.06.94z" /> </svg> )`, },
    { name: 'Eager Explorer', description: 'Explore 10 different subject categories through video learning', totalscore: 10, pointValue: 3, svg: ` ( <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fb923c" fill="none" strokeLinecap="round" strokeLinejoin="round" > <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <circle cx="12" cy="12" r="10" /> <polygon points="16.74 8.52 15 3 9 3 7.26 8.52 12 14 16.74 8.52" /> </svg> )`, },
    { name: 'Champion of Learning', description: 'Achieve a 365-day streak, showcasing a year of continuous learning dedication', totalscore: 365, pointValue: 25, svg: ` ( <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-crown" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fb923c" fill="none" strokeLinecap="round" strokeLinejoin="round" > <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M12 4v-1" /> <path d="M8 8v-1a4 4 0 0 1 8 0v1" /> <path d="M16 8v-1" /> <path d="M12 4c1.657 0 3 1.337 3 3s-1.343 3-3 3-3 -1.337-3 -3 1.343-3 3 -3zm0 0v1m0 0v1" /> <path d="M12 18.01l-3 -3.01l3 -3l3 3.01l-3 3z" /> </svg> )`, },
    { name: 'Enlightened Visionary', description: 'Reach the highest level of achievement with 1,500 videos watched', totalscore: 1500, pointValue: 30, svg: `( <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-target" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fb923c" fill="none" strokeLinecap="round" strokeLinejoin="round" > <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <circle cx="12" cy="12" r="10" /> <circle cx="12" cy="12" r="6" /> <circle cx="12" cy="12" r="2" /> </svg> )`, },
];

const initialLevels = [
    { name: 'Beginner' },
    { name: 'Intermediate' },
    { name: 'Advanced' },
];
const initialUsers = [{
    name: 'Michael Nuendorff',
    country: 'United States',
    email: 'michaelnuendorff@gmail.com',
    username: 'michaelnuendorff',
    profilePicture: '',
    coursesWatched: [],
    coursesSaved: [],
    friends: [],
    wordsSearched: [],
    isTutor: true,
}];
const initialTutorDetails = [{
    tutorId: '',
    experties: [],
    teachingExperience: '5 years',
    coursePublished: [],
}];

const initialCourses = [{
    title: 'Sales Training: Back to Basics',
    description: `This impactful selling course targets beginning or under-performing salespeople, providing them with the essential tools to reach higher levels of success. Key topics covered include:
    Understanding why certain salespeople excel while others struggle.
    Setting effective and achievable sales goals.
    Utilizing data-driven KPIs to drive sales performance.
    Creating actionable weekly plans for consistent progress.`,
    totalDuration: '01:51:26',
    rate: 3.5,
    tutorId: '',
    thumbnail: '',
    price: 50,
    productId: '',
    categories: [],
    level: '',

}, ];
const initialLessons = [{
        courseId: '',
        link: 'https://www.youtube.com/watch?v=MCpi7xZz8bg&list=PLCwOIOwZBb1gTXHXCnPTO2hPqljuROxgO&index=1&pp=iAQB',
        duration: '00:28:45', // Format: 'hh:mm:ss'
        linkTitle: 'Beginner Sales Training Part 1',
        linkSectionNumber: 1,
        linkSectionName: 'introduction',
        linkSubsectionNumber: 1,
    },
    {
        courseId: '',
        link: 'https://www.youtube.com/watch?v=8GNAYwOPbP4&list=PLCwOIOwZBb1gTXHXCnPTO2hPqljuROxgO&index=2&pp=iAQB',
        duration: '00:13:01', // Format: 'hh:mm:ss'
        linkTitle: 'Beginner Sales Training Part 2A',
        linkSectionNumber: 2,
        linkSectionName: 'It starts with goals ',
        linkSubsectionNumber: 1,
    },
    {
        courseId: '',
        link: 'https://www.youtube.com/watch?v=u-qOXACgdQ0&list=PLCwOIOwZBb1gTXHXCnPTO2hPqljuROxgO&index=3&pp=iAQB',
        duration: '00:34:58', // Format: 'hh:mm:ss'
        linkTitle: 'Beginner Sales Training Part 2B',
        linkSectionNumber: 2,
        linkSectionName: 'It starts with goals ',
        linkSubsectionNumber: 2,
    },
    {
        courseId: '',
        link: 'https://www.youtube.com/watch?v=lEn1txclNTU&list=PLCwOIOwZBb1gTXHXCnPTO2hPqljuROxgO&index=4&pp=iAQB',
        duration: '00:34:42', // Format: 'hh:mm:ss'
        linkTitle: 'Beginner Sales Training Part 3A',
        linkSectionNumber: 3,
        linkSectionName: 'Goals Get Done With Data (KPIs)',
        linkSubsectionNumber: 1,
    },


];
// Function to initialize the database schema (creating collections if needed)
const initializeDatabaseSchema = async() => {
    try {
        // Create the 'achievements' collection if it doesn't exist
        const achievementsRef = collection(firestore, collectionNames.ACHIEVEMENTS);
        await Promise.all(initialAchievements.map((achievement) => addDoc(achievementsRef, achievement)));

        // Create the 'levels' collection 
        const levelsRef = collection(firestore, collectionNames.LEVELS);
        await Promise.all(initialLevels.map((level) => addDoc(levelsRef, level)));
        // Create the 'categories' collection 
        const categoriesRef = collection(firestore, collectionNames.CATEGORIES);
        await Promise.all(categories_db.map((category) => addDoc(categoriesRef, category)));

        // Create the 'users' collection 
        const usersRef = collection(firestore, collectionNames.USERS);
        await Promise.all(initialUsers.map(async(user) => {
            const userDocRef = await addDoc(usersRef, user);

            const storageRef = ref(storage, `profile-pictures/michaelnuendorff.jpg`);
            const profilePictureUrl = await getDownloadURL(storageRef);

            await updateDoc(userDocRef, { profilePicture: profilePictureUrl });


        }))



        // Create the 'courses' collection if it doesn't exist
        const coursesRef = collection(firestore, collectionNames.COURSES);
        await Promise.all(
            initialCourses.map(async(course) => {
                // Add the course to the 'courses' collection
                const courseDocRef = await addDoc(coursesRef, course);

                // Update the tutorId field of the course document
                const userQuerySnapshot = await getDocs(
                    query(usersRef, where('name', '==', 'Michael Nuendorff'))
                );
                const userRef = userQuerySnapshot.docs[0].ref;

                const tutorUserDoc = await getDoc(userRef);
                const userDocRef = tutorUserDoc.ref;
                await updateDoc(courseDocRef, { tutorId: userDocRef.id });

                // Add the thumbnail picture reference to the course document 
                const storageRef = ref(storage, `thumbnails/thumbnailsales.jpg`);
                const thumbnailUrl = await getDownloadURL(storageRef);

                await updateDoc(courseDocRef, { thumbnail: thumbnailUrl });

                // Add the "Beginner" level reference to the course document
                const levelQuerySnapshot = await getDocs(query(levelsRef, where('name', '==', 'Beginner')));
                const levelRef = levelQuerySnapshot.docs[0].ref;
                const courseLevelDoc = await getDoc(levelRef);
                const courseLevelDocRef = courseLevelDoc.ref;
                await updateDoc(courseDocRef, { level: courseLevelDocRef.id });

                // Add categories to the course document
                const categoryIds = [1, 6];
                const categoriesQuerySnapshot = await getDocs(query(categoriesRef, where('id', 'in', categoryIds)));
                const categoryDocs = categoriesQuerySnapshot.docs;

                const categoryReferences = categoryDocs.map((categoryDoc) => categoryDoc.ref);
                await updateDoc(courseDocRef, { categories: categoryReferences });



            })
        );

        // Create tutor details collection
        const tutorDetailsRef = collection(firestore, collectionNames.TUTOR_DETAILS);
        await Promise.all(initialTutorDetails.map(async(tutoDetail) => {
            const tutorDetailDocRef = await addDoc(tutorDetailsRef, tutoDetail);
            // Update tutorId field 
            const userQuerySnapshot = await getDocs(
                query(usersRef, where('name', '==', 'Michael Nuendorff'))
            );
            const userRef = userQuerySnapshot.docs[0].ref;

            const tutorUserDoc = await getDoc(userRef);
            const userDocRef = tutorUserDoc.ref;

            await updateDoc(tutorDetailDocRef, { tutorId: userDocRef.id });
            const categoryIds = [1, 6];
            const categoriesQuerySnapshot = await getDocs(query(categoriesRef, where('id', 'in', categoryIds)));
            const categoryDocs = categoriesQuerySnapshot.docs;

            const categoryReferences = categoryDocs.map((categoryDoc) => categoryDoc.ref);
            await updateDoc(tutorDetailDocRef, { experties: categoryReferences });


            const coursesQuerySnapshot = await getDocs(query(coursesRef, where('title', '==', 'Sales Training: Back to Basics')));
            const coursRef = coursesQuerySnapshot.docs[0].ref;
            const publishedcoursDoc = await getDoc(coursRef);
            const publishedcoursDocRef = publishedcoursDoc.ref;

            await updateDoc(tutorDetailDocRef, { coursePublished: publishedcoursDocRef.id });


        }))

        // Create the lessons collection if it doesn't exist
        const lessonsRef = collection(firestore, collectionNames.LESSONS);
        const coursRef = collection(firestore, collectionNames.COURSES);
        await Promise.all(initialLessons.map(async(lesson) => {
            const lessonsDocRef = await addDoc(lessonsRef, lesson);
            const courseQuerySnapshot = await getDocs(query(coursRef, where('title', '==', 'Sales Training: Back to Basics')));
            const courseRef = courseQuerySnapshot.docs[0].ref;
            const lessonCourseDoc = await getDoc(courseRef);
            const lessonCourseDocRef = lessonCourseDoc.ref;
            await updateDoc(lessonsDocRef, { courseId: lessonCourseDocRef.id });
        }));


        console.log('Database schema initialized!');
    } catch (error) {
        console.error('Error initializing database schema:', error);
    }
};
// const uploadImage = async(userId) => {
//     const storageRef = ref(storage, `profilepictures/${userId}.jpg`);
//     const snapshot = await uploadBytes(storageRef, '../public/assets/images/michaelnuendorff.jpeg');
//     const downloadURL = await getDownloadURL(snapshot.ref);
//     return downloadURL;
// }
// const uploadThumbnail = async(courseId, thumbs) => {

//     const thumbnailStorageRef = ref(storage, `thumbnails/${courseId}.jpg`);
//     const thumbSnapshot = await uploadBytes(thumbnailStorageRef, thumbs);
//     const thumbDownloadURL = await getDownloadURL(thumbSnapshot.ref);
//     return thumbDownloadURL;
// };
//   const fetchImageAsFile = async (imageUrl) => {
//     try {
//       const response = await fetch(imageUrl);
//       const blob = await response.blob();
//       const file = new File([blob], "profile_picture.jpg", { type: "image/jpeg" });
//       return file;
//     } catch (error) {
//       console.error('Error fetching image:', error);
//       return null;
//     }
//   };
// Function to handle profile picture upload
// const uploadProfilePicture = async (username, file) => {
//     try {
//         const id = getUserId(username)
//         const fileInput = document.querySelector('#profilePictureInput');
//         const inputFile = fileInput.files[0];
//       // Create a reference to the Firebase Storage location where the image will be stored
//       const storageRef = storage.ref(`profile_pictures/${id}`);

//       // Upload the file to Firebase Storage
//       const snapshot = await storageRef.put(file);

//       // Get the download URL of the uploaded image
//       const downloadURL = await snapshot.ref.getDownloadURL();

//       const userRef = firestore.collection('users').doc(userId);
//       await userRef.update({ profilePicture: downloadURL });

//       return downloadURL;
//     } catch (error) {
//       console.error('Error uploading profile picture:', error);
//       // Handle error here (e.g., show a notification to the user)
//       return null;
//     }
//   };

const getUserId = async(username) => {
    try {
        const usersRef = firestore.collection('users');
        const querySnapshot = await usersRef.where('username', '==', username).get();

        if (!querySnapshot.empty) {
            // Assuming there is only one user with the given username
            const userId = querySnapshot.docs[0].id;
            return userId;
        } else {
            console.log('User not found.');
            return null;
        }
    } catch (error) {
        console.error('Error getting user ID:', error);
        return null;
    }
};
// fetchImageAsFile('../public/assets/images/michaelnuendorff.jpg')
//   .then((imageFile) => {
//     if (imageFile) {
//       // Call the function to upload the profile picture
//       uploadProfilePicture('michaelnuendorff', imageFile)
//         .then((downloadURL) => {
//           if (downloadURL) {
//             console.log('Profile picture uploaded successfully:', downloadURL);
//           } else {
//             console.log('Failed to upload profile picture.');
//           }
//         })
//         .catch((error) => {
//           console.error('Error uploading profile picture:', error);
//         });
//     } else {
//       console.log('Failed to fetch image as File object.');
//     }
//   })
//   .catch((error) => {
//     console.error('Error fetching image:', error);
//   });


export default initializeDatabaseSchema;