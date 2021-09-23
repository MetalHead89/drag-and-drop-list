import { IAction, IItemState, IListState } from '../../interfaces';
const ITEM_IS_DRAG = 'ITEM-IS-DRAG';
const ITEM_IS_RELEASED = 'ITEM-IS-RELEASED';
const CHANGED_ORDER_OF_ITEMS = 'CHANGED-ORDER-OF-ITEMS';

const initialState = {
  items: [
    { id: 1, isDragged: false, text: 'item1' },
    { id: 2, isDragged: false, text: 'item2' },
    { id: 3, isDragged: false, text: 'item3' },
    { id: 4, isDragged: false, text: 'item4' },
    { id: 5, isDragged: false, text: 'item5' },
    { id: 6, isDragged: false, text: 'item6' },
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

const changedOrderOfItemsCreator = (targetId: number): IAction => ({
  type: CHANGED_ORDER_OF_ITEMS,
  args: { targetId },
});

function changeOrderOfItems(
  items: IItemState[],
  targetId: number
): IItemState[] {
  const targetIndex = items.findIndex((item) => item.id === targetId);
  const draggedItemIndex = items.findIndex((item) => item.isDragged);
  const draggedItem = items.find((item) => item.isDragged);
  const modifiedItems = [...items];

  if (draggedItem) {
    modifiedItems.splice(draggedItemIndex, 1);
    modifiedItems.splice(targetIndex, 0, draggedItem);
  }

  return modifiedItems;
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
        items: changeOrderOfItems(state.items, action.args.targetId),
      };
    }
    default:
      return state;
  }
};

export default listReducer;
export { itemIsDragCreator, itemIsReleasedCreator, changedOrderOfItemsCreator };
