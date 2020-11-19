import React from 'react';

import { Project, Quote } from '../components';
import { Layout, Socials, Section, Competences } from '../containers/';

import gatsbyLogoImg from '../images/gatsby.png';
import learnGoImg from '../images/go.png';
import armaniEsteticaImg from '../images/armaniestetica.png';
import lessenzaImg from '../images/lessenza.png';
import logoImg from '../images/logo.png';

const IndexPage: React.FC = () => (
  <Layout showHero allowPadding={false}>
    <Socials title="You can find me here" />
    <Section title="About Me..." isSecondary>
      <p id="about-me">
        Hello there! I&apos;m Michael, a <b>Software Developer and student</b>{' '}
        passionate about
        <b> Computer Science</b>, Horror Literature, and Science in general.{' '}
        <br />
        <a
          href="https://blog.armanimichael.com"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          I also run a <b>blog</b>, go check that out!
        </a>
        <p>Welcome to my Website! 😃</p>
      </p>
    </Section>
    <Section title="Some Projects of Mine" id="projects">
      <Project
        name="My Blog"
        image={logoImg}
        link="https://blog.armanimichael.com"
      >
        My personal blog, sometimes I write stuff.
      </Project>
      <Project
        name="Gatsby-Starter-Mike"
        image={gatsbyLogoImg}
        link="https://github.com/armanimichael/gatsby-starter-mike"
      >
        A simple yet functional TypeScript GatsbyJS starter.
      </Project>
      <Project
        name="Learn Go"
        image={learnGoImg}
        link="https://github.com/armanimichael/learn-go"
      >
        A tutorial repository with some snippets to quickly explain some Go
        language concepts.
      </Project>
      <Project
        name="This Website 😉"
        image={logoImg}
        link="https://github.com/armanimichael/armanimichael-main"
      >
        My Website&apos;s Github repository, feel free to take a look.
      </Project>
      <Project
        name="Armani Estetica"
        image={armaniEsteticaImg}
        link="https://armaniestetica.it"
      >
        A Website built with my GatsbyJS starter.
      </Project>
      <Project name="L'Essenza" image={lessenzaImg} link="https://lessenza.net">
        One of my first GatsbyJS Projects.
      </Project>
    </Section>
    <Section isSecondary>
      <Quote author="H.P. Lovecraft">
        I never ask a man what his business is, for it never interests me. What
        I ask him about are his thoughts and dreams.
      </Quote>
    </Section>
    <Competences title="My Competences"></Competences>
  </Layout>
);

export default IndexPage;
