import React from 'react';
import * as S from './styled.component';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import logoTravels from './../../assets/img/logo-travel.jpg';
import LanguageDropdown from './../language-dropdown/language-dropdown.component';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
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
    <S.HeaderWrapper expand="lg">
      <Navbar.Brand>
        <S.Logo>
          <Link to="/">
            <img src={logoTravels} alt="Logo" />
          </Link>
        </S.Logo>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
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
            <Button variant="outline-success">Search</Button>
          </Form>
        </Nav>
        <LanguageDropdown updateLanguage={updateLanguage} language={language} />
        {!isUserLoggedIn && (
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
