// app.jsx
import React from 'react';
import LandingPage from './pages/LandingPage'; // Adjust the path if needed
import Signup from './pages/SignIn_SignUp'

function App() {
  return (
    <div className="App">
      <Signup /> {/* This renders your Page component directly */}
    </div>
  );
}

export default App;
