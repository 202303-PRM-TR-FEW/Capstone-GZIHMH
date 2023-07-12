// Importing necessary libraries
import axios from 'axios';

// This is an async function to fetch data from an API
export async function getCourses() {
    try {
        // Making a GET request to the API
        const response = await axios.get('https://api.openlearning.com/v2.1/courses/?page=1&itemsPerPage=4&featured=true&api_key=64a9f7d27488b60ccc39b019.533855f831ef6aa417eedadf2a46a297414455f876dd28b69a924248135dee91');

        // Returning the data from the response
        return response.data;
    } catch (error) {
        // Logging any errors that occur
        console.error(error);
    }
}
export default getCourses