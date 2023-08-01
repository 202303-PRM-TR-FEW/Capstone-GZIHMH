import { auth, storage, setDoc, doc, firestore, uploadBytes, ref, getDownloadURL, updateDoc } from '@/utils/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRef } from 'react';



export default async function signUp(email, password, name, country, username, file) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
        const { uid } = auth.currentUser
        const storageRef = ref(storage, 'profile-pictures/' + file.name);
        const snapshot = await uploadBytes(storageRef, file)
        console.log(storageRef)

        const profilePictureUrl = await getDownloadURL(storageRef);
        console.log(profilePictureUrl)
        const userRef = doc(firestore, 'users', uid)

        await setDoc(userRef, {

            name: name,
            email: email,
            country: country,
            username: username,
            password: password

        }, { merge: true });
        await updateDoc(userRef, { profilePicture: profilePictureUrl })

    } catch (e) {
        error = e;
    }

    return { result, error };
}