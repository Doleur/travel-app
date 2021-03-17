import styled, { css } from 'styled-components';
import { Button, Navbar, Image } from 'react-bootstrap';

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

export const SearchButton = styled(Button)`
  @media screen and (max-width: 991px) {
    margin: 10px 0;
  }
`;

export const AuthButton = styled(Button)`
  :not(:last-child) {
    margin-right: 5px;
  }

  @media screen and (max-width: 991px) {
    font-size: 14px;

    ${({ logout }) =>
      logout &&
      css`
        margin-top: 10px;
      `};
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 20px;

  @media screen and (max-width: 991px) {
    margin-left: 0;
    margin-right: 20px;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled(Image)`
  width: 50px;
  height: 50px;
  margin-right: 5px;
  margin-bottom: 5px;

  @media screen and (max-width: 991px) {
    width: 40px;
    height: 40px;
  }
`;

export const Username = styled.span`
  font-size: 20px;

  @media screen and (max-width: 991px) {
    font-size: 18px;
  }
`;
