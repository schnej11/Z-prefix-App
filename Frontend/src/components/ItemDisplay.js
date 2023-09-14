
import React from 'react';

const ItemDisplay = ({ items }) => {
  return (
    <div className="item-display">
      <h2>Your Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <strong>Name:</strong> {item.name}<br />
            <strong>Description:</strong> {item.description}<br />
            <strong>Quantity:</strong> {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemDisplay;
