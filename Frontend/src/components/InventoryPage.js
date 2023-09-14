
import React from 'react';
import { Link } from 'react-router-dom';

const InventoryPage = ({ onLogout }) => {
  return (
    <div className="inventory-page">
      <h2>Inventory of Items</h2>
      <div className="buttons">
        <Link to="/create-item">
          <button>Create New Item</button>
        </Link>
        <button onClick={onLogout}>Log Out</button>
      </div>
      
    </div>
  );
};

export default InventoryPage;
