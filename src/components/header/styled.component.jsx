import styled from 'styled-components';
import { Button, Navbar } from 'react-bootstrap';

export const HeaderWrapper = styled(Navbar)`
  padding: 1rem;
  background-color: #b9c3ea;
  border-radius: 25px;
`;

export const Logo = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 25px;
  overflow: hidden;
  border: 2px solid #2f349e;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const AuthButton = styled(Button)`
  :not(:last-child) {
    margin-right: 5px;
  }
`;
