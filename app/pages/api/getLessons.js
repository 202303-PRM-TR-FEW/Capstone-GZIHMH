import { auth, firestore, docs, query, collection, getDocs, getDoc } from '@/utils/firebase'
import getSearchResults from './getSearchResults'
import getUser from './getUser'
export async function getLessons(isanon, id) {
    try {
        console.log("im in get lessons function the id is: ", id)
        const lessonsRef = collection(firestore, 'Lessons')
        const lessonsSnapshot = await getDocs(lessonsRef, where('courseId.id', '==', id))

        const lessonsData = lessonsSnapshot.docs.map((doc) => doc.data());
        console.log("I'm in get lessons function the lesson data is : ", lessonsData)

        return lessonsData;
    } catch (error) {
        // Logging any errors that occur
        console.error(error);
        return []
    }
}
export default getLessons