// import axios from 'axios';
// import { IAction, IItem, IList, IListsContainerState } from '../../interfaces';

import { IAction, IList } from '../../interfaces';

// const SET_LISTS = 'SET-LISTS';
// const CHANGE_TITLE = 'CHANGE-TITLE';
// const ENABLE_TITLE_EDITING_MODE = 'ENABLE-TITLE-EDITING-MODE';
// const ENABLE_ITEM_EDITING_MODE = 'ENABLE-ITEM-EDITING-MODE';
// const DISABLE_TITLE_EDITING_MODE = 'DISABLE-TITLE-EDITING-MODE';
// const ADD_ITEM = 'ADD-ITEM';
// const CHANGE_ITEM = 'CHANGE-ITEM';
const initialState = {
  items: ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'],
};

const listReducer = (state: IList = initialState, action: IAction): IList => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listReducer;
