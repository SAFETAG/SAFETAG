import React, { Component } from 'react'
import { Link } from 'gatsby'
import PropTypes from "prop-types"

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

  // state = { query: this.props.initialQuery }

  node = React.createRef();

  handleClickOutside = e => {
    if (!this.node.current.contains(e.target)) {
      this.reset();
    }
  };

  handleClickInside = () => {
    this.reset();
  };

  render() {
    const ResultList = () => {
      let results = []
      let message = ''

      if (this.state.results.length > 0) {
        this.state.results.map((page, i) => {
          console.log(page.type)
          if (['activity', 'method', 'reference', 'blog post'].includes(page.type)) {
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
        message = 'No results for ' + this.state.query
      } else if (
        this.state.results.length === 0 &&
        this.state.query.length > 0
      ) {
        message = 'Please insert at least 3 characters'
      } else {
        message = ''
      }
      if (results.length > 0) {
        return (
        <div className="m-search__results">
          <ul>
          {results.map((result) => (
              <li className="m-search__result" key={result.key}>
                {result.type.replace(/^\w/, (c) => c.toUpperCase())}:
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
                onChange={this.search}
                placeholder={'Search'}
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
