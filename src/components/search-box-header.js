import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';

import SearchIcon from "../../static/assets/search.svg"
import SearchIconWhite from "../../static/assets/search-white.svg"

function SearchBox ({ scrolled }) {
  const { navigate } = useI18next()
  const { t } = useTranslation('site', { useSuspense: false });
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
        <img src={ scrolled > 0 ? SearchIcon : SearchIconWhite}
             alt="Search" />
      </div>

      {isOpened && (
        <form onSubmit={handleSubmit}>
          <input className="search-header-input" type="text"
            style={{ display: isOpened ? "block" : "none" }}
            ref={searchInput}
            placeholder={t("search-placeholder", "Search...")}
            value={searchQuery ? searchQuery : ''}
            onChange={() => setSearchQuery(event.target.value)}/>
        </form>
      )}
    </div>
  )
}

export default SearchBox

SearchBox.propTypes = {
  scrolled: PropTypes.number
}
