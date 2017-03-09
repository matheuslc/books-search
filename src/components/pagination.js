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
    let i = 0;
    let elements = [];

    for (i; i < items / max; i++) {
      elements.push(
        this.createPagesElements(term, i)
      )
    }

    return elements
  }

  createPagesElements(term, page) {
    return (
      <li key={page} onClick={() => this.props.search(term, page * MAX_RESULTS)}>{ page }</li>
    )
  }

  render() {
    return (
      <div>
        <ul>
          { this.getPages(this.props.term, this.props.totalItems, MAX_RESULTS) }
        </ul>

        Total { this.props.totalItems }
      </div>
    )
  }
}
