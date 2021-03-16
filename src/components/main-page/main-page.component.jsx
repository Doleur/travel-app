import React from 'react';
import Item from './../item/item.component';
import AuthenticationModel from '../AuthenticationModal';
import { useAuthentication } from '../contexts/AuthenticationContext';
import PropTypes from 'prop-types';

import * as S from './styled.component';

const MainPage = ({ searchValue, language, allCountries }) => {
  const {
    signInOpened,
    updateSignInOpened,
    signUpOpened,
    updateSignUpOpened
  } = useAuthentication();

  const countries = allCountries
    .filter((country) =>
      country.name[language].toLowerCase().includes(searchValue.toLowerCase())
    )
    .map((country, i) => {
      return <Item key={i} country={country} language={language} />;
    });

  return (
    <S.MainPageWrapper>
      {countries}
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
    </S.MainPageWrapper>
  );
};

MainPage.propTypes = {
  searchValue: PropTypes.string,
  language: PropTypes.string,
  allCountries: PropTypes.array
};

export default MainPage;
