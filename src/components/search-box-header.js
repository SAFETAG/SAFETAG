import React, { useState, useRef } from 'react'
import { useI18next } from 'gatsby-plugin-react-i18next';

function SearchBox () {
  const [ searchQuery, setSearchQuery ] = useState('')
  const [ isOpened, setIsOpened ] = useState(false)
  const searchInput = useRef(null)
  const { navigate } = useI18next()

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
