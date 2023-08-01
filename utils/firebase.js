import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, updateDoc, getDoc, setDoc, doc, where, query } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyD5lj9ewEDXPdlBzmYg2iKGuDdUUgBfQhs",
    authDomain: "courseworm-db.firebaseapp.com",
    projectId: "courseworm-db",
    storageBucket: "courseworm-db.appspot.com",
    messagingSenderId: "505892948153",
    appId: "1:505892948153:web:054484892919f9bef03368",
    measurementId: "G-L5DPNNP0WN"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
let analytics = null;
if (typeof window !== "undefined" && isSupported()) {
    analytics = getAnalytics(app);
}
const storage = getStorage(app);
const auth = getAuth();

export { auth, setDoc, app, analytics, firestore, storage, collection, getDocs, addDoc, getDoc, updateDoc, doc, ref, uploadBytes, query, where, getDownloadURL };