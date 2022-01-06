import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 1em;
  cursor: pointer;

  img {
    width: 2.5em;
    height: 2.5em;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const InfoContent = styled.div`
  h2 {
    font-size: 1.2em;
    font-weight: 500;
    color: #2174d8;
  }
  p {
    font-size: 0.8em;
    font-weight: bold;
  }
`;

const DetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;

  margin-left: 1em;

  .count {
    width: 1.5em;
    height: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8em;
    border-radius: 50%;
    background-color: #2174d8;
    color: #fff;
  }
`;

export { Container, InfoContent, DetailsContent };
