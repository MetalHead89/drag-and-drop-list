import { IAction, IItem, IListState } from '../../interfaces';
const ITEM_IS_DRAG = 'ITEM-IS-DRAG';
const ITEM_IS_DROPPED = 'ITEM-IS-DROPPED';

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

const itemIsDragCreator = (id: number): IAction => ({
  type: ITEM_IS_DRAG,
  args: { id },
});

const itemIsDropped = (id: number): IAction => ({
  type: ITEM_IS_DROPPED,
  args: { id },
});

function sortItems(items: IItem[]) {
  const sortedItems = [...items];

  sortedItems.sort(
    (firstItem, secondItem) => firstItem.serialNumber - secondItem.serialNumber
  );
}

const listReducer = (
  state: IListState = initialState,
  action: IAction
): IListState => {
  switch (action.type) {
    case ITEM_IS_DRAG: {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.args.id ? { ...item, isDragged: true } : item
        ),
      };
    }
    case ITEM_IS_DROPPED: {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.args.id ? { ...item, isDragged: false } : item
        ),
      };
    }
    default:
      return state;
  }
};

export default listReducer;
export { itemIsDragCreator, itemIsDropped };
