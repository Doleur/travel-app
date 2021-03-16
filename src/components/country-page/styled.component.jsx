import styled from 'styled-components';

export const CountryPageWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 195px);
  padding: 2rem;
  h2 {
    text-align: center;
  }
  p {
    font-family: 'Raleway', sans-serif;
  }
`;

export const Container = styled.div`
  display: flex;
  padding: 1rem;
`;

export const ContainerWeatherClock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  align-items: center;
  justify-content: space-around;
`;

export const ContainerImageHead = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  img {
    width: 100%;
  }
`;
