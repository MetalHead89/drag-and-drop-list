import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import List from '../list/list';
import store from '../../ts/store/store';

const root = document.querySelector('.app');

if (root !== null) {
  ReactDOM.render(
    <Provider store={store}>
      <List />
    </Provider>,
    root
  );
}
