import { auth, firestore, doc, query, collection, getDocs, getDoc } from '@/utils/firebase'
import getSearchResults from './getSearchResults'

export async function getCourses(isanon) {
    try {
        const result = []

        const coursesRef = collection(firestore, 'courses')
        console.log("courseRef is ", coursesRef)
        const coursesSnapshot = await getDocs(coursesRef)
        if (!isanon) {
            const { uid } = auth.currentUser
            const userDocRef = doc(firestore, 'users', uid)

            const userSnap = await getDoc(userDocRef)

            const cats = userSnap.data().wordsSearched
            if (cats) {
                await Promise.all(
                    cats.map(async string => {
                        const res = await getSearchResults(string)
                        result.push(...res)
                    })
                )
                console.log("result of recommended is : ", result)

                return result

            }
        }
        const courses = coursesSnapshot.docs.map((doc) => doc.data());
        console.log(courses)
        return courses
    } catch (error) {
        // Logging any errors that occur
        console.error(error);
        return []
    }
}
export default getCourses