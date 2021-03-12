import React from 'react';
import * as S from './styled.component';
import { withRouter } from 'react-router-dom';

const Item = ({ name, history }) => {
  return (
    <S.ItemWrapper
      name={name}
      onClick={() =>{
        history.push(`/${name}`);
      }}
    >
      <h2>{name}</h2>
      <img src="#" alt="country" />
    </S.ItemWrapper>
  );
};

export default withRouter(Item);
