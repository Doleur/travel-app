import React from 'react';
import * as S from './styled.component';

const LanguageDropdown = () => {
  return (
    <S.LanguageDropdown>
      <S.Language>English</S.Language>
      <S.Language>Русский</S.Language>
      <S.Language>Беларускi</S.Language>
    </S.LanguageDropdown>
  );
};

export default LanguageDropdown;
