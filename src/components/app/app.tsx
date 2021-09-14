import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../ts/store/store';
import ListContainer from '../list/list-container';

const root = document.querySelector('.app');

if (root !== null) {
  ReactDOM.render(
    <Provider store={store}>
      <ListContainer />
    </Provider>,
    root
  );
}
