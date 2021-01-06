import React from 'react';
import { Link } from 'gatsby-plugin-intl';

import { IoIosPaper, IoMdInformationCircleOutline } from 'react-icons/io';

import { DefaultSocials } from '../../utils/socialsHandler';

import { useSiteMetadata } from '../../queries/useSiteMetadata';
import { generateLinks } from '../../utils/generateLinks';

import { FooterStyled, Logo, SocialsContainer, LinksContainer } from './styles';

interface Props {
  logoSrc?: string;
  logoBackground?: string;
  customTitle?: string;
}

const Footer: React.FC<Props> = ({ logoSrc, customTitle, logoBackground }) => {
  const { title } = useSiteMetadata();

  return (
    <>
      <FooterStyled>
        <div>
          <h3>{customTitle || title}</h3>
          {logoSrc && (
            <Logo
              image={logoSrc}
              backgroundColor={logoBackground}
              title="Homepage"
            />
          )}
        </div>
        <div>
          <h3>
            <IoIosPaper />
          </h3>
          <LinksContainer>{generateLinks()}</LinksContainer>
        </div>
        <div>
          <h3>
            <IoMdInformationCircleOutline />
          </h3>
          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            title="sitemap"
          >
            Sitemap
          </a>
          {/* There is no analitics on this website */}
          {/* <Link to="/privacy">Privacy Policy</Link> */}
          <Link to="/">Developed by Me</Link>
        </div>
      </FooterStyled>
      <SocialsContainer>
        <DefaultSocials isSmall />
      </SocialsContainer>
    </>
  );
};

export default Footer;
