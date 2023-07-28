import axios from "axios";


const getUserCountry = async(ip) => {
    try {
        const apiKey = process.env.IP_API_KEY
        const response = await axios.get(`https://ipapi.com/${ip}?access_key=${apiKey}`);
        const { country } = response.country_name;
        console.log("getusercountry worked ")
        console.log(country)
        return country || '';
    } catch (error) {
        console.error('Error fetching user country:', error);
        return '';
    }
};
export { getUserCountry }