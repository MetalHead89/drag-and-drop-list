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

interface IList {
  items: IItem[];
}

interface IItem {
  id: number;
  serialNumber: number;
  isDragged: boolean;
  text: string;
}

export { IList, IAction, IState, IItem, IDispatch };
