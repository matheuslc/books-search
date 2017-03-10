import React, { Component } from 'react';
import { MAX_RESULTS } from '../actions/index';

/**
 * @class
 * @name Pagination
 * @description Pagination definition
 */
export class Pagination extends Component {
  constructor(props) {
    super(props);
  }

  getPages(term, items, max) {
    let i = 1;
    let elements = [];

    for (i; i < ((items / max) - 2); i++) {
      elements.push(
        this.createPagesElements(term, i)
      )
    }

    return elements
  }

  createPagesElements(term, page) {
    return (
      <li className="page-item"
          key={page} onClick={() => {
        this.props.search(term, page * MAX_RESULTS)
      }}>
        <a className="page-link"> { page } </a>
      </li>
    )
  }

  render() {
    return (
      <nav className="pagination-component">
        <ul className="pagination">
          { this.getPages(this.props.term, this.props.totalItems, MAX_RESULTS) }
        </ul>
      </nav>
    )
  }
}
