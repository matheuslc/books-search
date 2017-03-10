import { combineReducers } from 'redux';

import { SEARCH, BOOKMARK, FETCH_BOOK, FETCH_BOOKMARK } from '../actions/index';
import { loadFromStorage } from '../storage/localStorage';

const INITIAL_STATE = { books: [], book: {}, bookmarks: [] };

/**
 * @name reducer
 * @param state
 * @param action
 * @returns {Object} New state
 */
function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SEARCH:
      if (action.fetching) {
        return {
          ...state,
          books: [],
          fetching: true,
          term: action.term
        }
      }

      return {
        ...state,
        books: action.payload.data.items,
        fetching: false,
        totalItems: action.payload.data.totalItems,
        term: action.term
      };
    case FETCH_BOOK:
      if (action.fetching) {
        return { ...state, book: {}, fetching: true};
      }

      return {
        ...state,
        book: action.payload.data,
        fetching: false
      };
    case BOOKMARK:
      return {
        ...state,
        bookmarks: loadFromStorage()
      };
    case FETCH_BOOKMARK:
      return {
        ...state,
        bookmarks: action.payload
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  books: reducer,
});

export default rootReducer;
