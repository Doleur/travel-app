import React from 'react';
import * as S from './styled.component';

import logo from './../../assets/img/rs_school_js.svg';

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.AuthorWrapper>
        <a href="https://github.com/Alena-Zykava"> Alena-Zykava </a>
        <a href="https://github.com/aliakseibabich">aliakseibabich</a>
        <a href="https://github.com/AndryGinger">AndryGinger</a>
        <a href="https://github.com/doleur">doleur</a>
      </S.AuthorWrapper>
      <span>2021</span>
      <S.FooterLogoRss href="https://rs.school/js/">
        <img src={logo} alt="RSS" />
      </S.FooterLogoRss>
    </S.FooterWrapper>
  );
};

export default Footer;
