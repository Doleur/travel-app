import React, { useState, useContext } from 'react';
import { signIn, signUp } from '../../utilities/travel.service';
import { node } from 'prop-types';

const AuthenticationContext = React.createContext();

export const useAuthentication = () => {
  return useContext(AuthenticationContext);
};

export const AuthenticationProvider = ({ children }) => {
  const [signInOpened, updateSignInOpened] = useState(false);
  const [signUpOpened, updateSignUpOpened] = useState(false);
  const [isUserLoggedIn, updateIsUserLoggedIn] = useState(
    localStorage.getItem('accessToken')
  );
  const [errors, updateErrors] = useState(undefined);

  const handleAuthentication = (action, formData, successCallback) => {
    if (action === 'signin') {
      signIn(formData)
        .then((response) => {
          localStorage.setItem('accessToken', response.data.accessToken);
          updateSignInOpened(false);
          updateIsUserLoggedIn(true);
          successCallback();
        })
        .catch((err) => updateErrors(err.response.data.message));
    } else if (action === 'signup') {
      signUp(formData)
        .then(() => {
          updateSignUpOpened(false);
          successCallback();
        })
        .catch((err) => updateErrors(err.response.data.message));
    } else {
      updateErrors('Something went wrong!');
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        signInOpened,
        updateSignInOpened,
        signUpOpened,
        updateSignUpOpened,
        handleAuthentication,
        errors,
        updateErrors,
        isUserLoggedIn,
        updateIsUserLoggedIn
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

AuthenticationProvider.propTypes = {
  children: node.isRequired
};
