import styled from 'styled-components';

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 220px;
  width: 300px;
  border: 2px solid #2f349e;
  margin: 0.5rem;
  border-radius: 25px;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  :hover {
    transform: scale(1.05);
    box-shadow: 1px 4px 12px rgb(107, 107, 107);
  }
`;

export const CountryImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const CountryCopy = styled.div`
  position: absolute;
  bottom: 10%;
  left: 0;
  width: 100%;
  color: #fff;
  text-align: center;
  text-shadow: 2px 2px #000;
`;
