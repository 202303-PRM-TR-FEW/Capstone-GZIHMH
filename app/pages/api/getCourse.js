import { auth, firestore, doc, query, collection, getDocs, getDoc } from '@/utils/firebase'
import getSearchResults from './getSearchResults'
import getUser from './getUser'
export async function getCourse(isanon, couseId) {
    try {
        const result = []

        const coursesRef = collection(firestore, 'courses')
        const courseSnapshot = await getDocs(query(coursesRef, where('id', '==', courseId)));

        course = courseSnapshot.docs.map((doc) => doc.data());
        if (isanon == false) {
            const { uid } = auth.currentUser
            const userDocRef = doc(firestore, 'users', uid)

            const userSnap = await getDoc(userDocRef)


        }

        const courseData = course.data();
        const tutorData = await getUser(courseData.tutorId.id);
        return {...courseData, tutor: tutorData, id: doc.id };

    } catch (error) {
        // Logging any errors that occur
        console.error(error);
        return []
    }
}
export default getCourse