import React, { useEffect, useState } from 'react';
import * as S from './styled.component';
import PropTypes from 'prop-types';
import { getWeather } from '../../utilities/travel.service';
import { weatherTranslate } from '../../constants/constans';

const Weather = ({ city, language }) => {
  const [weatherData, updateWeatherData] = useState({ main: {} });

  useEffect(() => {
    getWeather(city.en, language).then((response) => {
      updateWeatherData(response.data);
    });
  }, [language]);

  return (
    <S.WeatherWrapper>
      {weatherData.main.temp && (
        <>
          <S.WeatherCity>{city[language]}</S.WeatherCity>
          <S.WeatherContent>
            <S.WeatherIcon className={`owf owf-${weatherData.weather[0].id}`} />
            <S.WeatherTemperature>
              {`${weatherData.main.temp.toFixed(0)}°C`}{' '}
            </S.WeatherTemperature>
          </S.WeatherContent>
          <S.WindAndHumidity>
            <div>{`${weatherTranslate[language].wind}: ${weatherData.wind.speed} м/с`}</div>
            <div>{`${weatherTranslate[language].humidity}: ${weatherData.main.humidity} %`}</div>
          </S.WindAndHumidity>
          <S.WeatherDescription>
            {weatherData.weather[0].description}
          </S.WeatherDescription>
        </>
      )}
    </S.WeatherWrapper>
  );
};

Weather.propTypes = {
  city: PropTypes.object,

  language: PropTypes.string
};

export default Weather;
