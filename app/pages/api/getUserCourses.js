import React from 'react'
import { auth, firestore, setDoc, collection, arrayUnion, doc, getDoc, where, arrayRemove, updateDoc, query } from '@/utils/firebase'
import isCourseSaved from './isCourseSaved'
import getUser from './getUser'
const getUserCourses = async(user) => {
    if (user.user.isAnonymous) {
        return ''
    } else {
        const userSnapshot = await getDoc(doc(firestore, 'users', user.user.uid))
        const userRef = userSnapshot.ref
        const coursesRefs = userSnapshot.data().savedCourses
        const coursesDocs = await Promise.all(
            coursesRefs.map(async(courseRef) => {
                const courseDoc = await getDoc(courseRef);
                if (courseDoc.exists()) {
                    const courseData = courseDoc.data();
                    const isSavedData = await isCourseSaved(user, courseDoc.id)
                    const tutorData = await getUser(courseData.tutorId.id);
                    return {...courseData, isSaved: isSavedData, tutor: tutorData, id: courseDoc.id }


                } else {
                    return null; // Handle the case where the course document doesn't exist
                }
            })
        )
        return coursesDocs

    }

}

export default getUserCourses