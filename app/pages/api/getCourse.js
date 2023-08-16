import { auth, firestore, doc, query, collection, getDocs, getDoc, where } from '@/utils/firebase'
import getUser from './getUser'

export async function getCourse(user, courseId) {
    try {
        const courseDocRef = doc(firestore, 'courses', courseId);
        const courseSnap = await getDoc(courseDocRef);

        if (!courseSnap.exists()) {
            console.log("Course does not exist");
            return null;
        }

        const courseData = courseSnap.data();
        const tutorData = await getUser(courseData.tutorId.id);

        return {...courseData, tutor: tutorData, id: courseSnap.id };
    } catch (error) {
        // Logging any errors that occur
        console.error(error);
        return null;
    }
}

export default getCourse;