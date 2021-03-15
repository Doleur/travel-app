import styled from 'styled-components';

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 300px;
  border: 2px solid #000;
  margin: 0.5rem;
  border-radius: 25px;
  text-align: center;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
    box-shadow: 1px 4px 12px rgb(107, 107, 107);
  }
`;
