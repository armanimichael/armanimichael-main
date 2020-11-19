import React from 'react';

import { Section } from '../../containers/';
import { ListsContainer } from './styles';

interface Props {
  [index: string]: any;
}

const Competences: React.FC<Props> = props => (
  <Section {...props}>
    <ListsContainer>
      <div>
        <h3>Programming languages</h3>
        <ul>
          <li>JavaScript + TypeScript</li>
          <li>NodeJS</li>
          <li>Python</li>
          <li>PHP</li>
          <li>C#</li>
          <li>Relational DBs - MySQL</li>
        </ul>
      </div>
      <div>
        <h3>Libs and Frameworks</h3>
        <ul>
          <li>ReactJS</li>
          <li>GatsbyJS</li>
          <li>Pygame</li>
          <li>P5js</li>
          <li>Processing</li>
          <li>Electron</li>
          <li>ExpressJS</li>
        </ul>
      </div>
    </ListsContainer>
  </Section>
);

export default Competences;
