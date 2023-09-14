
import React, { useState } from 'react';

const CreateItem = ({ onCreateItem }) => {
  const [itemData, setItemData] = useState({
    name: '',
    description: '',
    quantity: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItemData({ ...itemData, [name]: value });
  };

  const handleSubmit = () => {
    
    if (itemData.name && itemData.description && itemData.quantity >= 0) {
      onCreateItem(itemData);
    }
  };

  return (
    <div className="create-item">
      <h2>Create a New Item</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={itemData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={itemData.description}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={itemData.quantity}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleSubmit}>Create Item</button>
    </div>
  );
};

export default CreateItem;
