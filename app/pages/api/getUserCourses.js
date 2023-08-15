import React from 'react';
import { auth, firestore, setDoc, collection, arrayUnion, doc, getDoc, where, arrayRemove, updateDoc, query } from '@/utils/firebase';
import isCourseSaved from './isCourseSaved';
import getUser from './getUser';

const getUserCourses = async(user) => {
    if (user.user.isAnonymous) {
        return [];
    } else {
        const userSnapshot = await getDoc(doc(firestore, 'users', user.user.uid));

        if (!userSnapshot.exists()) {
            return [];
        }

        const userRef = userSnapshot.ref;
        const coursesRefs = userSnapshot.data().savedCourses || [];

        const coursesDocs = await Promise.all(
            coursesRefs.map(async(courseRef) => {
                const courseDoc = await getDoc(courseRef);

                if (!courseDoc.exists()) {
                    return null; // Handle the case where the course document doesn't exist
                }

                const courseData = courseDoc.data();
                const isSavedData = await isCourseSaved(user, courseDoc.id);
                const tutorData = await getUser(courseData.tutorId.id);
                return {...courseData, isSaved: isSavedData, tutor: tutorData, id: courseDoc.id };
            })
        );

        return coursesDocs.filter(course => course !== null); // Remove any null entries
    }
};

export default getUserCourses;