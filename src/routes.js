import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Index from './components/index';
import BookList from './components/bookList';
import BookDetailContainer from './components/bookDetailContainer';
import BookmarkContainer from './components/bookmarkContainer';

export default (
  <Route path="/" component={Index}>
    <IndexRoute component={BookList} />
    <Route path="books/:bookId" component={BookDetailContainer} />
    <Route path="bookmarks" component={BookmarkContainer} />
  </Route>
);
