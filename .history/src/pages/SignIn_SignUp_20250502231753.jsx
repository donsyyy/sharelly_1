import React from 'react';

const PageName = () => {
  return (
    <div className="container"> 
        <div className="signin-signup">
            <form className="signin"> 
                <h1 className="title">sign in</h1>
                <div className="input-field"> 
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Username" id="user">
                </div>
                <div className="input-field"> 
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="password" id="pass">
                </div>
                <input type="submit" value="Login" className="btn" id="btnlogin">
            </form> 


            <form className="signup"> 
                <h1 className="title">sign up</h1>
                <div className="input-field"> 
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Username">
                </div>
                <div className="input-field"> 
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Num de tel">
                </div>
                <div className="input-field"> 
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="password">
                </div>
                <div className="input-field"> 
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="repeat password">
                </div>
                <input type="submit" value="sign up" className="btn">
            </form>

        </div>
        <div className="panels">
            <div className="panel left ">
                <h2 >alredy have in account</h2>
                <button className="btn" id="btnin"> signin </button>
            </div>
            <div className="panel right">
                <h2 >new account</h2>
                <button className="btn" id="btnup"> signup </button>
            </div>
        </div>
    </div>
  );
};

export default PageName;
