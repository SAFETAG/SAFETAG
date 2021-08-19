import React, { useState } from 'react'
import { navigate } from 'gatsby';

function SearchBox () {
  const [ searchQuery, setSearchQuery ] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    navigate("/search/", { state: { searchQuery: searchQuery }})
  }

  return (
      <form onSubmit={handleSubmit}>
        <input type="text"
          placeholder="Search..."
          value={searchQuery ? searchQuery : ''}
          onChange={() => setSearchQuery(event.target.value)}/>
      </form>
  )
}

export default SearchBox
