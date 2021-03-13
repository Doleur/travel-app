import React from 'react';
import * as S from './styled.component';
import PropTypes from 'prop-types';

import Item from './../item/item.component';

const MainPage = ({ searchValue }) => {
  const arr = [
    'Egypt',
    'France',
    'Greece',
    'Italy',
    'Malta',
    'Portugal',
    'Spain',
    'Turkey'
  ];
  const countries = arr
    .filter((country) =>
      country.toLowerCase().includes(searchValue.toLowerCase())
    )
    .map((el) => {
      return <Item key={el} name={el} />;
    });
  return <S.MainPageWrapper>{countries}</S.MainPageWrapper>;
};

MainPage.propTypes = {
  searchValue: PropTypes.string
};

export default MainPage;
