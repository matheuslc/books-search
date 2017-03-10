import { BOOKMARKS_LOCALSTORAGE_KEY } from '../actions/index';

/**
 * @name loadFromStorage
 * @returns {Object}
 * @description Get bookmarks from localStorage
 */
export const loadFromStorage = () => {
  try {
    const items = localStorage.getItem(BOOKMARKS_LOCALSTORAGE_KEY);

    /**
     * So, let's our reducers returns default state
     */
    if (items === null) {
      return undefied;
    }

    return JSON.parse(items);
  } catch (error) {
    return undefined;
  }
}

/**
 * @name saveToStorage
 * @param book {object}
 * @returns {boolean}
 * @description Save a book to localStorage. Returns true if success and false if object already exists
 */
export const saveToStorage = (book) => {
  try {
    const bookmarks = loadFromStorage();

    if (bookmarks === undefined) {
      let helperObject = {
        bookmarks: {}
      };

      helperObject.bookmarks[book.id] = book

      localStorage.setItem(BOOKMARKS_LOCALSTORAGE_KEY, JSON.stringify(
        helperObject
      ));

      return true;
    }

    if (bookmarks.bookmarks[book.id]) {
      return false;
    }

    bookmarks.bookmarks[book.id] = book;
    localStorage.setItem(BOOKMARKS_LOCALSTORAGE_KEY, JSON.stringify(bookmarks))

    return true
  } catch (error) {}
}

/**
 * @name removeFromStorage
 * @param state
 * @returns {boolean}
 * @description Remove a book from localStorage. Returns true if success and false if there is no bookmarks
 */
export const removeFromStorage = (book) => {
  try {
    const bookmarks = loadFromStorage();

    if (bookmarks === null) {
      return false;
    }

    /**
     * Maybe this is a V8 gotcha. Check this
     */
    delete bookmarks.bookmarks[book.id];

    localStorage.setItem(BOOKMARKS_LOCALSTORAGE_KEY, JSON.stringify(bookmarks))
    return true;
  } catch (error) {}
}
