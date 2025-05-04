import React, { useState} from 'react';
import "./signin.css";


const PageName = () => {
  const [isChecked, setIsChecked] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: ''
  });

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

  return (
    <div className="fullscreen">
      <div className="parent-container">
        <div className="child left-container">
          <div className="top-left">
            
          </div>
        </div>

        <div className="child right-container">
          <div className="top-right">
            <h1>Create an account</h1>
            <h5>Already have an account? <span className='login-underlined'>Log in</span></h5>
            <div className="info-inputs">
              <div className="first-last-name">
                <input  type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        required
                  />
                <input  type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        required
                  />
              </div>
              <div className="email-password-inputs">
                <input  type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                  />
                <input  type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter Password"
                        required
                  />
                <input  type="password"
                        id="retyped-password"
                        name="retyped-password"
                        value={formData.retyped-password}
                        onChange={handleChange}
                        placeholder="Re-enter Password"
                        required
                  />
              </div>
              <h6>

              </h6>
            </div>

            <div className="terms-container">
              <input
                type="checkbox"
                id="terms-checkbox"
                className="terms-checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <label htmlFor="terms-checkbox" className="terms-label">
                I agree to the{' '}
                <a href="/terms" className="terms-link">
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageName;