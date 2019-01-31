import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import reducer from './reducers';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';


const store = createStore(reducer,applyMiddleware(promise(),logger));



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
