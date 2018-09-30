import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from 'reducers';
import Routes from 'routes';
import createSagaMiddleware from 'redux-saga'
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {
  watchFetch,
} from 'sagas';
import './index.css';

// const logger = store => {
//   return next => {
//     return action => {
//       console.log('[Midlleware] dispatching', action);
//       next(action);
//     }
//   }
// }
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,
  composeEnhancer(
    applyMiddleware(
      sagaMiddleware,
      // logger,
      thunk,
    ),
  )
);
sagaMiddleware.run(watchFetch);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
