import { auth, storage, setDoc, doc, firestore, uploadBytes, ref, getDownloadURL, updateDoc } from '@/utils/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider, signInAnonymously, signInWithEmailAndPassword } from 'firebase/auth';
import { getUserCountry } from '../ip/route';

const saveGoogleUserInfoToFirestore = async() => {
    const { uid, displayName, email, photoURL } = auth.currentUser;
    console.log("something happening")
    const res = await getUserCountry();
    try {
        await setDoc(doc(firestore, 'users', uid), {

            name: displayName,
            email: email,
            profilePicture: photoURL,
            country: res,

        }, { merge: true });
        // console.log(uid,displayName,email,photoURL,country)
    } catch (error) {
        console.error('Firestore Update Error:', error);
    }
};

export default async function signIn(method, email, password) {
    let result = null,
        error = null;
    try {
        if (method == 'firebase') {
            result = await signInWithEmailAndPassword(auth, email, password)

        }
        if (method == 'google') {
            console.log("i'm in google sign in auth")
            const googleAuth = new GoogleAuthProvider();
            console.log("google auth is ", googleAuth)
            result = await signInWithPopup(auth, googleAuth)
            saveGoogleUserInfoToFirestore();
        }
        if (method == 'anonymous') {
            result = signInAnonymously(auth).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
            }).then(() => {
                const { uid } = auth.currentUser;

            });
        }
        // result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}