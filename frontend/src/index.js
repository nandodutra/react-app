import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
// import * as serviceWorker from './serviceWorker';

const store = createStore((state = { list: [], description: '', appNotifications: [] }, action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, list: state.list.concat(action.payload) };

    case 'DESCRIPTION_CHANGED': 
      return { ...state, description: action.payload };
    case 'ADD_APP_NOTIFICATION': 
      return { ...state, appNotifications: state.appNotifications.concat(action.payload) }
    default:
      return state;
  } 
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
