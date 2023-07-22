

import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

import firebaseConfig from 'path/to/firebaseConfig'; // Path to your Firebase configuration

initializeApp(firebaseConfig);

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  callbacks: {
    async session({ session }) {
      // Retrieve the user id from Firebase Firestore
      const firestore = getFirestore();
      const userDoc = await getDoc(doc(firestore, 'users', session.user.email));
      session.user.id = userDoc.data().id.toString();

      return session;
    },
    async signIn({ account, profile, email, credentials }) {
      try {
        const auth = getAuth();

        // Sign in with Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, credentials);

        // Check if the user document already exists in Firebase Firestore
        const firestore = getFirestore();
        const userDoc = await getDoc(doc(firestore, 'users', profile.email));

        // If not, create a new document and save user in Firebase Firestore
        if (!userDoc.exists()) {
          await setDoc(doc(firestore, 'users', profile.email), {
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
            id: userCredential.user.uid,
          });
        }

        return true;
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false;
      }
    },
  }
});

export default handler;