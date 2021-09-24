interface IAction {
  type: string;
  args?: any;
}

interface IDispatch {
  (action: IAction): void;
}

interface IState {
  list: IList;
}

interface IListState {
  height: number;
  items: IItemState[];
}

interface IList extends IItemMethods {
  height: number;
  items: IItem[];
}

interface IItemMethods {
  setItemHeight: (id: number, height: number) => void;
  dragItem: (id: number) => void;
  itemReleased: (id: number) => void;
  itemChangedPosition: (targetId: number) => void;
}

interface IItemState {
  id: number;
  top: number;
  height: number;
  isDragged: boolean;
  text: string;
}

interface IItem extends IItemState, IItemMethods {}

export { IListState, IList, IAction, IState, IItemState, IItem, IDispatch };
