import React from 'react';

import { Button } from '../../components';
import { Hero, ButtonGroup } from '../';

const HeroContent: React.FC = () => (
  <Hero>
    <h1>Hi, I&apos;m Michael.</h1>
    <h3 style={{ color: 'rgba(255, 255, 255, 0.85)', fontWeight: 'normal' }}>
      Software Developer, <br />{' '}
      <a
        href="https://www.tecnoprogress.net/"
        rel="norel noopener noreferrer"
        target="_blank"
        style={{ color: 'rgba(255, 255, 255, 0.85)' }}
      >
        Web Dev at Tecnoprogress
      </a>
    </h3>
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
