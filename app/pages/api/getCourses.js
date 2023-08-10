import { auth, firestore, doc, query, collection, getDocs, getDoc, } from '@/utils/firebase'
import getSearchResults from './getSearchResults'
import getUser from './getUser'
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
            if ('wordsSearched' in userSnap.data()) {
                const cats = userSnap.data().wordsSearched
                if (cats) {
                    await Promise.all(
                        cats.map(async string => {
                            const res = await getSearchResults(string)
                            result.push(...res)
                        })
                    )
                    if (!result) {
                        return result

                    }

                }

            }
        }
        const coursesData = await Promise.all(
            coursesSnapshot.docs.map(async(doc) => {
                const courseData = doc.data();
                const tutorData = await getUser(courseData.tutorId.id);
                return {...courseData, tutor: tutorData, id: doc.id };
            })
        );
        console.log("courses data are: ", coursesData)

        return coursesData;
    } catch (error) {
        // Logging any errors that occur
        console.error(error);
        return []
    }
}
export default getCourses