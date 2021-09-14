import { IAction, IList } from '../../interfaces';
const initialState = {
  items: [
    { text: 'item1' },
    { text: 'item2' },
    { text: 'item3' },
    { text: 'item4' },
    { text: 'item5' },
    { text: 'item6' },
  ],
};

const listReducer = (state: IList = initialState, action: IAction): IList => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listReducer;
