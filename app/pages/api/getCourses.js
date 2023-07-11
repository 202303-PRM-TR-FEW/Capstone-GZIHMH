import axios from 'axios';

export async function getCourses() {
    try {
        const response = await axios.get('https://api.openlearning.com/v2.1/courses/?page=1&itemsPerPage=4&featured=true&api_key=64a9f7d27488b60ccc39b019.533855f831ef6aa417eedadf2a46a297414455f876dd28b69a924248135dee91');

        return response.data;
    } catch (error) {
        console.error(error);
    }
}
