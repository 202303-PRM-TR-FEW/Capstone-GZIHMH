import { firestore, doc, docs, query, collection, getDoc, getDocs, where } from '@/utils/firebase'
import getUser from './getUser'

async function getFriends(user) {
    const currentUser = await getUser(user.user.uid)
    if (currentUser && currentUser.following && currentUser.following.length > 0) {
        const friendsDataPromises = currentUser.following.map(async(reference) => {
            const friendSnapshot = await getDoc(doc(firestore, 'users', reference.id))
            return { id: reference.id, ...friendSnapshot.data() }
        })
        const friendsData = await Promise.all(friendsDataPromises);
        return friendsData
    } else {
        return [];
    }
}
export default getFriends