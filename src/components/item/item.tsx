import React from 'react';
import { IItem } from '../../ts/interfaces';

// function handleItemDrag(event: React.DragEvent) {
//   const target = event.target;

//   if (target instanceof HTMLDivElement) {
//     target.classList.add('item_transparent');
//   }
// }

function handleItemDragStart(event: React.DragEvent) {
  // const target = event.target;

  // if (target instanceof HTMLDivElement) {
  //   target.classList.add('item_transparent')
  // }
}

function handleItemDragEnd(event: React.DragEvent) {
  const target = event.target;

  if (target instanceof HTMLDivElement) {
    target.classList.remove('item_transparent');
  }
}

const Item = (item: IItem): JSX.Element => {
  return (
    <div
      className="item"
      draggable="true"
      // onDrag={handleItemDrag}
      onDragStart={handleItemDragStart}
      onDragEnd={handleItemDragEnd}
    >
      {item.text}
    </div>
  );
};

export default Item;
