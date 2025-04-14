// src/components/Auth/SignUp.jsx
import React, { useState } from 'react';
import { FaGoogle, FaUser, FaEnvelope } from 'react-icons/fa';
import '../styles/auth.css'; // استيراد ملف الـ CSS

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(name, email);
  };

  return (
    <div className="container-auth">
      <h2>Sign Up</h2>
      <div className="input-box">
        <FaUser className="icon" />
        <input 
          type="text" 
          placeholder="Enter Your Name" 
          value={name}
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div className="input-box">
        <FaEnvelope className="icon" />
        <input 
          type="email" 
          placeholder="Enter Your E-Mail" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
      <button className="btn" onClick={handleSignUp}>Sign Up</button>
      <div className="or-line">
        <span>Or</span>
      </div>
      <button className="google-btn">
        <FaGoogle />
        Sign Up with Google
      </button>
    </div>
  );
}

export default SignUp;