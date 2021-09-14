interface IAction {
  type: string;
  args?: any;
}

interface IState {
  list: IList;
}

interface IList {
  items: string[];
}

export { IList, IAction, IState };
