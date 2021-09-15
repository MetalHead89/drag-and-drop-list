interface IAction {
  type: string;
  args?: any;
}

interface IState {
  list: IList;
}

interface IList {
  items: IItem[];
}

interface IItem {
  id: number;
  text: string;
}

export { IList, IAction, IState, IItem };
