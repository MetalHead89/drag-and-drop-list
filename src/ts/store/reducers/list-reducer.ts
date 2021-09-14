import { IAction, IState } from '../../interfaces';
const initialState = {
  list: {
    items: ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'],
  },
};

const listReducer = (state: IState = initialState, action: IAction): IState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listReducer;
