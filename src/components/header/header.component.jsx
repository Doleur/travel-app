import React from 'react';
import * as S from './styled.component';
import { Link } from 'react-router-dom';

import Search from './../search/search.component';
import LanguageDropdown from './../language-dropdown/language-dropdown.component';

const Header = () => {
  return (
    <S.HeaderWrapper>
      <Link to="/">
        <S.Logo>logo</S.Logo>
      </Link>
      <Search />
      <LanguageDropdown />
    </S.HeaderWrapper>
  );
};

export default Header;
