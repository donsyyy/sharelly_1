import React, { useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./styles/SigningPage.css";


const PageName = () => {
  const location = useLocation();
  const navigate = useNavigate();


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
              <img src="./logo.png" />
              <h1>SHARELY</h1>
            </div>
          </div>

          <div className="child right-container">
            <div className="top-right">
              <h1>Create an account</h1>
              <h5>Already have an account? {""}</h5>
              <div className="info-inputs">
                <div className="email-password-inputs">
                  <input  type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email"
                          required
                    />
                </div>
              </div>
            <div href="/signup-process" className="signup-button">
                Create account
          </div>
        </div>

          </div>
        </div>
    </div>
  );
};

export default PageName;
