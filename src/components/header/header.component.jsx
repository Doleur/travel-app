import React from 'react';
import * as S from './styled.component';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// import Search from './../search/search.component';
import LanguageDropdown from './../language-dropdown/language-dropdown.component';

const Header = ({ searchValue, updateSearchValue }) => {
  return (
    <S.HeaderWrapper>
      <Link to="/">
        <S.Logo>logo</S.Logo>
      </Link>
      <S.Search
        type="text"
        placeholder="search"
        value={searchValue}
        onChange={(event) => updateSearchValue(event.target.value)}
      />
      <LanguageDropdown />
    </S.HeaderWrapper>
  );
};

Header.propTypes = {
  searchValue: PropTypes.string,
  updateSearchValue: PropTypes.func
};

export default Header;
