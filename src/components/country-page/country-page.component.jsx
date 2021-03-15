import React from 'react';
import * as S from './styled.component';
import PropTypes from 'prop-types';
import VideoYouTube from './../video-youtube/video-yuotube';

const CountryPage = ({ name }) => {
  return (
    <S.CountryPageWrapper>
      <h2>{name}</h2>
      <img src="#" alt="Photo of country" />
      <h4>Capital</h4>
      <p>Info about country</p>
      <div>Photo-slider</div>
      <VideoYouTube />
      <div>Map of country</div>
    </S.CountryPageWrapper>
  );
};

CountryPage.propTypes = {
  name: PropTypes.string
};

export default CountryPage;
