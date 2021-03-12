import React from 'react';
import * as S from './styled.component';

import Item from './../item/item.component';

const MainPage = () => {
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
  const countries = arr.map((el) => {
    return <Item key={el} name={el} />;
  });
  return <S.MainPageWrapper>{countries}</S.MainPageWrapper>;
};

export default MainPage;
