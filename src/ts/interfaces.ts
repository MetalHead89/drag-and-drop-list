interface IAction {
  type: string;
  args?: any;
}

interface IList {
  items: string[];
}

export { IList, IAction };
