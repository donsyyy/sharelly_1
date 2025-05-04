import React, { useState} from 'react';
import "./signin.css";


const PageName = () => {
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
                        placeholder="Password"
                        required
                  />
              </div>
              <h4></h4>
            </div>

            <div className="terms">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageName;