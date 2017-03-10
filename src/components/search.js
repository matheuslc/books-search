import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as _ from 'lodash';
import { search } from '../actions/index';

/**
 * @class
 * @name Search
 * @description Search bar
 */
class Search extends Component {
  constructor(props) {
    super(props);
  }

  search(query) {
    return this.props.search(query);
  }

  render() {
    return (
      <nav className="search row">
        <header className="search__header col-xs-12 col-md-4">
          <h1 className="search__header__title">
            Search a book here!
          </h1>
        </header>

        <input className="search__input"
               type="text"
               onChange={ (event) => this.setState({
                 query: event.target.value
               }) } />

        <Link to="/">
          <button onClick={() => this.search(this.state.query)}>Vai!</button>
        </Link>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return { search: state.search };
}

export default connect(mapStateToProps, { search })(Search)
