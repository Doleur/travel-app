import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoTravels from './../../assets/img/logo-travel.jpg';
import LanguageDropdown from './../language-dropdown/language-dropdown.component';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import {
  searchTranslate,
  AuthenticationLabels
} from '../../constants/constans';
import { useAuthentication } from '../contexts/AuthenticationContext';
import PropTypes from 'prop-types';

import * as S from './styled.component';

import { useLocation } from 'react-router-dom';

const Header = ({
  searchValue,
  updateSearchValue,
  language,
  updateLanguage
}) => {
  const {
    updateSignInOpened,
    updateSignUpOpened,
    currentUser,
    updateCurrentUser,
    userFetched
  } = useAuthentication();

  const [isMobileOrTablet, udpateIsMobileOrTablet] = useState(
    window.innerWidth <= 991
  );

  const updateMediaQuery = () =>
    udpateIsMobileOrTablet(window.innerWidth <= 991);

  let input = React.createRef();
  const location = useLocation();

  const handleChange = (event) => updateSearchValue(event.target.value);

  const handleSubmit = (event) => {
    updateSearchValue(searchValue);
    event.preventDefault();
    input.current.blur();
  };

  const UserSection = () => (
    <S.UserSection>
      <div>
        <S.Avatar src={currentUser.photo_url} roundedCircle />
        <S.Username>{currentUser.username}</S.Username>
      </div>
      {!isMobileOrTablet && (
        <S.AuthButton
          onClick={() => {
            localStorage.removeItem('accessToken');
            updateCurrentUser(null);
          }}
        >
          {AuthenticationLabels.logout[language]}
        </S.AuthButton>
      )}
    </S.UserSection>
  );

  useEffect(() => {
    window.addEventListener('resize', updateMediaQuery);

    return () => {
      window.removeEventListener('resize', updateMediaQuery);
    };
  }, []);

  return (
    <S.HeaderWrapper expand="lg">
      <Navbar.Brand>
        <S.Logo>
          <Link to="/">
            <img src={logoTravels} alt="Logo" />
          </Link>
        </S.Logo>
      </Navbar.Brand>
      <S.MenuWrapper>
        {userFetched && currentUser && isMobileOrTablet && UserSection()}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </S.MenuWrapper>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {location.pathname === '/' && (
            <Form inline onSubmit={handleSubmit}>
              <FormControl
                ref={input}
                type="text"
                placeholder={searchTranslate[language]}
                value={searchValue}
                onChange={handleChange}
                autoComplete="off"
                autoFocus
                className="mr-sm-2"
              />
              <S.SearchButton variant="outline-success">
                {searchTranslate[language]}
              </S.SearchButton>
            </Form>
          )}
        </Nav>
        <LanguageDropdown updateLanguage={updateLanguage} language={language} />
        {isMobileOrTablet && (
          <S.AuthButton
            logout="true"
            onClick={() => {
              localStorage.removeItem('accessToken');
              updateCurrentUser(null);
            }}
          >
            {AuthenticationLabels.logout[language]}
          </S.AuthButton>
        )}
        {userFetched && !currentUser && (
          <div>
            <S.AuthButton
              variant="info"
              onClick={() => updateSignInOpened(true)}
            >
              {AuthenticationLabels.sign_in[language]}
            </S.AuthButton>
            <S.AuthButton onClick={() => updateSignUpOpened(true)}>
              {AuthenticationLabels.sign_up[language]}
            </S.AuthButton>
          </div>
        )}
        {userFetched && currentUser && !isMobileOrTablet && UserSection()}
      </Navbar.Collapse>
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
