import { combineReducers } from 'redux';

import { SEARCH, BOOKMARK, FETCH_BOOK, BOOKMARKS_LOCALSTORAGE_KEY } from '../actions/index';
import { loadFromStorage } from '../storage/localStorage';

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
        bookmarks: loadFromStorage()
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  books: reducer,
});

export default rootReducer;
