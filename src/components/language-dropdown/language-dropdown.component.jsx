import React from 'react';
import * as S from './styled.component';
import PropTypes from 'prop-types';

const LanguageDropdown = ({ updateLanguage }) => {
  return (
    <S.LanguageDropdown
      onChange={(event) => updateLanguage(event.target.value)}
    >
      <S.Language value="en">English</S.Language>
      <S.Language value="ru">Русский</S.Language>
      <S.Language value="by">Беларускi</S.Language>
    </S.LanguageDropdown>
  );
};

LanguageDropdown.propTypes = {
  updateLanguage: PropTypes.func
};

export default LanguageDropdown;
