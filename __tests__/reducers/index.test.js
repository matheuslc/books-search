import reducer from '../../src/reducers/index';
import sinon from 'sinon';
import { expect } from 'chai';
import * as fs from 'fs';
import * as path from 'path';

import * as actions from '../../src/actions/index'
import * as localStorage from '../../src/storage/localStorage'

describe('Redux reducers', () => {
  let searchResponse = {};
  let bookResponse = {};

  beforeAll(() => {
    searchResponse = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../fixtures/searchResponse.json'), 'utf8'));
    bookResponse = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../fixtures/searchResponse.json'), 'utf8'));
  });

  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal({
      books: {
        books: [],
        book: null,
        bookmarks: []
      }
    })
  });

  it('Should handle SEARCH action', () => {
    expect(reducer({}, {
      type: actions.SEARCH,
      payload: {
        data: searchResponse
      },
      term: 'React'
    })).to.be.deep.equal({
      books: {
        books: searchResponse.items,
        book: null,
        bookmarks: [],
        fetching: false,
        totalItems: 2,
        term: 'React'
      }
    })
  });

  it('Should handle FETCH_BOOK action', () => {
    expect(reducer({}, {
      type: actions.FETCH_BOOK,
      payload: {
        data: bookResponse
      }
    })).to.be.deep.equal({
      books: {
        books: [],
        bookmarks: [],
        book: bookResponse,
        fetching: false,
      }
    })
  });

  it('Should handle BOOKMARK action', () => {
    const stub = sinon.stub(localStorage, 'loadFromStorage').returns({
      bookmarks: [{
        'Rhl1CgAAQBAJ': bookResponse
      }]
    });

    expect(reducer({}, {
      type: actions.BOOKMARK
    })).to.be.deep.equal({
      books: {
        books: [],
        bookmarks: {
         bookmarks: [
           {
             'Rhl1CgAAQBAJ': bookResponse
           }
         ]
        },
        book: null
      }
    })

    stub.restore();
  });
});
