import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../actions/index';

/**
 * @class
 * @name Search
 * @description Search bar
 */
class Search extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  search(event) {
    return this.props.search(event.target.value);
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
               type="search"
               onChange={ this.search } />
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return { search: state.search };
}

export default connect(mapStateToProps, { search })(Search)
