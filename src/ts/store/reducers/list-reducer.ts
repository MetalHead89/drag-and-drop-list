import { IAction, IList } from '../../interfaces';
const initialState = {
  items: [
    { id: 1, serialNumber: 1, isDragged: false, text: 'item1' },
    { id: 2, serialNumber: 2, isDragged: false, text: 'item2' },
    { id: 3, serialNumber: 3, isDragged: false, text: 'item3' },
    { id: 4, serialNumber: 4, isDragged: false, text: 'item4' },
    { id: 5, serialNumber: 5, isDragged: false, text: 'item5' },
    { id: 6, serialNumber: 6, isDragged: false, text: 'item6' },
  ],
};

const listReducer = (state: IList = initialState, action: IAction): IList => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listReducer;
