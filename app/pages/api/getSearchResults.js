import Fuse from 'fuse.js';
const API_URL = '';

const categoryKeywords = [

];

const fuseOptions = {
    includeScore: true,
    keys: ['name'],
};

const fuse = new Fuse(categoryKeywords.map((category) => ({ name: category })), fuseOptions);

export const getSearchResults = async(query) => {

    const searchResults = fuse.search(query);
    const matchedCategory = searchResults.length > 0 ? searchResults[0].item.name : '';
    const encodedCategory = ``;
    const queryString = ``;
    const url = API_URL + queryString;

    console.log(encodedCategory);

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log("getSearchResults function is working");
            console.log(data);
            return data;
        } else {
            throw new Error('Request failed with status ' + response.status);
        }
    } catch (error) {
        console.error('Error fetching courses:', error);
        throw error;
    }
};

export default getSearchResults;