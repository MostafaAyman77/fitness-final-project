// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Auth/Login';
import SignUp from './Auth/signup';

function App() {
  return (
    <Router>
      <div className="navbar">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;