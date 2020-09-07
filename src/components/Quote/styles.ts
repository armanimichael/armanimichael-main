import styled from 'styled-components';

const QuoteStyled = styled.div`
  width: 50%;

  & p {
    font-size: 32px;
    margin-top: 40px;
  }

  & span {
    display: block;
    font-size: 20px;
    margin-bottom: 40px;
  }

  & #quote {
    position: absolute;
    right: calc(25% + 31px);
    font-size: 62px;
    margin-top: -31px;
    color: ${props => props.theme.paragraph.secondary};
    z-index: 100;
  }

  @media all and (max-width: 800px) {
    width: 100%;

    & p {
      font-size: 28px;
      margin-top: 30px;
    }

    & span {
      margin-bottom: 30px;
    }

    & #quote {
      position: absolute;
      right: calc(50% - 24px);
      font-size: 48px;
      margin-top: -24px;
    }
  }
`;

export { QuoteStyled };
