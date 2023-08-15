import { auth, firestore, docs, query, collection, getDocs, getDoc, where } from '@/utils/firebase'
import getSearchResults from './getSearchResults'
import getUser from './getUser'
export async function getLessons(isanon, id) {
    try {
        const lessonsRef = collection(firestore, 'Lessons')
        const lessonsSnapshot = await getDocs(lessonsRef, where('courseId.id', '==', id))

        const lessonsData = lessonsSnapshot.docs.map((doc) => doc.data());

        return lessonsData;
    } catch (error) {
        // Logging any errors that occur
        console.error(error);
        return []
    }
}
export default getLessons