import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import * as S from './styled.component';

const LanguageDropdown = ({ updateLanguage, language }) => {
  return (
    <S.LanguageDropdownWrapper>
      <Form.Control
        as="select"
        value={language}
        onChange={(event) => updateLanguage(event.target.value)}
      >
        <S.Language value="en">English</S.Language>
        <S.Language value="ru">Русский</S.Language>
        <S.Language value="by">Беларускi</S.Language>
      </Form.Control>
    </S.LanguageDropdownWrapper>
  );
};

LanguageDropdown.propTypes = {
  updateLanguage: PropTypes.func,
  language: PropTypes.string
};

export default LanguageDropdown;
