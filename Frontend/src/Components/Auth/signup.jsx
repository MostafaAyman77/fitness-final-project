// src/components/Auth/SignUp.jsx
import React, { useState } from 'react';
import './auth.css'; // استيراد ملف الـ CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(name, email);
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <div className="input-box">
        <FontAwesomeIcon icon={faUser} className="icon" />
        <input 
          type="text" 
          placeholder="Enter Your Name" 
          value={name}
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div className="input-box">
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
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
        <FontAwesomeIcon icon={faGoogle} />
        Sign Up with Google
      </button>
    </div>
  );
}

export default SignUp;