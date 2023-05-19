import React, { useState } from 'react'
import './SearchForm.scss';

import SearchIcon from '@mui/icons-material/Search';

function SearchForm({onSubmit}) {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
        console.log(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(inputValue);
        setInputValue("");
    }

  return (
    <div className='searchForm'>
        <form onSubmit={handleFormSubmit}>
            
            <label>
            <SearchIcon className='searchIcon'/>
            <input
            value={inputValue}
            type='text'
            placeholder='Search Username and press enter'
            onChange={handleInputChange}
            autoFocus/>
            </label>
        </form>
    </div>
  )
}

export default SearchForm
