import React from 'react';
import * as S from './styled.component';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import logoTravels from './../../assets/img/logo-travel.jpg';
import LanguageDropdown from './../language-dropdown/language-dropdown.component';
import Button from 'react-bootstrap/Button';
import {
  searchTranslate,
  AuthenticationLabels
} from '../../constants/constans';
import { useAuthentication } from '../contexts/AuthenticationContext';

const Header = ({
  searchValue,
  updateSearchValue,
  language,
  updateLanguage
}) => {
  const {
    updateSignInOpened,
    updateSignUpOpened,
    isUserLoggedIn,
    updateIsUserLoggedIn
  } = useAuthentication();

  let input = React.createRef();

  const handleChange = (event) => updateSearchValue(event.target.value);

  const handleSubmit = (event) => {
    updateSearchValue(searchValue);
    event.preventDefault();
    input.current.blur();
  };

  return (
    <S.HeaderWrapper>
      <S.Logo>
        <Link to="/">
          <img src={logoTravels} alt="Logo"/>
        </Link>
      </S.Logo>
      <div>
        <S.Search onSubmit={handleSubmit}>
          <input
            ref={input}
            type="search"
            placeholder={searchTranslate[language]}
            value={searchValue}
            onChange={handleChange}
            autoComplete="off"
            autoFocus
          />
          <button type="submit" />
        </S.Search>
      </div>
      <LanguageDropdown updateLanguage={updateLanguage} />
      {!isUserLoggedIn && (
        <>
          <Button onClick={() => updateSignInOpened(true)}>
            {AuthenticationLabels.sign_in[language]}
          </Button>
          <Button onClick={() => updateSignUpOpened(true)}>
            {AuthenticationLabels.sign_up[language]}
          </Button>
        </>
      )}
      {isUserLoggedIn && (
        <Button
          onClick={() => {
            localStorage.removeItem('accessToken');
            updateIsUserLoggedIn(false);
          }}
        >
          {AuthenticationLabels.logout[language]}
        </Button>
      )}
    </S.HeaderWrapper>
  );
};

Header.propTypes = {
  searchValue: PropTypes.string,
  updateSearchValue: PropTypes.func,
  language: PropTypes.string,
  updateLanguage: PropTypes.func
};

export default Header;
