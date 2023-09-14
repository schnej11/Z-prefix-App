import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Outlet, Routes } from 'react-router-dom';

import HomePage from './components/HomePage';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Navigation from './components/Navigation';
import CreateItem from './components/CreateItem';
import ItemDisplay from './components/ItemDisplay';
import InventoryPage from './components/InventoryPage';

function App() {
  const [items, setItems] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);

  const handleCreateItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleLogin = () => {
   
    setAuthenticated(true);
  };

  const handleLogout = () => {
    
    setAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route
            path="/login"
            element={
              authenticated ? (
                <Outlet />
              ) : (
                <LoginForm onLogin={handleLogin} />
              )
            }
          />
          {authenticated && (
            <>
              <Route
                path="/"
                element={
                  <>
                    <Navigation />
                    <Outlet />
                  </>
                }
              />
              <Route path="/create-item" element={<CreateItem onCreateItem={handleCreateItem} />} />
              <Route path="/inventory" element={<InventoryPage onLogout={handleLogout} />} />
              <Route path="/" element={<ItemDisplay items={items} />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
