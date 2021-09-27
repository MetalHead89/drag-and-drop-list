import React, { useEffect, useRef } from 'react';
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
  const customStyles = {
    top: item.top,
  };
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let height = itemRef.current?.offsetHeight;
    height = height === undefined ? 0 : height;
    item.setItemHeight(item.id, height);
  });

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

    item.itemChangedPosition(item.id);
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
      ref={itemRef}
      className="item"
      style={customStyles}
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
