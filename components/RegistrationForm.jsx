import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import signUp from '@/app/pages/api/auth/signup';
import { ReturnIcon } from '@/utils/icons';
import GetStarted from './GetStarted';
import { usePathname } from 'next/navigation';
const RegistrationForm = ({ route }) => {
    const [showGetStarted, setShowGetStarted] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [country, setCountry] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [countries, setCountries] = useState([]);
    const pathname = usePathname()
    useEffect(() => {
        fetchCountries();
    }, []);

    const fetchCountries = async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            const countryList = data.map((countryData) => ({
                name: countryData.name.common,
            }));
            const sortedCountries = countryList.sort((a, b) =>
                a.name.localeCompare(b.name)
            );
            setCountries(sortedCountries);
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file);
        }
    };

    const handleForm = async (event) => {
        event.preventDefault();

        const { result, error } = await signUp(
            email,
            password,
            name,
            country,
            username,
            selectedImage
        );

        if (error) {
            console.log(error);
        } else {
            if (pathname == '/') {
                return  route.push('/pages/home');
               }
        }
    };

    const handleReturnClick = () => {
        setShowGetStarted(true);
    };

    if (showGetStarted) {
        return <GetStarted routers={route} />;
    }

    return (
        <div className="w-full">
            <div className="ml-8 mb-4 flex flex-row justify-between items-center md:pr-12">
                <div className="flex flex-row items-center h-full justify-start">
                    <div>
                        <Image
                            src="/assets/icons/logos.png"
                            alt="icon image"
                            width={70}
                            height={40}
                        />
                    </div>
                    <div>
                        <p className="text-primary font-bold">Course Worm</p>
                    </div>
                </div>
                <div>
                    <button
                        className="text-sm font-medium items-center justify-center m-auto text-gray-400 hover:bg-gray-100 hover:text-primary"
                        onClick={handleReturnClick}
                    >
                        <ReturnIcon />
                        Go Back
                    </button>
                </div>
            </div>
            <div className="m-12 rounded-lg dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div>
                    <form className="pl-0" onSubmit={handleForm}>
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block mb-2 ml-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Name"
                                required
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        {countries.length > 0 && (
                            <div className="mb-4">
                                <label
                                    htmlFor="country"
                                    className="block mb-2 ml-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Country
                                </label>
                                <select
                                    name="country"
                                    id="country"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    required
                                >
                                    <option value="">Select a country</option>
                                    {countries.map((countryData, index) => (
                                        <option key={index} value={countryData.name}>
                                            {countryData.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block mb-2 ml-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                E-mail
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="image"
                                className="block mb-2 ml-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Profile Photo
                            </label>
                            <input
                                type="file"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={handleImageChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="username"
                                className="block mb-2 ml-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Username"
                                required
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block mb-2 ml-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <button className="blue_btn m-2 py-1" type="submit">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;

