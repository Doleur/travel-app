import React, { useEffect, useState } from 'react';
import * as S from './styled.component';
import PropTypes from 'prop-types';
import { getSpecificCountry } from '../../utilities/travel.service';
import VideoYouTube from './../video-youtube/video-yuotube';
import SightGallery from './../sight-gallery/sight-gallery.component';
import Weather from '../weather/weather.component';
import Clock from '../clock/clock.component';
import Map from '../map/map.component';
import Currency from './../currency/currency.component';

const CountryPage = ({ countryId, language }) => {
  const [country, updateCountry] = useState({});

  const {
    name,
    capital_name,
    description,
    photo_url,
    Attractions,
    video_id
  } = country;

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
          <h4>{capital_name[language]}</h4>
          <S.Container>
            <S.ContainerImageHead>
              <img src={photo_url} alt={name[language]} />
            </S.ContainerImageHead>
            <S.ContainerWidget>
              <Weather city={capital_name} language={language} />
              <Clock language={language} city={capital_name.en} />
              <Currency nameCountry={name.en} language={language} />
            </S.ContainerWidget>
          </S.Container>
          <p>{description[language]}</p>
          <SightGallery attractions={Attractions} language={language} />
          <VideoYouTube videoId={video_id} />
          <Map countryName={country.name.en} capitalName={capital_name.en} />
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
