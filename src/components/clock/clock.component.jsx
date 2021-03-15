import React, { useEffect, useState } from 'react';
import * as S from './styled.component';
import PropTypes from 'prop-types';
import { options, languageLocale, timeZone } from '../../constants/constans';

const Clock = ({ language, city }) => {
  const [time, updateTime] = useState(new Date());

  useEffect(() => {
    const set = setTimeout(() => {
      updateTime(new Date());
    }, 1000);
    return () => {
      clearTimeout(set);
    };
  }, [time]);

  return (
    <S.ClockWrapper>
      <S.ClockTime>
        {time.toLocaleTimeString(languageLocale[language], {
          timeZone: timeZone[city],
          hour12: false
        })}
      </S.ClockTime>
      <S.ClockDate>
        {time.toLocaleDateString(languageLocale[language], {
          ...options,
          timeZone: timeZone[city]
        })}
      </S.ClockDate>
    </S.ClockWrapper>
  );
};

Clock.propTypes = {
  language: PropTypes.string,
  city: PropTypes.string
};

export default Clock;
