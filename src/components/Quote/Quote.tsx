import React from 'react';
import { IoIosQuote } from 'react-icons/io';

import { QuoteStyled } from './styles';

interface Props {
  author: string;
}

const Quote: React.FC<Props> = ({ author, children }) => (
  <QuoteStyled>
    <hr />
    <p>{children}</p>
    <span>—{author}</span>
    <IoIosQuote id="quote" />
    <hr />
  </QuoteStyled>
);

export default Quote;
