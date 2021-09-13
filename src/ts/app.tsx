import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import List from '../components/list/list';
// import store from './store/store';

const root = document.querySelector('.app');

if (root !== null) {
  ReactDOM.render(
    <List />,
    // <Provider store={store}>
    //   {/* <App /> */}
    // </Provider>,
    root
  );
}
