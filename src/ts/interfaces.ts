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
  text: string;
}

export { IList, IAction, IState, IItem };
