import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  flex: 1;
  background-color: #ffffff;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  padding: 2em;
  gap: 1em;

  img {
    width: 3em;
    height: 3em;
    border-radius: 50%;
    object-fit: cover;
  }

  h2 {
    font-size: 1.2em;
    font-weight: 500;
  }
`;

export { Container, Profile };
