import React from 'react';
import "./sign_in";
import "./signin";


const PageName = () => {
  return (
    <div>
      <div class="container"> 
        <div class="signin-signup">
            <form class="signin"> 
                <h1 class="title">sign in</h1>
                <div class="input-field"> 
                    <i class="fas fa-user"></i>
                    <input type="text" placeholder="Username" id="user">
                </div>
                <div class="input-field"> 
                    <i class="fas fa-lock"></i>
                    <input type="password" placeholder="password" id="pass">
                </div>
                <input type="submit" value="Login" class="btn" id="btnlogin">
            </form> 


            <form class="signup"> 
                <h1 class="title">sign up</h1>
                <div class="input-field"> 
                    <i class="fas fa-user"></i>
                    <input type="text" placeholder="Username">
                </div>
                <div class="input-field"> 
                    <i class="fas fa-user"></i>
                    <input type="text" placeholder="Num de tel">
                </div>
                <div class="input-field"> 
                    <i class="fas fa-lock"></i>
                    <input type="password" placeholder="password">
                </div>
                <div class="input-field"> 
                    <i class="fas fa-lock"></i>
                    <input type="password" placeholder="repeat password">
                </div>
                <input type="submit" value="sign up" class="btn">
            </form>

        </div>
        <div class="panels">
            <div class="panel left ">
                <h2 >alredy have in account</h2>
                <button class="btn" id="btnin"> signin </button>
            </div>
            <div class="panel right">
                <h2 >new account</h2>
                <button class="btn" id="btnup"> signup </button>
            </div>
        </div>
    </div>
    </div>
  );
};

export default PageName;