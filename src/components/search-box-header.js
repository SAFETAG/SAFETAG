import React, { useState, useRef } from 'react'
import { navigate } from 'gatsby';

function SearchBox () {
  const [ searchQuery, setSearchQuery ] = useState('')
  const [ isOpened, setIsOpened ] = useState(false)
  const searchInput = useRef(null)

  function showInputBox() {
    setIsOpened(true)
  }

  function handleSubmit(event) {
    event.preventDefault()
    navigate("/search/", { state: { searchQuery: searchQuery }})
  }

  return (
    <div className="searchBoxHeader">
      <div className="boxTitle" onClick={showInputBox}
          style={{ display: isOpened ? "none" : "block" }}>
        Search
      </div>

      {isOpened && (
        <form onSubmit={handleSubmit}>
          <input type="text"
            style={{ display: isOpened ? "block" : "none" }}
            ref={searchInput}
            placeholder="Search..."
            value={searchQuery ? searchQuery : ''}
            onChange={() => setSearchQuery(event.target.value)}/>
        </form>
      )}
    </div>
  )
}

export default SearchBox
