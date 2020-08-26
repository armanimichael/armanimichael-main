import React from 'react';

import { HeroStyled, StyledBackground } from './styles';

const Hero: React.FC = ({ children }) => (
  <HeroStyled>
    <div className="image">
      <StyledBackground className="hero-background" />
    </div>
    {children}
  </HeroStyled>
);

export default Hero;
