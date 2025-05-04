import React, { useState } from 'react';
import "./signin.css";

  return (
    <div className={`container ${!isSignInMode ? 'signin_mod' : ''}`}>
      <div className="signin-signup">
        {/* Sign In Form */}
        <form className="signin" onSubmit={handleSignInSubmit}>
          <h1 className="title">Sign In</h1>
          <div className="input-field">
            <span className="icon">{userIcon}</span>
            <input 
              type="text" 
              name="username"
              placeholder="Username" 
              value={signInData.username}
              onChange={handleSignInChange}
            />
          </div>
          <div className="input-field">
            <span className="icon">{lockIcon}</span>
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
            <span className="icon">{userIcon}</span>
            <input 
              type="text" 
              name="username"
              placeholder="Username" 
              value={signUpData.username}
              onChange={handleSignUpChange}
            />
          </div>
          <div className="input-field">
            <span className="icon">{phoneIcon}</span>
            <input 
              type="text" 
              name="phone"
              placeholder="Phone Number" 
              value={signUpData.phone}
              onChange={handleSignUpChange}
            />
          </div>
          <div className="input-field">
            <span className="icon">{lockIcon}</span>
            <input 
              type="password" 
              name="password"
              placeholder="Password" 
              value={signUpData.password}
              onChange={handleSignUpChange}
            />
          </div>
          <div className="input-field">
            <span className="icon">{lockIcon}</span>
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
          <button className="btn" onClick={() => setIsSignInMode(true)}>
            Sign In
          </button>
        </div>
        <div className={`panel right ${isSignInMode ? 'active' : ''}`}>
          <h2>New Account</h2>
          <button className="btn" onClick={() => setIsSignInMode(false)}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
