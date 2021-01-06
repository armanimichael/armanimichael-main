import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { Button, NotFoundImage } from '../components/';
import { Layout } from '../containers/';
import { useRandomPage } from '../queries/useRandomPage';

const NotFoundPage: React.FC = () => {
  const randomPage = useRandomPage();
  const intl = useIntl();

  return (
    <Layout>
      <h1>{intl.formatMessage({ id: '404.not-found' })}</h1>
      <p>
        <div
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: '404.msg' }),
          }}
        />
      </p>
      <hr />
      <div className="centered">
        <Button>Homepage</Button>
        <Button anchorTo={randomPage}>
          {intl.formatMessage({ id: '404.random' })}
        </Button>
      </div>
      <NotFoundImage />
    </Layout>
  );
};

export default NotFoundPage;
