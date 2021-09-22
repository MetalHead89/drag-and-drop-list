import React from 'react';
import { IItem } from '../../ts/interfaces';

// function handleItemDragEnter(event: React.DragEvent) {
//   const target = event.target;

//   if (target instanceof HTMLDivElement) {
//     target.style.border = 'black 1px solid';
//   }
// }

// function handleItemDragLeave(event: React.DragEvent) {
//   const target = event.target;

//   if (target instanceof HTMLDivElement) {
//     target.style.border = 'none';
//   }
// }

const Item = (item: IItem): JSX.Element => {
  const handleItemDragStart = (event: React.DragEvent) => {
    const target = event.target;

    if (target instanceof HTMLDivElement) {
      // target.classList.remove('item_transparent');
      // event.dataTransfer.effectAllowed = 'move';
      // event.dataTransfer.setData('text/html', target.innerHTML);
      item.dragItem(item.id);
    }
  };

  const handleItemDragEnter = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();

    item.itemChangedPosition(item.serialNumber);
  };

  const handleItemDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };

  function handleItemDragEnd(event: React.DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    // const target = event.target;

    // if (target instanceof HTMLDivElement) {
    //   target.classList.remove('item_transparent');
    // }

    // item.itemReleased(item.id);
  }

  const handleItemDrop = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();

    // const target = event.target;

    // if (target instanceof HTMLDivElement) {
    //   target.innerHTML = event.dataTransfer.getData('text/html');
    // }
  };

  return (
    <div
      className="item"
      draggable="true"
      // onDrag={handleItemDrag}
      onDragEnter={handleItemDragEnter}
      onDragOver={handleItemDragOver}
      onDrop={handleItemDrop}
      // onDragLeave={handleItemDragLeave}
      onDragStart={handleItemDragStart}
      onDragEnd={handleItemDragEnd}
    >
      {item.text}
    </div>
  );
};

export default Item;
