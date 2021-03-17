import React from 'react';
import * as S from './styled.component';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Item = ({ country, history, language }) => {
  const { id, name, capital_name, photo_url } = country;
  return (
    <S.ItemWrapper
      name={name[language]}
      onClick={() => {
        history.push(`/countries/${id}`);
      }}
    >
      <S.CountryImage src={photo_url} alt={name[language]} />
      <S.CountryCopy>
        <h4>{name[language]}</h4>
        <h5>{capital_name[language]}</h5>
      </S.CountryCopy>
    </S.ItemWrapper>
  );
};

Item.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.object,
    capital_name: PropTypes.object,
    description: PropTypes.object,
    photo_url: PropTypes.string
  }),
  history: PropTypes.object,
  language: PropTypes.string
};

export default withRouter(Item);
