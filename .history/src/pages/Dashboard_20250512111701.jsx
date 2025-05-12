import React, { useState } from 'react';
import './styles/Dashboard.css';

function App() {
  const [leftVisible, setLeftVisible] = useState(true);

  const toggleLeftColumn = () => {
    setLeftVisible(!leftVisible);
  };

  // Sample folder data
  const folders = [
    { name: 'Documents', files: 24, color: '#FF9AA2' },
    { name: 'Images', files: 156, color: '#FFB7B2' },
    { name: 'Videos', files: 32, color: '#FFDAC1' },
    { name: 'Music', files: 89, color: '#E2F0CB' },
    { name: 'Downloads', files: 42, color: '#B5EAD7' },
    { name: 'Projects', files: 17, color: '#C7CEEA' },
    { name: 'Project1', files: 20, color: '#C7CEEA' },
    { name: 'Project2', files: 37, color: '#C7CEEA' },
    { name: 'Projects', files: 17, color: '#C7CEEA' },
  ];

  return (
    <div className="app-container">
      {/* Fixed Header */}
      <div className="top-header">
        <div className="header-left">MyApp</div>
        <div className="header-center">
          <input type="text" placeholder="Search..." className="search-bar" />
        </div>
        <div className="header-right">
          <div className="profile-text">Profile</div>
          <div className="profile-pic"></div>
        </div>
      </div>

      <div className="main-content">
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

        <div className={`middle-column ${leftVisible ? '' : 'expanded'}`}>
          <div className="folders-container">
            {folders.map((folder, index) => (
              <div key={index} className="folder-item">
                <div 
                  className="folder-icon" 
                  style={{ backgroundColor: folder.color }}
                >
                  <svg viewBox="0 0 24 24" width="48" height="48">
                    <path 
                      fill="#FFFFFF" 
                      d="M10,4H4C2.89,4,2,4.89,2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" 
                    />
                  </svg>
                </div>
                <div className="folder-name">{folder.name}</div>
                <div className="file-count">{folder.files} files</div>
              </div>
            ))}
          </div>
        </div>
        <div className="right-column"></div>
      </div>
    </div>
  );
}

export default App;