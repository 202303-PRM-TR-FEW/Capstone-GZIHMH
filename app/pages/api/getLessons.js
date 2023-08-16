import { auth, firestore, docs, query, doc, collection, getDocs, getDoc, where } from '@/utils/firebase'
import getSearchResults from './getSearchResults'
import getUser from './getUser'
export async function getLessons(user, id) {
    try {
        const lessonsRef = collection(firestore, 'lessons')
        const lessonsSnapshot = await getDocs(query(lessonsRef, where('courseId', '==', id)))

        const lessonsData = lessonsSnapshot.docs.map((doc) => doc.data());

        return lessonsData;
    } catch (error) {
        // Logging any errors that occur
        console.error(error);
        return []
    }
}
export default getLessons