import React, { useState } from 'react';
import SignIn from './SignIn';
import './signup.css';

function SignUp() {
  const [selectedMode, setSelectedMode] = useState(null);

  const handleModeSelect = (mode) => {
    setSelectedMode(mode);
  };

  const renderSignUpForm = () => {
    if (selectedMode === 'google') {
      return (
        <div className="sign-up-form google">
          {/* Add your Google Sign-Up content here */}
        </div>
      );
    } else if (selectedMode === 'email') {
      return (
        <div className="sign-up-form email">
        </div>
      );
    }
    return null;
  };

  return (
    <div className="body">
    <div className="doctor">
      <input placeholder="username or email" type="string"></input>
      <input placeholder="password" type="string"></input>
      <div className="button">
        <button className="email-button" onClick={() => handleModeSelect('email')}>
          Login
        </button>
        <button className="google-button" onClick={() => handleModeSelect('google')}>
          <SignIn />
        </button>
      </div>
      {renderSignUpForm()}
    </div>
    </div>
  );
}

export default SignUp;

