import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Index from './components/index';
import BookList from './components/bookList';
import BookDetail from './components/bookDetail';

export default (
  <Route path="/" component={Index}>
    <IndexRoute component={BookList} />
    <Route path="/books/:bookId" component={BookDetail}/>
  </Route>
);
