import { IAction, IItemState, IListState } from '../../interfaces';
const ITEM_IS_DRAG = 'ITEM-IS-DRAG';
const ITEM_IS_RELEASED = 'ITEM-IS-RELEASED';
const CHANGED_ORDER_OF_ITEMS = 'CHANGED-ORDER-OF-ITEMS';

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

const itemIsReleasedCreator = (id: number): IAction => ({
  type: ITEM_IS_RELEASED,
  args: { id },
});

const changedOrderOfItemsCreator = (serialNumber: number): IAction => ({
  type: CHANGED_ORDER_OF_ITEMS,
  args: { serialNumber },
});

function changeOrderOfItems(
  items: IItemState[],
  serialNumber: number
): IItemState[] {
  return sortItems(
    items.map((item) => {
      let droppedPosition = 0;

      if (item.isDragged) {
        droppedPosition = item.serialNumber;
        item.serialNumber = serialNumber;
      } else if (
        item.serialNumber > droppedPosition &&
        item.serialNumber < serialNumber
      ) {
        item.serialNumber = item.serialNumber - 1;
      } else if (item.serialNumber > serialNumber) {
        item.serialNumber = item.serialNumber + 1;
      }

      return item;
    })
  );
}

function sortItems(items: IItemState[]) {
  const sortedItems = [...items];

  sortedItems.sort(
    (firstItem, secondItem) => firstItem.serialNumber - secondItem.serialNumber
  );

  return sortedItems;
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
    case ITEM_IS_RELEASED: {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.args.id ? { ...item, isDragged: false } : item
        ),
      };
    }
    case CHANGED_ORDER_OF_ITEMS: {
      return {
        ...state,
        items: changeOrderOfItems(state.items, action.args.serialNumber),
      };
    }
    default:
      return state;
  }
};

export default listReducer;
export { itemIsDragCreator, itemIsReleasedCreator, changedOrderOfItemsCreator };
