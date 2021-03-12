import React from 'react';
import * as S from './styled.component';

const CountryPage = ({name}) => {
  return (
    <S.CountryPageWrapper>
      <h2>{name}</h2>
      <img src="#" alt="Photo of country" />
      <h4>Capital</h4>
      <p>Info about country</p>
      <div>Photo-slider</div>
      <div>Video about country</div>
      <div>Map of country</div>
    </S.CountryPageWrapper>
  );
};

export default CountryPage;
