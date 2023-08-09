

import {firestore, collection, getDocs, docs} from '@/utils/firebase'




Const getcategories = async ()=> {
    Const categories = collection(firestore,'caregories')
    Const snapshot = await getDocs(categories)
    Const catdata = snapshot.docs.map((doc) => doc.data() )
    return catdata
    }

    export default getCategories




    
