import React from 'react'
import{auth, firestore,setDoc,collection,arrayUnion, doc,getDoc,where, arrayRemove,updateDoc,query} from '@/utils/firebase'
const setSavedCourse = async (user,courseId) => {
    if (user.user.isAnonymous) {
        return ''
    }
    else {
        const courseSnapshot = await getDoc(doc(firestore, 'courses', courseId))
        const courseRef = courseSnapshot.ref
        console.log("course ref in setsavedcourse:",courseRef)
        try {
            const userSnapshot = await getDoc(doc(firestore, 'users', user.user.uid))
            const userRef = userSnapshot.ref
            const userData = userSnapshot.data()
            console.log("the result of the userData is : ", userData)
            console.log("this is the users saved courses : ", userData.savedCourses)
            const exists = userData.savedCourses.some(savedCourseRef => savedCourseRef.path === courseRef.path);

            console.log("does is exist?", exists)
            if (exists)
            {
                console.log("this data is already in user document")
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