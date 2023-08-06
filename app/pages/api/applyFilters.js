import { auth, firestore, doc, query, collection, getDocs, getDoc, where } from '@/utils/firebase'


const applyFilters = async(results, levelFilter, ratingFilter) => {

    let filteredResults = [...results];
    console.log("filtered results at the beginning is :", filteredResults)
    if (levelFilter.length >= 1) {
        console.log("im level filter the filtered levels are: ", levelFilter)
        const levelsRef = collection(firestore, 'levels')
        const levelQuerySnapshot = await getDocs(query(levelsRef, where('name', 'in', levelFilter)));
        console.log("the levelQuerySnapshot is : ", levelQuerySnapshot)
        const levelRefs = levelQuerySnapshot.docs.map(doc => doc.ref);
        const levelIds = levelRefs.map(ref => ref.id);
        console.log("fucking levelRefs id  are :", levelIds)
        console.log("fucking Filtered Results levels id is are: ", filteredResults[0].level.id)
        filteredResults = filteredResults.filter(result => levelIds.includes(result.level.id));
        console.log("this is filtered results: ", filteredResults)
    }

    if (ratingFilter) {
        console.log('filtered results are : ', filteredResults)
        filteredResults = filteredResults.filter(result => result.rate >= ratingFilter);
    }

    return filteredResults;
};

export default applyFilters