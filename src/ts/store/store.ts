import { combineReducers, createStore } from 'redux';
import listReducer from './reducers/list-reducer';

// Собирает переданные в параметрах reducers в один объект
const reducers = combineReducers({
  list: listReducer,
});

// Создает store исходя из полученных в параметрах reducers
const store = createStore(reducers);

export default store;
