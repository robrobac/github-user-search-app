import React, { useState } from 'react'

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
    <div>
        <form onSubmit={handleFormSubmit}>
            <input
            value={inputValue}
            type='text'
            placeholder='Search Username'
            onChange={handleInputChange}
            autoFocus/>
            <button>Search</button>
        </form>
    </div>
  )
}

export default SearchForm
