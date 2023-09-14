
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; 


const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Inventory</h1>
      <Link to="/register">
        <button className="signup-button">Sign Up</button>
      </Link>
      <Link to="/login">
        <button className="login-button">Log In</button>
      </Link>
    </div>
  );
};

export default HomePage;
