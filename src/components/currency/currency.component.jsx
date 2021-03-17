import React, { useEffect, useState } from 'react';
import * as S from './styled.component';
import { getCurrency } from '../../utilities/travel.service';
import {nameCurrency, nameCurrencyTranslate } from '../../constants/constans';

const Currency = ({nameCountry, language}) => {
  const [currencyData, setCurrencyData] = useState({});

  const localCurrency = nameCurrency[nameCountry];

  useEffect(() => {
    getCurrency(localCurrency).then((response) => {
      setCurrencyData(response.data);
    });
  }, []);

  return (
    <S.CurrencyWrapper>
      <div>
        <span>{nameCurrencyTranslate[language]} {localCurrency}: </span>
        <span>1</span>
      </div>
      <div>
        <span>USD: </span>
        <span>{currencyData.conversion_rates?.USD}</span>
      </div>
      <div>
        <span>EUR: </span>
        <span>{currencyData.conversion_rates?.EUR}</span>
      </div>
      <div>
        <span>BYN: </span>
        <span>{currencyData.conversion_rates?.BYN}</span>
      </div>
    </S.CurrencyWrapper>
  )
};

export default Currency;
