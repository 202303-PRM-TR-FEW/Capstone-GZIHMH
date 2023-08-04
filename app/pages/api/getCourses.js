import { auth, firestore, doc, query, collection, getDocs, getDoc } from '@/utils/firebase'
export async function getCourses() {
    try {
        coursesRef = collection(firestore, 'courses')
        coursesSnapshot = await getDocs(coursesRef)
        const courses = coursesSnapshot.docs.map((doc) => doc.data());
        return courses
    } catch (error) {
        // Logging any errors that occur
        console.error(error);
    }
}
export default getCourses