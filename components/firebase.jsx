
import { initializeApp } from "firebase/app";
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAkPNEQPMZ1Xt5VJl_i8pizrrkieWe3hq0",
    authDomain: "nextjs-firebase-authen.firebaseapp.com",
    projectId: "nextjs-firebase-authen",
    storageBucket: "nextjs-firebase-authen.appspot.com",
    messagingSenderId: "996858360814",
    appId: "1:996858360814:web:ce77b48f5c7e717b48d4ff"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

const app = initializeApp(firebaseConfig);


export const auth = firebase.auth();
