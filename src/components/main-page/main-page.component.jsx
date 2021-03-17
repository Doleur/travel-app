import React from 'react';
import Item from './../item/item.component';
import PropTypes from 'prop-types';

import * as S from './styled.component';

const MainPage = ({ searchValue, language, allCountries }) => {
  const countries = allCountries
    .filter(
      (country) =>
        country.name[language]
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        country.capital_name[language]
          .toLowerCase()
          .includes(searchValue.toLowerCase())
    )
    .map((country, i) => {
      return <Item key={i} country={country} language={language} />;
    });

  return <S.MainPageWrapper>{countries}</S.MainPageWrapper>;
};

MainPage.propTypes = {
  searchValue: PropTypes.string,
  language: PropTypes.string,
  allCountries: PropTypes.array
};

export default MainPage;
