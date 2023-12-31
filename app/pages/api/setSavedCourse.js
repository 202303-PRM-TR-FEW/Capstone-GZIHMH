import React from 'react'
import{auth, firestore,setDoc,collection,arrayUnion, doc,getDoc,where, arrayRemove,updateDoc,query} from '@/utils/firebase'
const setSavedCourse = async (user,courseId) => {
    if (user.user.isAnonymous) {
        return ''
    }
    else {
        const courseSnapshot = await getDoc(doc(firestore, 'courses', courseId))
        const courseRef = courseSnapshot.ref
        try {
            const userSnapshot = await getDoc(doc(firestore, 'users', user.user.uid))
            const userRef = userSnapshot.ref
            const userData = userSnapshot.data()
            const exists = userData.savedCourses.some(savedCourseRef => savedCourseRef.path === courseRef.path);

            if (exists)
            {
                await updateDoc(userRef, {
                    savedCourses:arrayRemove(courseRef)
        
                }, { merge: true })
                return ''
                }
            else {
                await updateDoc(userRef, {
                    savedCourses:arrayUnion(courseRef)
        
                }, { merge: true })
            }
            
        return '#0000FF'

        }
        
        catch (error) {
            console.log('An error occurred while saving the course')
            console.log(error)
        return '';
      }
    }
    
}

export default setSavedCourse