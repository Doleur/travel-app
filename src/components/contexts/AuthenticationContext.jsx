import React, { useState, useContext, useEffect } from 'react';
import { signIn, signUp, getCurrentUser } from '../../utilities/travel.service';
import { node } from 'prop-types';

const AuthenticationContext = React.createContext();

export const useAuthentication = () => {
  return useContext(AuthenticationContext);
};

export const AuthenticationProvider = ({ children }) => {
  const [userFetched, updateUserFetched] = useState(null);
  const [currentUser, updateCurrentUser] = useState(null);
  const [signInOpened, updateSignInOpened] = useState(false);
  const [signUpOpened, updateSignUpOpened] = useState(false);
  const [errors, updateErrors] = useState(undefined);

  const handleAuthentication = (action, formData, successCallback) => {
    if (action === 'signin') {
      signIn(formData)
        .then((response) => {
          const { username, photo_url } = response.data;

          localStorage.setItem('accessToken', response.data.accessToken);

          updateCurrentUser({ username, photo_url });
          updateSignInOpened(false);
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

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      getCurrentUser(localStorage.getItem('accessToken')).then((response) => {
        const { username, photo_url } = response.data;

        updateCurrentUser({ username, photo_url });
        updateUserFetched(true);
      });
    } else {
      updateUserFetched(true);
    }
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        currentUser,
        errors,
        handleAuthentication,
        signInOpened,
        signUpOpened,
        updateCurrentUser,
        updateErrors,
        updateSignInOpened,
        updateSignUpOpened,
        userFetched
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

AuthenticationProvider.propTypes = {
  children: node.isRequired
};
