import { firestore, collection, doc, getDocs } from '@/utils/firebase'

export async function getAchievements() {
    const achDocRef = collection(firestore, 'achievements');
    const achSnap = await getDocs(achDocRef);
    const achData = achSnap.docs.map((doc) => doc.data());
    return achData
}
export default getAchievements