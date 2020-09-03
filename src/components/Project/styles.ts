import styled from 'styled-components';

interface ImageProps {
  image: string;
}

const BriefView = styled.div`
  & h2 {
    color: ${props => props.theme.card.heading};
    text-align: center;
    margin: 40px 20px;
    transform: translateZ(1px);
  }
`;

const DetailedView = styled.div`
  height: 0%;
  transition: all 0.2s ease;
  transform: scaleY(0);
  padding: 0 20px;
  text-align: center;

  & p {
    color: ${props => props.theme.card.paragraph};
  }

  @media all and (pointer: coarse) {
    height: 50%;
    transform: scaleY(1);
  }
`;

const Image = styled.div<ImageProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 115px);
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 70%;
  transition: opacity 0.2s ease;
  opacity: 1;

  @media all and (pointer: coarse) {
    height: 100%;
    background-size: 80%;
    transform: scaleY(1);

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: ${props => props.theme.card.background};
      opacity: 0.9;
    }
  }
`;

const ProjectStyled = styled.a`
  position: relative;
  width: 360px;
  min-height: 460px;
  background: ${props => props.theme.card.background};
  margin: 40px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-decoration: none;
  box-shadow: inset 0 0 20px 0px rgba(0, 0, 0, 0.6),
    0px 0px 12px -2px rgba(0, 0, 0, 0.6);
  transition: 0.2s ease transform, 0.2s ease box-shadow;

  &:hover {
    transform: scale(1.1);
    box-shadow: inset 0 0 20px 0px rgba(0, 0, 0, 0.6),
      0px 0px 24px -2px rgba(0, 0, 0, 0.6);

    & ${Image} {
      opacity: 0;
    }
  }

  &:hover ${DetailedView} {
    height: 50%;
    transform: scaleY(1);
  }

  @media all and (max-width: 800px) {
    margin: 30px 0;
  }
`;

export { ProjectStyled, BriefView, DetailedView, Image };
