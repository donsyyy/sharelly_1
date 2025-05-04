import React from 'react';
import "./signin.css";


const PageName = () => {
  return (
    <div className="fullscreen">

        <div className=" child left-container">
          <div className="top-left">
            <img src="./logo.png" />
            <p>SHARELY</p>
          </div>
        </div>
        <div className="child right-container">
          <div className="header">
            <h2>User</h2>
          </div>
          <div className="footer">
            <div className="2buttons">
              <div className="buttoon" id="sign-in">SIGN IN</div>
              <div className="buttoon" id="sign-up">SIGN UP</div>
            </div>


          </div>
        </div>

    </div>
  );
};

export default PageName;