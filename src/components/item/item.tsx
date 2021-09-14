import React from 'react';
import { IItem } from '../../ts/interfaces';

const Item = (item: IItem): JSX.Element => {
  return <div className="item">{item.text}</div>;
};

export default Item;
