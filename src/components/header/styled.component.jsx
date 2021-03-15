import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  background-color: #b9c3ea;
  border-radius: 25px;
`;

export const Logo = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 25px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Quote = styled.div`
  font-size: 2rem;
  width: 20%;
  text-align: center;
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
