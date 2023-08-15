import Fuse from 'fuse.js';
import isCourseSaved from '@/app/pages/api/isCourseSaved';

import { auth, query, firestore, arrayUnion, getDocs, ref, updateDoc, doc, getDoc, collection, where } from '@/utils/firebase'
const API_URL = '';
let categories = []
const categoryKeywords = async() => {
    const categoryRef = collection(firestore, 'categories')
    const categorySnapshot = await getDocs(categoryRef)
    categories = categorySnapshot.docs.map((doc) => doc.data());
    return categories
}

const fuseOptions = {
    includeScore: true,
    keys: ['name'],
};

export const getSearchResults = async(querydata, user) => {

    if (categories.length === 0) {
        await categoryKeywords();
    }
    const fuse = new Fuse(categories.map((category) => ({ name: category.name })), fuseOptions);

    const lowercaseQuery = querydata;
    const searchResults = fuse.search(lowercaseQuery);
    const matchedCategory = searchResults.length > 0 ? searchResults[0].item.name : '';

    try {
        const coursesRef = collection(firestore, 'courses');
        const catRef = collection(firestore, 'categories');

        const categorySnapshot = await getDocs(query(catRef, where('name', '==', matchedCategory)));
        const categoryDoc = categorySnapshot.docs[0].ref;
        if (categoryDoc) {
            const coursesSnapshot = await getDocs(query(coursesRef, where('categories', 'array-contains', categoryDoc)));
            // const data = coursesSnapshot.docs.map((doc) => doc.data());
            const coursesRefs = coursesSnapshot.docs.map(doc => doc.ref);
            const coursesWithData = await Promise.all(
                coursesRefs.map(async courseRef => {
                    const courseDoc = await getDoc(courseRef);

                    if (!courseDoc.exists()) {
                        return null;
                    }

                    const courseData = courseDoc.data();
                    const isSavedData = await isCourseSaved(user, courseDoc.id);


                    const tutorRef = courseData.tutorId;
                    const tutorDoc = await getDoc(tutorRef);
                    const tutorData = tutorDoc.data();

                    return {
                        ...courseData,
                        isSaved: isSavedData,
                        tutor: tutorData,
                        id: courseDoc.id,
                    };
                })
            );
            if (!user.user.isAnonymous) {
                const { uid } = auth.currentUser
                const userRef = doc(firestore, 'users', uid)
                const userSnapshot = await getDoc(userRef)
                const userDocRef = userSnapshot.ref
                await updateDoc(userDocRef, {
                    wordsSearched: arrayUnion(matchedCategory)
                })
            }
            return coursesWithData;
        } else {
            throw new Error('Category not found');
        }
    } catch (error) {
        console.error('Error fetching courses:', error);
        throw error;
    }
};

export default getSearchResults;