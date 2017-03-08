import React, { Component } from 'react';

/**
 * @class
 * @name Search
 * @description Search bar
 */
export default class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input className="search__input" type="search" />
    )
  }
}
