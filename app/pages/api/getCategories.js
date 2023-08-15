import { auth, firestore, docs, query, collection, getDocs, getDoc, where } from '@/utils/firebase'
export async function getCategories() {
    try {
        const CategoriesRef = collection(firestore, 'categories')
        const CatSnapshot = await getDocs(CategoriesRef)

        const categoriesData = CatSnapshot.docs.map((doc) => doc.data());

        return categoriesData;
    } catch (error) {
        // Logging any errors that occur
        console.error(error);
        return []
    }
}
export default getCategories