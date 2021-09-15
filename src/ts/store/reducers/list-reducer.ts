import { IAction, IList } from '../../interfaces';
const initialState = {
  items: [
    { id: 1, text: 'item1' },
    { id: 2, text: 'item2' },
    { id: 3, text: 'item3' },
    { id: 4, text: 'item4' },
    { id: 5, text: 'item5' },
    { id: 6, text: 'item6' },
  ],
};

const listReducer = (state: IList = initialState, action: IAction): IList => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listReducer;
