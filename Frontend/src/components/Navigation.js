
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/create-item">
        <button>Create New Item</button>
      </Link>
    </div>
  );
};

export default Navigation;
