import axios from "axios";


const getUserCountry = async() => {
    try {
        const response = await axios.get(`https://ipapi.co/json/`);
        const country = response.data.country_name;
        return country || '';
    } catch (error) {
        console.error('Error fetching user country:', error);
        return '';
    }
};
export { getUserCountry }