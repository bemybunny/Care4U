import React, { useState } from 'react';
import SignIn from './SignIn'
import SignupWithEmail from './SignupWithEmail'

function SignUp() {
  const [selectedMode, setSelectedMode] = useState(null);

  const handleModeSelect = (mode) => {
    setSelectedMode(mode);
  };
  const renderSignUpForm = () => {
    if (selectedMode === 'google') {
      return (
        <></>
      );
    } else if (selectedMode === 'email') {
      return (
        <div>
            <SignupWithEmail/>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <h1>Choose a Sign-Up Mode</h1>
      <div>
        <button onClick={() => handleModeSelect('google')}><SignIn/></button>
        <button onClick={() => handleModeSelect('email')}></button>
      </div>
      {renderSignUpForm()}
    </div>
  );
}

export default SignUp;
