import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  background-color: red;
`;

export const Logo = styled.div`
  background-color: green;
  font-size: 3rem;
`;

export const Search = styled.form`
  position: relative;
  width: 300px;
  height: 42px;
  input {
    border: none;
    outline: none;
    border-radius: 3px;
    width: 260px;
    height: 100%;
    background: #f9f0da;
    padding-left: 15px;
  }
  button {
    border: none;
    outline: none;
    border-radius: 3px;
    width: 40px;
    height: 100%;
    background: #00ffff;
    cursor: pointer;
    &:before {
      content: url(../../assets/img/search.svg);
      font-size: 16px;
      color: #f9f0da;
    }
  }
`;
