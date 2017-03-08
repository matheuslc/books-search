import { combineReducers } from 'redux';

import { SEARCH, BOOKMARK, FETCH_BOOK, BOOKMARKS_LOCALSTORAGE_KEY } from '../actions/index';

const INITIAL_STATE = { books: [], book: null, bookmarks: [] };

function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SEARCH:
      return { ...state, books: action.payload.data.items };
    case FETCH_BOOK:
      return { ...state, book: action.payload.data.items };

    case BOOKMARK:
      return {
        ...state,
        bookmarks: JSON.parse(window.localStorage.get('BOOKMARKS_LOCALSTORAGE_KEY'))
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  books: reducer,
});

export default rootReducer;
