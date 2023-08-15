import { auth, firestore, doc, query, collection, getDocs, getDoc, } from '@/utils/firebase'
import getSearchResults from './getSearchResults'
import getUser from './getUser'
import isCourseSaved from './isCourseSaved'
export async function getCourses(user) {
    try {
        if (user) {
            const result = []

            const coursesRef = collection(firestore, 'courses')
            const coursesSnapshot = await getDocs(coursesRef)
            if (!user.user.isAnonymous) {
                const { uid } = auth.currentUser
                const userDocRef = doc(firestore, 'users', uid)

                const userSnap = await getDoc(userDocRef)
                if ('wordsSearched' in userSnap.data()) {
                    const cats = userSnap.data().wordsSearched
                    if (cats) {
                        await Promise.all(
                            cats.map(async string => {
                                const res = await getSearchResults(string, user)
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
                    const isSavedData = await isCourseSaved(user, doc.id)
                    return {...courseData, tutor: tutorData, id: doc.id, isSaved: isSavedData };
                })
            );

            return coursesData;
        }

    } catch (error) {
        // Logging any errors that occur
        console.error(error);
        return []
    }
}
export default getCourses