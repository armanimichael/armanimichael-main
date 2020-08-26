import React, { useState, useEffect } from 'react';

import { Content } from './styles';

import { Modal } from '../';

import themes from '../../themes/themes';

interface Props {
  title?: string;
  setVisibility: React.MouseEventHandler<SVGElement>;
  changeTheme: (newTheme: string) => void;
}

const ThemeModal: React.FC<Props> = ({
  setVisibility,
  title = 'Select Theme',
  changeTheme,
}) => {
  const [currentTheme, setTheme] = useState<string>('main');

  useEffect(() => {
    setTheme(window.localStorage.getItem('theme') || 'main');
  }, []);

  const handleThemeChanging = (e: React.FormEvent<HTMLDivElement>): void => {
    const newTheme: string = (e.target as HTMLInputElement).value;

    // Checks if the theme exists
    themes[newTheme] && changeTheme(newTheme);
  };

  const generateButtons = () => {
    const buttons: JSX.Element[] = [];

    for (const theme of Object.keys(themes)) {
      buttons.push(
        <span key={theme}>
          <input
            type="radio"
            value={theme}
            name="theme"
            defaultChecked={currentTheme === theme}
          />
          <p>{theme}</p>
        </span>
      );
    }

    return buttons;
  };

  generateButtons();

  return (
    <Modal setVisibility={setVisibility} title={title}>
      <Content onChange={handleThemeChanging}>{generateButtons()}</Content>
    </Modal>
  );
};

export default ThemeModal;
