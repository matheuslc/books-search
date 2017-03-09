import axios from 'axios';

export const SEARCH = 'SEARCH';
export const BOOKMARK = 'BOOKMARK';
export const FETCH_BOOK = 'FETCH_BOOK';
export const BOOKMARKS_LOCALSTORAGE_KEY = 'BOOKMARKS';

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
    type: 'BOOKMARK',
    payload: book
  }
}

export const search = (term = 'React', start = 0, max  = 30) => {
  const request = axios.get(`${URL}?q=${term}&startIndex=${start}&max=${max}&key=${API_KEY}`);

  return {
    type: SEARCH,
    payload: request
  }
}

export const fetchBook = (bookId) => {
  const request = axios.get(`${URL}${bookId}?key=${API_KEY}`);

  return {
    type: FETCH_BOOK,
    payload: request
  }
}
