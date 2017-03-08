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
    this.props.search(event.target.value);
  }

  render() {
    return (
      <input className="search__input"
             type="search"
             onChange={this.search} />
    )
  }
}

function mapStateToProps(state) {
  return { search: state.search };
}

export default connect(mapStateToProps, { search })(Search)
