import styled from 'styled-components';

import HeroBackground from './HeroBackground';

const StyledBackground = styled(HeroBackground)`
  width: 100%;
  min-height: calc(100vh - 80px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media all and (max-width: 800px) {
    min-height: calc(100vh - 50px);
  }
`;

const HeroStyled = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 80px;

  & h1 {
    font-size: 64px;
    color: white;
    z-index: 2;
  }

  & h3 {
    margin-top: 0;
    margin-bottom: 1.4em;
    color: white;
    z-index: 2;
  }

  & .image {
    position: absolute;
    width: 100%;
    min-height: 100%;
    z-index: 1;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 2;
    }
  }

  @media all and (max-width: 800px) {
    min-height: calc(100vh - 50px);
    margin-bottom: 60px;

    & h1 {
      font-size: 48px;
    }
  }
`;

export { HeroStyled, StyledBackground };
