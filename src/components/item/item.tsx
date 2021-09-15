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

function handleItemDragEnter(event: React.DragEvent) {
  console.dir(event);
  const target = event.target;

  if (target instanceof HTMLDivElement) {
    target.style.border = 'black 1px solid';
  }
}

function handleItemDragLeave(event: React.DragEvent) {
  const target = event.target;

  if (target instanceof HTMLDivElement) {
    target.style.border = 'none';
  }
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
      onDragEnter={handleItemDragEnter}
      onDragLeave={handleItemDragLeave}
      onDragStart={handleItemDragStart}
      onDragEnd={handleItemDragEnd}
    >
      {item.text}
    </div>
  );
};

export default Item;
