import React from 'react';
import { injectIntl, IntlShape } from 'gatsby-plugin-intl';

import { Button } from '../../components';
import { Hero, ButtonGroup } from '../';

interface Props {
  intl: IntlShape;
}

const HeroContent: React.FC<Props> = ({ intl }) => (
  <Hero>
    <h1>{intl.formatMessage({ id: 'hi' })}</h1>
    <h2 style={{ color: 'rgba(255, 255, 255, 0.85)', fontWeight: 'normal' }}>
      Software Developer, <br />{' '}
      <a
        href="https://www.tecnoprogress.net/"
        rel="norel noopener noreferrer"
        target="_blank"
        style={{ color: 'rgba(255, 255, 255, 0.85)' }}
      >
        {intl.formatMessage({ id: 'my-job' })}
      </a>
    </h2>
    <ButtonGroup>
      <Button
        anchorTo="https://blog.armanimichael.com"
        styles={{ color: 'black', background: '#39ff14' }}
      >
        {intl.formatMessage({ id: 'blog-btn' })}
      </Button>
      <Button
        anchorTo="/#projects"
        styles={{ color: 'black', background: '#fce205' }}
      >
        {intl.formatMessage({ id: 'projects-simple' })}
      </Button>
    </ButtonGroup>
  </Hero>
);

export default injectIntl(HeroContent);
