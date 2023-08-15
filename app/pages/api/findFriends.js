import { firestore, doc, docs, query, collection, getDoc, getDocs, where } from '@/utils/firebase'

async function findFriends(user) {
    let res = []
    const users = collection(firestore, 'users')
    const userSnapshot = await getDoc(doc(firestore, 'users', user.user.uid))
    const userData = userSnapshot.data();
    if (userData.country && userData.country.trim() !== '') {
        const friendsSnapshot = await getDocs(query(users, where('country', '==', userData.country)))
        const friendsData = friendsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        const filteredFriendsData = friendsData.filter((friend) => friend.id !== user.user.uid);
        res = filteredFriendsData
    }
    if (userData.coursesWatched && userData.coursesWatched.length > 0) {
        const friendsSameInterestSnapshot = await getDocs(query(users, where('coursesWatched', 'array-contains-any', userData.coursesWatched)))
        const friendData = friendsSameInterestSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        const filteredFriendData = friendsSameInterestSnapshot.filter(() => friendData.id !== user.user.uid);

        res = [...res, filteredFriendData]
    }
    console.log("the result is : :", res)
    return res

}
export default findFriends