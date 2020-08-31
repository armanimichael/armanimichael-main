import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import HeroContent from './HeroContent';

import '../../themes/index.css';
import GlobalStyle from '../../themes/global-style';
import '../../themes/index.css';

import { Navbar, Footer, BackToTop, SEO } from '../../components';

import logoImg from '../../images/logo.png';

import themes from '../../themes/themes';

interface Props {
  showHero?: boolean;
  noScriptMsg?: string;
  SEOComponent?: React.ReactElement;
  allowPadding?: boolean;
}

const Layout: React.FC<Props> = ({
  children,
  showHero = false,
  noScriptMsg = 'JavaScript is disabled, theme changing and other functionalities may not work.',
  SEOComponent,
  allowPadding = true,
}) => {
  const [isDarkMode, setIsDarkTheme] = useState<boolean>(true);

  useEffect(() => {
    const loadedTheme = window.localStorage.getItem('darkmode') || 'true';
    loadedTheme === 'true' ? setIsDarkTheme(true) : setIsDarkTheme(false);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('darkmode', isDarkMode.toString());
  }, [isDarkMode]);

  const switchTheme = () => {
    setIsDarkTheme(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? themes.dark : themes.light}>
      {SEOComponent || <SEO />}
      <GlobalStyle />
      <BackToTop />
      <header>
        <Navbar
          logoSrc={logoImg}
          isDarkMode={isDarkMode}
          changeTheme={(): void => {
            switchTheme();
          }}
        />
        <noscript>
          <p>{noScriptMsg}</p>
        </noscript>
        {showHero && <HeroContent />}
      </header>
      <main className={allowPadding ? 'general-content' : 'home-content'}>
        {children}
      </main>
      <Footer logoSrc={logoImg}></Footer>
    </ThemeProvider>
  );
};

export default Layout;
