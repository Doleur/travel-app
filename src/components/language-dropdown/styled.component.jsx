import styled from 'styled-components';
import { Form } from 'react-bootstrap';

export const LanguageDropdownWrapper = styled(Form.Group).attrs({
  className: 'form-group'
})`
  margin: 0 10px 0 0;
`;

export const Language = styled.option`
  padding: 0.5rem;
`;
