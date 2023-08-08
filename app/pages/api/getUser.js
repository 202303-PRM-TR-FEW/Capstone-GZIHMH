import { firestore, doc, getDoc } from '@/utils/firebase'

export async function getUser(tutorId) {
    const tutorDocRef = doc(firestore, 'users', tutorId);
    const tutorSnap = await getDoc(tutorDocRef);
    return tutorSnap.data();
}
export default getUser