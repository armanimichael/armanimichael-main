import React from 'react';

import { BackToTopStyled } from './styles';
import { IoIosArrowUp } from 'react-icons/io';

interface Props {
  location: string;
}
const BackToTop: React.FC<Props> = ({ location }) => (
  <BackToTopStyled
    to={location.replace(/\/en\/|\/it\//, '/')}
    title="Back to Top"
  >
    <IoIosArrowUp />
  </BackToTopStyled>
);

export default BackToTop;
