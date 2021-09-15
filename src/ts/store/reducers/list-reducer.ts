import { IAction, IItem, IList } from '../../interfaces';
const ITEM_IS_DRAG = 'ITEM-IS-DRAG';

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

function sortItems(items: IItem[]) {
  const sortedItems = [...items];

  sortedItems.sort(
    (firstItem, secondItem) => firstItem.serialNumber - secondItem.serialNumber
  );
}

const listReducer = (state: IList = initialState, action: IAction): IList => {
  switch (action.type) {
    case ITEM_IS_DRAG: {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.args.id ? { ...item, isDragged: true } : item
        ),
      };
    }
    default:
      return state;
  }
};

export default listReducer;
