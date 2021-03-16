import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

import * as S from './styled.component';

const LanguageDropdown = ({ updateLanguage }) => {
  return (
    <S.LanguageDropdownWrapper>
      <Form.Control
        as="select"
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
  updateLanguage: PropTypes.func
};

export default LanguageDropdown;
