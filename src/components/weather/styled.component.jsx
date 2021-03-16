import styled from 'styled-components';

export const WeatherWrapper = styled.div`
  position: absolute;
  top: 0;
  left: -230px;
  width: 230px;
`;

export const WeatherCity = styled.div`
  width: 230px;
  padding: 10px 0;
  margin: 0 auto;
  border: 5px solid #1697ca;
  border-radius: 5px;
  font-size: 20px;
  text-align: center;
  text-shadow: black 0px 0px 10px;
`;

export const WeatherContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WeatherIcon = styled.i`
  width: 50%;
  font-size: 7rem;
  color: #1697ca;
`;

export const WeatherTemperature = styled.div`
  width: 50%;
  font-size: 40px;
  text-shadow: black 0px 0px 10px;
`;

export const WindAndHumidity = styled.div`
  text-align: left;
  color: black;
  font-weight: 800;
  font-size: 16px;
  text-shadow: black 0px 0px 10px;
`;

export const WeatherDescription = styled.div`
  width: 230px;
  font-size: 20px;
  text-align: center;
  padding: 7px 0;
  color: #ffffff;
  background-color: #1697ca;
  border-radius: 5px;
`;
