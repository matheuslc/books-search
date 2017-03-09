import axios from 'axios';

export const SEARCH = 'SEARCH';
export const BOOKMARK = 'BOOKMARK';
export const FETCH_BOOK = 'FETCH_BOOK';
export const BOOKMARKS_LOCALSTORAGE_KEY = 'BOOKMARKS';
export const MAX_RESULTS = 20;

/**
 * Google Books API URL and Key
 */
const URL = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = 'AIzaSyBE3XoUsNc-m2t6N2NqxOOcHjiWn4HCRKc';

import { saveToStorage, removeFromStorage } from '../storage/localStorage';

export const bookmark = (book) => {
  const status = saveToStorage(book);

  if (!status) {
    removeFromStorage(book);
  }

  return {
    type: BOOKMARK,
    payload: book
  }
}

export const search = (term = 'React', start = 0, max = MAX_RESULTS) => {
  const request = axios.get(`${URL}?q=${term}&startIndex=${start}&maxResults=${max}&projection=lite&key=${API_KEY}`);

  return dispatch => {
    dispatch({
      type: SEARCH,
      fetching: true,
      payload: request,
      error: false,
      term
    });

    return request.then((response) => dispatch({
      type: SEARCH,
      fetching: false,
      payload: response,
      error: false,
      term
    })).catch((error) => dispatch({
      type: SEARCH,
      fetching: false,
      payload: error,
      error: true,
      term
    }))
  }
}

export const fetchBook = (bookId) => {
  const request = axios.get(`${URL}/${bookId}?key=${API_KEY}`);

  return dispatch => {
    dispatch({
      type: FETCH_BOOK,
      fetching: true,
      error: false,
      payload: request
    });

    return request.then((response) => dispatch({
      type: FETCH_BOOK,
      fetching: false,
      error: false,
      payload: response
    })).catch((error) => dispatch({
      type: FETCH_BOOK,
      fetching: false,
      error: true,
      payload: error
    }))
  }
}
