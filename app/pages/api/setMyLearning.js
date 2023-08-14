import React from 'react'
import { auth, firestore, setDoc, collection, arrayUnion, doc, getDoc, where, arrayRemove, updateDoc, query } from '@/utils/firebase'
import setSavedCourse from './setSavedCourse'
const setMyLearning = async(user, courseId) => {
    if (user.user.isAnonymous) {
        return ''
    } else {
        const courseSnapshot = await getDoc(doc(firestore, 'courses', courseId))
        const courseRef = courseSnapshot.ref
        try {
            const userSnapshot = await getDoc(doc(firestore, 'users', user.user.uid))
            const userRef = userSnapshot.ref



            await updateDoc(userRef, {
                courses: arrayUnion(courseRef)

            }, { merge: true })
            await setSavedCourse(user, courseId)


        } catch (error) {
            console.log('An error occurred while saving the course')
            console.log(error)
            return '';
        }
    }

}

export default setMyLearning