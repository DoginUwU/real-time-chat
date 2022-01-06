import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #2174d8;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2em;
  border-radius: 0.5em;
  background-color: #ffffff;

  h1 {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.6);
    font-size: 1.6em;
  }

  p {
    font-size: 1em;
    margin-top: 0.8em;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.8);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1em 2em;
    border-radius: 1em;
    background-color: #ec4235;
    color: #fff;
    border: none;
    margin-top: 5em;

    svg {
      margin-right: 1em;
    }

    &:hover {
      background-color: #d83434;
    }
  }
`;

export { Container, Card };
