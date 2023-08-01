import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, updateDoc, getDoc, setDoc, doc, where, query } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
let analytics = null;
if (typeof window !== "undefined" && isSupported()) {
    analytics = getAnalytics(app);
}
const storage = getStorage(app);
const auth = getAuth();

// const signInWithFirestore = async(email, password) => {
//     try {
//         const userDocRef = doc(firestore, 'users', email);
//         const userDocSnap = await getDoc(userDocRef);

//         if (userDocSnap.exists()) {
//             const hash = userDocSnap.data().passwordHash;
//             // const passwordsMatch = await bcrypt.compare(password, hash);

//             // if (passwordsMatch) {
//             //     const token = await auth.createCustomToken(email);
//             //     await auth.signInWithCustomToken(token);
//             //     return true;
//             // }
//         }

//         return false;
//     } catch (error) {
//         console.error('Error signing in:', error.message);
//         return false;
//     }
// };

export { auth, setDoc, app, analytics, firestore, storage, collection, getDocs, addDoc, getDoc, updateDoc, doc, ref, uploadBytes, query, where, getDownloadURL };