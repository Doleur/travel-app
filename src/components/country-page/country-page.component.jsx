import React, { useEffect, useState } from 'react';
import * as S from './styled.component';
import PropTypes from 'prop-types';
import VideoYouTube from './../video-youtube/video-yuotube';
import { getSpecificCountry } from '../../utilities/travel.service';

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
          <h2>{name[language]}</h2>
          <img src={photo_url} alt={name[language]} />
          <h4>{capital_name[language]}</h4>
          <p>{description[language]}</p>
          <div>Photo-slider</div>
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
