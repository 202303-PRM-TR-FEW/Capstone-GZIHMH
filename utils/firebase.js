import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAr8iNIypfJHwu8ZJ-w4S0IBpQFbfMLlPE",
    authDomain: "courseworm.firebaseapp.com",
    projectId: "courseworm",
    storageBucket: "courseworm.appspot.com",
    messagingSenderId: "373313883505",
    appId: "1:373313883505:web:e6416005c86fb69fc8bad0",
    measurementId: "G-HLD6Z8HTQT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);