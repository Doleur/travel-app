import React, { useEffect, useState } from 'react';
import * as S from './styled.component';
import PropTypes from 'prop-types';
import { getSpecificCountry } from '../../utilities/travel.service';
import VideoYouTube from './../video-youtube/video-yuotube';
import SightGallery from './../sight-gallery/sight-gallery.component';
import Weather from '../weather/weather.component';
import Clock from '../clock/clock.component';

const CountryPage = ({ countryId, language }) => {
  const [country, updateCountry] = useState({});

  const { name, capital_name, description, photo_url, Attractions } = country;

  useEffect(() => {
    getSpecificCountry(countryId).then((response) => {
      updateCountry(response.data);
    });
  }, []);

  return (
    <S.CountryPageWrapper>
      {country.id && (
        <>
          <Weather city={capital_name} language={language} />
          <Clock language={language} city={capital_name.en}/>
          <h2>{name[language]}</h2>
          <img src={photo_url} alt={name[language]} />
          <h4>{capital_name[language]}</h4>
          <p>{description[language]}</p>
          <div>Photo-slider</div>
          <SightGallery />
          <VideoYouTube />
          <div>Map of country</div>
        </>
      )}
    </S.CountryPageWrapper>
  );
};

CountryPage.propTypes = {
  countryId: PropTypes.string,
  language: PropTypes.string
};

export default CountryPage;
