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
  items: IItem[];
}

interface IItemMethods {
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
