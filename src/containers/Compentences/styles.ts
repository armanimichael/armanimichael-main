import styled from 'styled-components';

const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;

  & h3 {
    text-align: left;
  }

  @media all and (max-width: 800px) {
    flex-direction: column;
    align-items: center;

    & div {
      width: 100%;
    }
  }

  @supports (-ms-flow-from: edge) {
    /* Edge only */
    justify-content: space-around;
  }
`;

export { ListsContainer };
