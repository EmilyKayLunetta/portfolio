import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/common/Navbar';
import AppRoutes from './routes';

function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/portfolio';

  return (
    <>
      {showNavbar && <Navbar />}
      <AppRoutes />
    </>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
