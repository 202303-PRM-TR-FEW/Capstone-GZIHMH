import React from 'react'

const SearchBar = () => {

    return (
        <section className='searchbar'>

            <form className='relative w-full flex flex-center flex-row'>
                <input
                    type='text'
                    placeholder='Search categories'
                    // value={searchText}
                    // onChange={ }
                    required
                    className='search_input peer'
                />
                <button type='button' className='blue_btn '>
                    SEARCH
                </button>
            </form>
        </section>
    )
}

export default SearchBar