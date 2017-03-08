import { BOOKMARKS_LOCALSTORAGE_KEY } from '../actions/index';

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

export const saveToStorage = (state) => {
  try {
    const items = JSON.stringify(state);
    localStorage.setItem(BOOKMARKS_LOCALSTORAGE_KEY, items);
  } catch (error) {

  }
}
