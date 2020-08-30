import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    paragraph: {
      primary: string;
      secondary: string;
    };

    headline: {
      primary: string;
      secondary: string;
    };

    button: {
      primary: string;
      primaryColor: string;
      secondary: string;
      secondaryColor: string;
    };

    backgrounds: {
      primary: string;
      secondary: string;
    };

    card: {
      background: string;
      paragraph: string;
      heading: string;
    };

    heroHue: string;

    alerts: {
      danger: string;
    };
  }
}
