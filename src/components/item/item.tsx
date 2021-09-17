import React from 'react';
import { IItem } from '../../ts/interfaces';

// function handleItemDrag(event: React.DragEvent) {
//   const target = event.target;

//   if (target instanceof HTMLDivElement) {
//     target.classList.add('item_transparent');
//   }
// }

// function handleItemDragStart(event: React.DragEvent) {
//   // const target = event.target;
//   // if (target instanceof HTMLDivElement) {
//   //   target.classList.add('item_transparent')
//   // }
// }

function handleItemDragEnter(event: React.DragEvent) {
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

// function handleItemDragEnd(event: React.DragEvent) {
//   const target = event.target;

//   if (target instanceof HTMLDivElement) {
//     target.classList.remove('item_transparent');
//   }
// }

const Item = (item: IItem): JSX.Element => {
  const handleItemDragStart = (event: React.DragEvent) => {
    const target = event.target;

    if (target instanceof HTMLDivElement) {
      target.classList.remove('item_transparent');
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/html', target.innerHTML);

      item.dragItem(item.id);
    }
  };

  const handleItemDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleItemDrop = (event: React.DragEvent) => {
    event.stopPropagation();

    const target = event.target;

    if (target instanceof HTMLDivElement) {
      target.innerHTML = event.dataTransfer.getData('text/html');
    }
  };

  function handleItemDragEnd(event: React.DragEvent) {
    const target = event.target;

    if (target instanceof HTMLDivElement) {
      target.classList.remove('item_transparent');
    }

    item.itemReleased(item.id);
  }

  return (
    <div
      className="item"
      draggable="true"
      // onDrag={handleItemDrag}
      onDragEnter={handleItemDragEnter}
      onDragOver={handleItemDragOver}
      onDrop={handleItemDrop}
      onDragLeave={handleItemDragLeave}
      onDragStart={handleItemDragStart}
      onDragEnd={handleItemDragEnd}
    >
      {item.text}
    </div>
  );
};

export default Item;
