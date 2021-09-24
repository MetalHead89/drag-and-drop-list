import React from 'react';
import { IList } from '../../ts/interfaces';
import Item from '../item/item';

const List = (list: IList): JSX.Element => {
  const items = list.items.map((item) => {
    return (
      <Item
        key={item.id}
        {...item}
        setItemHeight={list.setItemHeight}
        dragItem={list.dragItem}
        itemReleased={list.itemReleased}
        itemChangedPosition={list.itemChangedPosition}
      />
    );
  });

  return <ul className="list">{items}</ul>;
};

export default List;
