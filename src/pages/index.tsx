import React from 'react';
import { injectIntl, IntlShape } from 'gatsby-plugin-intl';

import { Project, Quote } from '../components';
import { Layout, Socials, Section, Competences } from '../containers/';

import gatsbyLogoImg from '../images/gatsby.png';
import learnGoImg from '../images/go.png';
import armaniEsteticaImg from '../images/armaniestetica.png';
import lessenzaImg from '../images/lessenza.png';
import logoImg from '../images/logo.png';

interface Props {
  intl: IntlShape;
}

const IndexPage: React.FC<Props> = ({ intl }) => (
  <Layout showHero allowPadding={false}>
    <Socials title={intl.formatMessage({ id: 'socials' })} />
    <Section title={intl.formatMessage({ id: 'aboutme' })} isSecondary>
      <p id="about-me">
        <div
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: 'intro' }),
          }}
        />
        <a
          href="https://blog.armanimichael.com"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          {intl.formatMessage({ id: 'check-blog' })}
        </a>
      </p>
    </Section>
    <Section title={intl.formatMessage({ id: 'projects' })} id="projects">
      <Project
        name={intl.formatMessage({ id: 'my-blog' })}
        image={logoImg}
        link="https://blog.armanimichael.com"
      >
        {intl.formatMessage({ id: 'blog' })}
      </Project>
      <Project
        name="Gatsby-Starter-Mike"
        image={gatsbyLogoImg}
        link="https://github.com/armanimichael/gatsby-starter-mike"
      >
        {intl.formatMessage({ id: 'gatsby-mike' })}
      </Project>
      <Project
        name="Learn Go"
        image={learnGoImg}
        link="https://github.com/armanimichael/learn-go"
      >
        {intl.formatMessage({ id: 'learn-go' })}
      </Project>
      <Project
        name={`${intl.formatMessage({ id: 'this-website' })}😉`}
        image={logoImg}
        link="https://github.com/armanimichael/armanimichael-main"
      >
        {intl.formatMessage({ id: 'my-website' })}
      </Project>
      <Project
        name="Armani Estetica"
        image={armaniEsteticaImg}
        link="https://armaniestetica.it"
      >
        {intl.formatMessage({ id: 'armaniestetica' })}
      </Project>
      <Project name="L'Essenza" image={lessenzaImg} link="https://lessenza.net">
        {intl.formatMessage({ id: 'lessenza' })}
      </Project>
    </Section>
    <Section isSecondary>
      <Quote author="H.P. Lovecraft">
        I never ask a man what his business is, for it never interests me. What
        I ask him about are his thoughts and dreams.
      </Quote>
    </Section>
    <Competences
      title={intl.formatMessage({ id: 'competences' })}
    ></Competences>
  </Layout>
);

export default injectIntl(IndexPage);
