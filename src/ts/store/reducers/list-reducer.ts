import { IAction, IItemState, IListState } from '../../interfaces';

const config = require('../../config/default.config.json');

const ITEM_DID_MOUNT = 'ITEM-DID-MOUNT';
const ITEM_IS_DRAG = 'ITEM-IS-DRAG';
const ITEM_IS_RELEASED = 'ITEM-IS-RELEASED';
const CHANGED_ORDER_OF_ITEMS = 'CHANGED-ORDER-OF-ITEMS';

const initialState = config.list;

// const listDidMountCreator = (): IAction => ({
//   type: LIST_DID_MOUNT,
// });

const itemDidMountCreator = (id: number, height: number): IAction => ({
  type: ITEM_DID_MOUNT,
  args: { id, height },
});

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

// const calculateListHeight = (state: IListState): number => {
//   return state.items.reduce((sum, item) => sum + item.height, 0);
// };

const setListHeight = (state: IListState): IListState => {
  const listHeight = state.items.reduce((sum, item) => sum + item.height, 0);

  if (state.height !== listHeight) {
    return { ...state, height: listHeight };
  }

  return state;
};

const setItemHeight = (
  state: IListState,
  itemId: number,
  height: number
): IListState => {
  const itemIndex = state.items.findIndex((item) => item.id === itemId);
  const itemHeight = state.items[itemIndex].height;

  state.items[itemIndex].height = itemHeight !== height ? height : itemHeight;

  return state;

  // const itemIndex = state.items.findIndex((item) => item.id === itemId);
  // if (itemIndex && state.items[itemIndex].height !== height) {
  //   state.items[itemIndex].height = height;
  //   state =
  // }

  // return {
  //   ...state,
  //   items: state.items.map((item) => {
  //     return item.id === itemId && item.height !== height
  //       ? { ...item, height: height }
  //       : item;
  //   }),
  // };

  // return { ...modifiedState, height: calculateListHeight(modifiedState) };
};

const setItemsPositions = (state: IListState): IListState => {
  let top = 0;

  return {
    ...state,
    items: state.items.map((item) => {
      const modifiedItem = { ...item, top: top };
      top += item.height;

      return modifiedItem;
    }),
  };
};

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
    // case LIST_DID_MOUNT: {
    //   return {
    //     ...state,
    //     height: (state.height = calculateListHeight(state)),
    //   };
    // }
    case ITEM_DID_MOUNT: {
      setItemHeight(state, action.args.id, action.args.height);
      state = setItemsPositions(state);
      state = setListHeight(state);
      return state;
      // console.dir(setItemHeight(state, action.args.id, action.args.height));
      // return setItemHeight(state, action.args.id, action.args.height);
    }
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
export {
  // listDidMountCreator,
  itemDidMountCreator,
  itemIsDragCreator,
  itemIsReleasedCreator,
  changedOrderOfItemsCreator,
};
