import { auth, firestore, doc, query, collection, getDocs, getDoc, where } from '@/utils/firebase'


const applyFilters = async(results, levelFilter, ratingFilter) => {

    let filteredResults = [...results];
    if (levelFilter.length >= 1) {
        const levelsRef = collection(firestore, 'levels')
        const levelQuerySnapshot = await getDocs(query(levelsRef, where('name', 'in', levelFilter)));
        const levelRefs = levelQuerySnapshot.docs.map(doc => doc.ref);
        const levelIds = levelRefs.map(ref => ref.id);
        filteredResults = filteredResults.filter(result => levelIds.includes(result.level.id));
    }

    if (ratingFilter) {
        filteredResults = filteredResults.filter(result => result.rate >= ratingFilter);
    }

    return filteredResults;
};

export default applyFilters