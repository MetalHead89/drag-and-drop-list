import React from 'react';
import { IList } from '../../ts/interfaces';
import Item from '../item/item';

const List = (list: IList): JSX.Element => {
  console.dir(list.items);
  const items = list.items.map((item) => {
    return (
      <Item
        key={item.id}
        {...item}
        dragItem={list.dragItem}
        itemReleased={list.itemReleased}
      />
    );
  });

  return <ul className="list">{items}</ul>;
};

export default List;
