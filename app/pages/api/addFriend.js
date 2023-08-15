import { firestore, doc, updateDoc, arrayUnion, docs, query, collection, getDoc, getDocs, where } from '@/utils/firebase'

async function addFriend(user, userId) {
    const userSnapshot = await getDoc(doc(firestore, 'users', user.user.uid))
    const userRef = userSnapshot.ref
    const friendSnapshot = await getDoc(doc(firestore, 'users', userId))
    const friendRef = friendSnapshot.ref
    await updateDoc(userRef, {
        following: arrayUnion(friendRef)

    }, { merge: true })

}
export default addFriend