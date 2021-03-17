import React from 'react';
import * as S from './styled.component';
import PropTypes from 'prop-types';

const LanguageDropdown = ({ updateLanguage, language }) => {
  return (
    <S.LanguageDropdown
      value={language}
      onChange={(event) => updateLanguage(event.target.value)}
    >
      <S.Language value="en">English</S.Language>
      <S.Language value="ru">Русский</S.Language>
      <S.Language value="by">Беларускi</S.Language>
    </S.LanguageDropdown>
  );
};

LanguageDropdown.propTypes = {
  updateLanguage: PropTypes.func,
  language: PropTypes.string
};

export default LanguageDropdown;
