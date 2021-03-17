import React from 'react';
import AuthenticationModel from '../AuthenticationModal';
import { useAuthentication } from '../contexts/AuthenticationContext';
import { string } from 'prop-types';

const Authentication = ({ language }) => {
  const {
    signInOpened,
    updateSignInOpened,
    signUpOpened,
    updateSignUpOpened
  } = useAuthentication();

  return (
    <>
      <AuthenticationModel
        language={language}
        action="sign_in"
        isOpen={signInOpened}
        onClose={() => updateSignInOpened(false)}
      />
      <AuthenticationModel
        language={language}
        action="sign_up"
        isOpen={signUpOpened}
        onClose={() => updateSignUpOpened(false)}
      />
    </>
  );
};

Authentication.propTypes = {
  language: string.isRequired
};

export default Authentication;
