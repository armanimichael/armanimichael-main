import React from 'react';
import { changeLocale, useIntl } from 'gatsby-plugin-intl';

import { LanguageButtonStyled } from './styles';

import itFlag from '../../images/it.svg';
import gbFlag from '../../images/gb.svg';

const LanguageButton: React.FC = () => {
  const intl = useIntl();

  const currentFlag = intl.locale === 'it' ? itFlag : gbFlag;
  const nextLanguage = intl.locale === 'it' ? 'en' : 'it';

  return (
    <LanguageButtonStyled
      id="language-button"
      flag={currentFlag}
      onClick={() => changeLocale(nextLanguage)}
    />
  );
};

export default LanguageButton;
