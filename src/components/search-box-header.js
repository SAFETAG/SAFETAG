import React, { useState, useRef } from 'react'
import { Trans, useI18next, useTranslation } from 'gatsby-plugin-react-i18next';

function SearchBox () {
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
        <Trans i18nKey="search-title">Search</Trans>
      </div>

      {isOpened && (
        <form onSubmit={handleSubmit}>
          <input type="text"
            style={{ display: isOpened ? "block" : "none" }}
            ref={searchInput}
            placeholder={t("Search..."}
            value={searchQuery ? searchQuery : ''}
            onChange={() => setSearchQuery(event.target.value)}/>
        </form>
      )}
    </div>
  )
}

export default SearchBox
