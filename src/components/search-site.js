import React, { Component } from 'react'
import { Link, I18nextContext, useTranslation } from 'gatsby-plugin-react-i18next';
import PropTypes from "prop-types"


const searchBoxStyle = {
  'margin': '2em 0',
}
const resultUlStyle = {
  listStyleType: 'none',
}
const resultLiStyle = {
  margin: '0.5em 0',
}
const resultTypeStyle = {
  color: '#aaa',
  marginRight: '1em',
}


class Search extends Component {
  state = {
    query: this.props.initialQuery ? this.props.initialQuery : '',
    results: []
  };

  componentDidMount() {
    if (this.props.initialQuery) {
      console.log("Initial: " + this.props.initialQuery)
      const results = this.getSearchResults(this.props.initialQuery)
      this.setState({ results })
    }
    // focus input box
    this.searchInput.focus()
  }

  render() {
    const ResultList = () => {
      let results = []
      let message = ''
      const { t } = useTranslation('site', { useSuspense: false })
      const context = React.useContext(I18nextContext);

      if (this.state.results.length > 0) {
        this.state.results.map((page, i) => {
          if (['activity', 'method', 'blog post', 'tool'].includes(page.type) && page.lang == context.language) {
            results.push({
              key: i,
              slug: page.url,
              title: page.title,
              // type: page.type,
              // type: page.url ? page.url.replace('/', '').split('/')[0] : '',
              type: page.type
            })
          }
        })
      } else if (this.state.query.length > 2) {
        message = t('No results for ') + this.state.query + '.'
      } else if (
        this.state.results.length === 0 &&
        this.state.query.length > 0
      ) {
        message = t('Please insert at least 3 characters.')
      } else {
        message = ''
      }
      if (results.length > 0) {
        return (
        <div className="m-search__results">
          <ul style={resultUlStyle}>
          {results.map((result) => (
              <li style={resultLiStyle} className="m-search__result" key={result.key}>
                <span style={resultTypeStyle}>{result.type.replace(/^\w/, (c) => c.toUpperCase())}</span>
                <Link to={result.slug} className="link">
                  {result.title}
                </Link>
              </li>)
            )}
          </ul>
        </div>
        )
      } else if (message){
        return (<div className="m-search__results">
          <div className="m-search__result">{ message }</div>
        </div>)
      } else { return '' }
    }

    return (
      <div ref={this.node} className={'row m-search ' + this.props.classNames + '__search'}>
          <div className={"m-search__wrapper col-sm-12 col-md-8 col-lg-" + this.props.cols}>
            <div className="m-search__input">
                <input type="text"
                style={searchBoxStyle}
                onChange={this.search}
                placeholder="Search"
                value={this.state.query}
                ref={inputEl => (this.searchInput = inputEl)}
                />
                <i className="fas fa-search"></i>
            </div>
              <ResultList />
          </div>
      </div>
    )
  }



  getSearchResults(query) {
    if (query && !this.state.searchQuery) {
      console.log("Resetting searchQuery...")
      this.setState({ searchQuery: query })
      console.log(this.state)
      console.log("State query value: " + this.state.searchQuery)
    }
    var index = window.__FLEXSEARCH__.en.index
    var store = window.__FLEXSEARCH__.en.store
    // var index = window.__FLEXSEARCH__[this.props.lang].index
    // var store = window.__FLEXSEARCH__[this.props.lang].store
    if (!query || !index) {
      console.log("Not searching")
      return []
    } else {
      query = query.replace(/ /, '+')
      console.log("Searching for " + query)
      var results = []
      Object.keys(index).forEach(idx => {
        results.push(...index[idx].values.search(query))
      })

      results = Array.from(new Set(results))

      var nodes = store
        .filter(node => (results.includes(node.id) ? node : null))
        .map(node => node.node)

      return nodes
    }
  }

  search = event => {
    const query = event.target.value
    if (this.state.query.length > 2) {
      const results = this.getSearchResults(query)
      this.setState({ results: results, query: query })
    } else {
      this.setState({ results: [], query: query })
    }
  }
}


Search.propTypes = {
  classNames: PropTypes.string,
  cols: PropTypes.number,
  initialQuery: PropTypes.string
}

export default Search
