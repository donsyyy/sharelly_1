import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faPhone } from '@fortawesome/free-solid-svg-icons';
import './AuthForm.css';

const AuthForm = () => {
  // State for form mode (signin/signup)
  const [isSignInMode, setIsSignInMode] = useState(true);
  
  // State for form inputs
  const [signInData, setSignInData] = useState({
    username: '',
    password: ''
  });
  
  const [signUpData, setSignUpData] = useState({
    username: '',
    phone: '',
    password: '',
    repeatPassword: ''
  });

  // Handle sign in form input changes
  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle sign up form input changes
  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle sign in submission
  const handleSignInSubmit = (e) => {
    e.preventDefault();
    if (signInData.username === "med") {
      console.log("It is correct");
      // Add your authentication logic here
    }
  };

  // Handle sign up submission
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
  };

  return (
    <div className={`container ${!isSignInMode ? 'signin_mod' : ''}`}>
      <div className="signin-signup">
        {/* Sign In Form */}
        <form className="signin" onSubmit={handleSignInSubmit}>
          <h1 className="title">Sign In</h1>
          <div className="input-field">
            <FontAwesomeIcon icon={faUser} />
            <input 
              type="text" 
              name="username"
              placeholder="Username" 
              value={signInData.username}
              onChange={handleSignInChange}
            />
          </div>
          <div className="input-field">
            <FontAwesomeIcon icon={faLock} />
            <input 
              type="password" 
              name="password"
              placeholder="Password" 
              value={signInData.password}
              onChange={handleSignInChange}
            />
          </div>
          <button type="submit" className="btn">Login</button>
        </form>

        {/* Sign Up Form */}
        <form className="signup" onSubmit={handleSignUpSubmit}>
          <h1 className="title">Sign Up</h1>
          <div className="input-field">
            <FontAwesomeIcon icon={faUser} />
            <input 
              type="text" 
              name="username"
              placeholder="Username" 
              value={signUpData.username}
              onChange={handleSignUpChange}
            />
          </div>
          <div className="input-field">
            <FontAwesomeIcon icon={faPhone} />
            <input 
              type="text" 
              name="phone"
              placeholder="Phone Number" 
              value={signUpData.phone}
              onChange={handleSignUpChange}
            />
          </div>
          <div className="input-field">
            <FontAwesomeIcon icon={faLock} />
            <input 
              type="password" 
              name="password"
              placeholder="Password" 
              value={signUpData.password}
              onChange={handleSignUpChange}
            />
          </div>
          <div className="input-field">
            <FontAwesomeIcon icon={faLock} />
            <input 
              type="password" 
              name="repeatPassword"
              placeholder="Repeat Password" 
              value={signUpData.repeatPassword}
              onChange={handleSignUpChange}
            />
          </div>
          <button type="submit" className="btn">Sign Up</button>
        </form>
      </div>

      <div className="panels">
        <div className={`panel left ${!isSignInMode ? 'active' : ''}`}>
          <h2>Already have an account?</h2>
          <button 
            className="btn" 
            onClick={() => setIsSignInMode(true)}
          >
            Sign In
          </button>
        </div>
        <div className={`panel right ${isSignInMode ? 'active' : ''}`}>
          <h2>New Account</h2>
          <button 
            className="btn" 
            onClick={() => setIsSignInMode(false)}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;