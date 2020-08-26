import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import BackgroundImage from 'gatsby-background-image';

interface Props {
  className: string;
}

const HeroBackground: React.FC<Props> = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "back.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid;
      return <BackgroundImage fluid={imageData} className={className} />;
    }}
  />
);

export default HeroBackground;
