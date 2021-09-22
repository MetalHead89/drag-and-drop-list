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
  items: IItemState[];
}

interface IList extends IItemMethods {
  items: IItem[];
}

interface IItemMethods {
  dragItem: (id: number) => void;
  itemReleased: (id: number) => void;
  itemChangedPosition: (serialNumber: number) => void;
}

interface IItemState {
  id: number;
  serialNumber: number;
  isDragged: boolean;
  text: string;
}

interface IItem extends IItemState, IItemMethods {}

export { IListState, IList, IAction, IState, IItemState, IItem, IDispatch };
