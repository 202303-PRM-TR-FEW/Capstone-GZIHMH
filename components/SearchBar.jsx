'use client'
import { React, useState } from 'react'

const SearchBar = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        onSearch(searchText);
    };
    return (
        <section className='searchbar my-5'>

            <form className='relative md:w-1/2 flex flex-center flex-row'>
                <input
                    type='text'
                    placeholder='Search categories'
                    value={searchText}
                    onChange={e=>setSearchText(e.target.value)}
                    required
                    className='search_input peer'
                />
                <button type='button' className='blue_btn ml-4' onClick={handleSearch}>
                    SEARCH
                </button>
            </form>
        </section>
    )
}

export default SearchBar