

import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signInWithPopup, GoogleAuthProvider,signInAnonymously ,signInWithEmailAndPassword  } from 'firebase/auth';
import{firestore,auth,doc,setDoc,getDoc,signInWithFirestore} from '@/utils/firebase';
import {app} from '@/utils/firebase';

let isAnon = false;
const handler = NextAuth({
  
  callbacks: {
  //     async signIn({ account, password, email, credentials }) {
  //     try {
  //       if (account.provider === 'firebase') {  
  //         // Email/password sign in
  //       await signInWithFirestore(email, password)
           
  //       } 
  //       if (account.provider === 'google') {
  //         isAnon = false;

  //         const result = await signInWithPopup(auth, googleAuth)
  //         saveGoogleUserInfoToFirestore();
  //         const { uid } = auth.currentUser;
  //         localStorage.setItem('uid', uid);
  //       } 
  //      if (account.provider === 'anonymous') {
  //       isAnon = true;
  //       const result  = signInAnonymously(auth).catch(function(error) {
  //         var errorCode = error.code;
  //         var errorMessage = error.message;
  //       }).then(() => {
  //         const { uid } = auth.currentUser;
  //         localStorage.setItem('uid', uid);
  //         routers.push('/pages/home')
  //       });      
  //    }   

  //       // If not, create a new document and save user in Firebase Firestore
        

  //       return true;
  //     } catch (error) {
  //       console.log("Error checking if user exists: ", error.message);
  //       return false;
  //     }
  //   },
  //   async session({ session, token }) {
  //     try {
  //       const userDoc = await getUser(token.email)
  //       session.user.id = userDoc.id
  //       return { ok: true, session }      
  //     } catch (err) {
  //       return { ok: false, err }
  //     }   
  //   },   
  //   async signOut({session}) {
  //      try {
  //        await auth.signOut()  
  //      } catch (err) {
  //        return { ok: false, err }
  //      }  
  //   }  
  }
});

// API route for signing out 
// export const config = {
//   api: {
//     bodyParser: false, 
//   },
// }

// export async function signOutAPI(req, res) {   
//   // Call NextAuth signOut callback 
//   await NextAuth.callbacks.signOut();
    
//   res.end('Signed out!');     
// }
export default handler;
