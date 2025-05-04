import React from 'react';

const PageName = () => {
  return (
    <div>
<div className="container"> 
  <div className="signin-signup">
    {/* Sign-In Form */}
    <form className="signin" onSubmit={(e) => e.preventDefault()}> 
      <h1 className="title">Sign In</h1>
      <div className="input-field"> 
        <i className="fas fa-user"></i>
        <input 
          type="text" 
          placeholder="Username" 
          id="user"
          aria-label="Username"
        />
      </div>
      <div className="input-field"> 
        <i className="fas fa-lock"></i>
        <input 
          type="password" 
          placeholder="Password" 
          id="pass"
          aria-label="Password"
        />
      </div>
      <button type="submit" className="btn" id="btnlogin">Login</button>
    </form> 

    {/* Sign-Up Form */}
    <form className="signup" onSubmit={(e) => e.preventDefault()}> 
      <h1 className="title">Sign Up</h1>
      <div className="input-field"> 
        <i className="fas fa-user"></i>
        <input 
          type="text" 
          placeholder="Username" 
          aria-label="Username"
        />
      </div>
      <div className="input-field"> 
        <i className="fas fa-phone"></i>
        <input 
          type="tel" 
          placeholder="Phone Number" 
          aria-label="Phone Number"
        />
      </div>
      <div className="input-field"> 
        <i className="fas fa-lock"></i>
        <input 
          type="password" 
          placeholder="Password" 
          aria-label="Password"
        />
      </div>
      <div className="input-field"> 
        <i className="fas fa-lock"></i>
        <input 
          type="password" 
          placeholder="Repeat Password" 
          aria-label="Repeat Password"
        />
      </div>
      <button type="submit" className="btn">Sign Up</button>
    </form>
  </div>

  {/* Toggle Panels */}
  <div className="panels">
    <div className="panel left">
      <h2>Already have an account?</h2>
      <button className="btn" id="btnin">Sign In</button>
    </div>
    <div className="panel right">
      <h2>New Account</h2>
      <button className="btn" id="btnup">Sign Up</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default PageName;