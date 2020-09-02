import React from 'react';

import { Button } from '../../components';
import { Hero, ButtonGroup } from '../';

const HeroContent: React.FC = () => (
  <Hero>
    <h1>Hi, I&apos;m Michael.</h1>
    <h3>Software Developer based in Italy</h3>
    <ButtonGroup>
      <Button
        anchorTo="https://blog.armanimichael.com"
        styles={{ color: 'black', background: '#39ff14' }}
      >
        Check my blog out!
      </Button>
      <Button
        anchorTo="/#projects"
        styles={{ color: 'black', background: '#fce205' }}
      >
        Projects
      </Button>
    </ButtonGroup>
  </Hero>
);

export default HeroContent;
