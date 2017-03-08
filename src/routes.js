import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Index from './components/index';
import BookList from './components/bookList';

export default (
  <Route path="/" component={Index}>
    <IndexRoute component={BookList} />a
  </Route>
);
