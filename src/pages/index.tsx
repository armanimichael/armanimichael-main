import React from 'react';

import { Layout, Socials } from '../containers/';

const IndexPage: React.FC = () => (
  <Layout showHero allowPadding={false}>
    <Socials title="You can find me here" />
  </Layout>
);

export default IndexPage;
