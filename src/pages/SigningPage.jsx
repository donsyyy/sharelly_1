import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react'; // You need to install lucide-react or change these lines
import "./styles/SigningPage.css";

const PageName = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goToForgotPasswd = () => { navigate("/forgotpasswd") }

  const [isSwapped, setIsSwapped] = useState(location.pathname === '/signin');
  const handleToggle = () => {
    if (isSwapped) {
      navigate('/signup');
      setIsSwapped(false);
    } else {
      navigate('/signin');
      setIsSwapped(true);
    }
  };

  useEffect(() => {
    if (location.state && typeof location.state.showSignIn === 'boolean') {
      setIsSwapped(location.state.showSignIn);
    }
  }, [location.state]);

  const [isChecked, setIsChecked] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    retyped: ''
  });

  // Show/hide password states
  const [showPassword, setShowPassword] = useState(false);
  const [showRetyped, setShowRetyped] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    // Add your form submission logic here
  };

  const inputsNotBlank = formData.firstName && formData.lastName && formData.email;
  const passwordsMatch = formData.password && formData.retyped && (formData.password === formData.retyped);
  const canSignup = passwordsMatch && inputsNotBlank && isChecked;
  const canSignin = formData.email && formData.password;
  return (
    <div className="fullscreen">
      {!isSwapped ? (
        <>
          <div className="parent-container">
            <div className="child left-container">
              <div className="top-left">
                <img src="./logo.png" alt="Logo" />
                <h1>SHARELY</h1>
              </div>
            </div>
            
            <div className="child right-container">
              <div className="top-right">
                <h1>Create an account</h1>
                <h5>
                  Already have an account?{' '}
                  <a href="#" onClick={handleToggle} className="signin-link">
                    Sign In
                  </a>
                </h5>
                <form onSubmit={handleSubmit}>
                  <div className="info-inputs">
                    <div className="first-last-name">
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        required
                      />
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        required
                      />
                    </div>
                    <div className="email-password-inputs">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                      />
                      <div className="password-input-container">
                        <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Enter Password"
                          required
                        />
                        <button
                          type="button"
                          className="eye-icon-btn"
                          onClick={() => setShowPassword((prev) => !prev)}
                          tabIndex={-1}
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                      <div className="password-input-container">
                        <input
                          type={showRetyped ? "text" : "password"}
                          id="retyped-password"
                          name="retyped"
                          value={formData.retyped}
                          onChange={handleChange}
                          placeholder="Re-enter Password"
                          required
                        />
                        <button
                          type="button"
                          className="eye-icon-btn"
                          onClick={() => setShowRetyped((prev) => !prev)}
                          tabIndex={-1}
                        >
                          {showRetyped ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="terms-container">
                    <input
                      type="checkbox"
                      id="terms-checkbox"
                      className="terms-checkbox"
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                      required
                    />
                    <label htmlFor="terms-checkbox" className="terms-label">
                      I agree to the{' '}
                      <a href="/terms" target="_blank" className="terms-link">
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                  <button type="submit" className="signup-button" disabled={!canSignup} onClick={goToForgotPasswd}>
                    Create account
                  </button>
                </form>
                <div className="divider-with-text">
                  <span>Or register with</span>
                </div>
                <div className="google-apple-button">
                  <div className="google-button">
                    <img src="/google-icon.png" alt="Google" />
                    <h5>Google</h5>
                  </div>
                  <div className="apple-button">
                    <img src="/apple-icon.png" alt="Apple" />
                    <h5>Apple</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div style={{ flexDirection: 'row-reverse' }} className="parent-container">
            <div
              style={{
                transform: 'rotate(180deg)',
                transformOrigin: 'center center'
              }}
              className="child left-container"
            >
              <div className="top-left">
                <img src="./logo.png" alt="Logo" />
                <h1>SHARELY</h1>
              </div>
            </div>

            <div className="child right-container">
              <div className="top-right">
                <h1>You again?</h1>
                <h5>
                  Don't have an account yet?{' '}
                  <a href="#" onClick={handleToggle} className="signin-link">
                    Sign Up
                  </a>
                </h5>
                <form onSubmit={handleSubmit}>
                  <div className="email-password-inputs">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                    />
                    <div className="password-input-container">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        required
                      />
                      <button
                        type="button"
                        className="eye-icon-btn"
                        onClick={() => setShowPassword((prev) => !prev)}
                        tabIndex={-1}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                  <div className="forgot-container">
                    <a
                      onClick={goToForgotPasswd}
                      className="terms-link"
                      style={{ cursor: 'pointer' }}
                    >
                      Forgot password?
                    </a>
                  </div>
                  <button type="submit" className="signup-button" disabled={!canSignin} onClick={goToForgotPasswd}>
                    Sign In
                  </button>
                </form>
                <div className="divider-with-text">
                  <span>Or sign in with</span>
                </div>
                <div className="google-apple-button">
                  <div className="google-button">
                    <img src="/google-icon.png" alt="Google" />
                    <h5>Google</h5>
                  </div>
                  <div className="apple-button">
                    <img src="/apple-icon.png" alt="Apple" />
                    <h5>Apple</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PageName;
