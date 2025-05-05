// src/components/Auth/Login.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './auth.css'; // استيراد ملف الـ CSS

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <div className="input-box">
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        <input 
          type="email" 
          placeholder="Enter Your E-Mail" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
      <div className="input-box">
        <FontAwesomeIcon icon={faLock} className="icon" />
        <input 
          type="password" 
          placeholder="Enter Your Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
      <button className="btn" onClick={handleLogin}>Login</button>
      <div className="or-line">
        <span>Or</span>
      </div>
      <button className="google-btn">
        <FontAwesomeIcon icon={faGoogle} />
        Login with Google
      </button>
    </div>
  );
}

export default Login;