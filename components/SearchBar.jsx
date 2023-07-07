import React from 'react'

const SearchBar = () => {

    return (
        <section className='searchbar my-5'>

            <form className='relative w-1/2 flex flex-center flex-row'>
                <input
                    type='text'
                    placeholder='Search categories'
                    // value={searchText}
                    // onChange={ }
                    required
                    className='search_input peer'
                />
                <button type='button' className='blue_btn ml-4'>
                    SEARCH
                </button>
            </form>
        </section>
    )
}

export default SearchBar