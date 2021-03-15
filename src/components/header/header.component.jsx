import React from 'react';
import * as S from './styled.component';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LanguageDropdown from './../language-dropdown/language-dropdown.component';
import { searchTranslate } from '../../constants/constans';

const Header = ({
  searchValue,
  updateSearchValue,
  language,
  updateLanguage
}) => {
  let input = React.createRef();

  const handleChange = (event) => updateSearchValue(event.target.value);

  const handleSubmit = (event) => {
    updateSearchValue(searchValue);
    event.preventDefault();
    input.current.blur();
  };

  return (
    <S.HeaderWrapper>
      <Link to="/">
        <S.Logo>logo</S.Logo>
      </Link>
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
