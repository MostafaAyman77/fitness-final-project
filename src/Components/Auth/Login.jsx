// src/components/Auth/Login.jsx
import React, { useState } from 'react';
import { FaGoogle, FaEnvelope, FaLock } from 'react-icons/fa';
import '../styles/auth.css'; // استيراد ملف الـ CSS

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="container-auth">
      <h2>Login</h2>
      <div className="input-box">
        <FaEnvelope className="icon" />
        <input 
          type="email" 
          placeholder="Enter Your E-Mail" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
      <div className="input-box">
        <FaLock className="icon" />
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
        <FaGoogle />
        Login with Google
      </button>
    </div>
  );
}

export default Login;