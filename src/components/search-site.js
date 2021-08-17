import React, { Component } from 'react'
import PropTypes from "prop-types"

const initialState = {
  query: '',
  results: [],
}

class Search extends Component {
  state = initialState;

  // reset the state when clicking outside the search component
  // from https://stackoverflow.com/questions/32553158/detect-click-outside-react-component

  reset() {
    this.setState(initialState);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

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
                <a href={result.slug}>{result.title}</a>
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
                />
                <i className="fas fa-search"></i>
            </div>
              <ResultList />
          </div>
      </div>
    )
  }



  getSearchResults(query) {

    var index = window.__FLEXSEARCH__.en.index
    var store = window.__FLEXSEARCH__.en.store
    // var index = window.__FLEXSEARCH__[this.props.lang].index
    // var store = window.__FLEXSEARCH__[this.props.lang].store
    if (!query || !index) {
      return []
    } else {
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
}

export default Search






/*

import React, { Component } from 'react'
import { Link } from 'gatsby'

// Search component
class Search extends Component {
  state = {
    query: '',
    results: [],
  }

  render() {
    const ResultList = () => {
      if (this.state.results.length > 0) {
        return this.state.results.map((page, i) => (
          <div className="item-search" key={i}>
            <Link to={page.url} className="link">
              <h4>{page.title}</h4>
            </Link>
          </div>
        ))
      } else if (this.state.query.length > 2) {
        return 'No results for ' + this.state.query
      } else if (
        this.state.results.length === 0 &&
        this.state.query.length > 0
      ) {
        return 'Please insert at least 3 characters'
      } else {
        return ''
      }
    }

    return (
      <div>
        <input
          className="search__input"
          type="text"
          onChange={this.search}
          placeholder={'Search'}
        />
        <div className="search__list">
          <ResultList />
        </div>
      </div>
    )
  }

  getSearchResults(query) {
    // adicionar variável para língua
    var index = window.__FLEXSEARCH__.en.index
    var store = window.__FLEXSEARCH__.en.store
    if (!query || !index) {
      return []
    } else {
      var results = []
      // search the indexed fields
      Object.keys(index).forEach(idx => {
        results.push(...index[idx].values.search(query)) // more search options at https://github.com/nextapps-de/flexsearch#index.search
      })

      // find the unique ids of the nodes
      results = Array.from(new Set(results))

      // return the corresponding nodes in the store
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

export default Search
*/
