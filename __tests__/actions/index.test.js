import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';
import { expect } from 'chai';
import sinon from 'sinon';
import * as fs from 'fs';
import * as path from 'path';

import * as actions from '../../src/actions/index'
import * as localStorage from '../../src/storage/localStorage';

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

const URL = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = 'AIzaSyBE3XoUsNc-m2t6N2NqxOOcHjiWn4HCRKc';
const TERM = 'React';
const START = 0;
const MAX_RESULT = 20;
const BOOK_ID = 'Rhl1CgAAQBAJ';

describe('Redux actions', () => {
  let mock = {};
  let searchResponse = {};
  let bookResponse = {};

  beforeAll(() => {
    searchResponse = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../fixtures/searchResponse.json'), 'utf8'));
    bookResponse = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../fixtures/searchResponse.json'), 'utf8'));
  });

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  it('Should search and dispatch two SEARCH actions', () => {
    mock.onGet(`${URL}?q=${TERM}&startIndex=${START}&maxResults=${MAX_RESULT}&projection=lite&key=${API_KEY}`)
      .reply(200, searchResponse);

    const store = mockStore({
      books: []
    })

    return store.dispatch(actions.search(TERM, START, MAX_RESULT))
      .then(() => {
        const storeActions = store.getActions();

        expect(storeActions).to.have.lengthOf(2);
        expect(storeActions[0]).to.have.property('type');
        expect(storeActions[0]).to.have.property('payload');
        expect(storeActions[0]).to.have.property('fetching');
        expect(storeActions[0]).to.have.property('error');
        expect(storeActions[0]).to.have.property('term');
        expect(storeActions[0].fetching).to.equal(true);
        expect(storeActions[0].type).to.equal(actions.SEARCH);

        expect(storeActions[1]).to.have.property('type');
        expect(storeActions[1]).to.have.property('payload');
        expect(storeActions[1]).to.have.property('fetching');
        expect(storeActions[1]).to.have.property('error');
        expect(storeActions[1]).to.have.property('term');
        expect(storeActions[1].fetching).to.equal(false);
        expect(storeActions[1].payload.data).to.equal(searchResponse);
        expect(storeActions[1].type).to.equal(actions.SEARCH);
      });
  });

  it('Should fetch a book and dispatch two FETCH_BOOK actions', () => {
    mock.onGet(`${URL}/${BOOK_ID}?key=${API_KEY}`)
      .reply(200, bookResponse);

    const store = mockStore({
      books: []
    })

    return store.dispatch(actions.fetchBook(BOOK_ID))
      .then(() => {
        const storeActions = store.getActions();

        expect(storeActions).to.have.lengthOf(2);
        expect(storeActions[0]).to.have.property('type');
        expect(storeActions[0]).to.have.property('payload');
        expect(storeActions[0]).to.have.property('fetching');
        expect(storeActions[0]).to.have.property('error');
        expect(storeActions[0].fetching).to.equal(true);

        expect(storeActions[1]).to.have.property('type');
        expect(storeActions[1]).to.have.property('payload');
        expect(storeActions[1]).to.have.property('fetching');
        expect(storeActions[1]).to.have.property('error');
        expect(storeActions[1].fetching).to.equal(false);
      })
  });

  it('Should persist a book in localStorage', () => {
    const stub = sinon.stub(localStorage, 'saveToStorage').returns(true);
    const action = actions.bookmark(bookResponse);

    stub.restore();

    expect(action.type).to.equal(actions.BOOKMARK);
  });

  it('Should trigger removeFromStorage from storage if bookmark already exists', () => {
    const spy = sinon.spy(localStorage, 'removeFromStorage');
    const stub = sinon.stub(localStorage, 'saveToStorage').returns(false);
    const action = actions.bookmark(bookResponse);

    stub.restore();

    sinon.assert.calledOnce(spy);
    expect(action.type).to.equal(actions.BOOKMARK);
  });
});
