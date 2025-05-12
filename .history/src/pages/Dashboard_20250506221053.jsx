import React, { useState } from 'react';
import './styles/Dashboard.css';

function App() {
  const [leftVisible, setLeftVisible] = useState(true);

  const toggleLeftColumn = () => {
    setLeftVisible(!leftVisible);
  };

  return (
    <div className="container">
      <div className={`left-column ${leftVisible ? '' : 'hidden'}`}>
        <div className="toggle-panel" onClick={toggleLeftColumn}>
          Toggle Panel
        </div>
        <div className="left-content">
          <div className="left-part">
            <div className="part-header">Part 1</div>
            <div className="sub-section">Sub Section 1</div>
            <div className="sub-section">Sub Section 2</div>
            <div className="sub-section">Sub Section 3</div>
          </div>
          <div className="left-part">
            <div className="part-header">Part 2</div>
            <div className="sub-section">Sub Section 1</div>
            <div className="sub-section">Sub Section 2</div>
          </div>
          <div className="left-part">
            <div className="part-header">Part 3</div>
            <div className="sub-section">Sub Section 1</div>
            <div className="sub-section">Sub Section 2</div>
            <div className="sub-section">Sub Section 3</div>
          </div>
          <div className="left-part">
            <div className="part-header">Part 4</div>
            <div className="sub-section">Sub Section 1</div>
            <div className="sub-section">Sub Section 2</div>
          </div>
        </div>
      </div>
      
      <div 
        className={`toggle-button ${leftVisible ? '' : 'visible'}`} 
        onClick={toggleLeftColumn}
      >
        {leftVisible ? '◄' : '►'}
      </div>

      <div className="middle-column"></div>
      <div className="right-column"></div>
    </div>
  );
}

export default App;