import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  height: 100vh;
  flex: 1;
  background-color: #ffffff;
  overflow: hidden;
`;

const Profile = styled.div`
  width: 100%;
  background-color: #ffffff;

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

const Messages = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 1em;
  padding: 0 2em 1em 2em;

  flex: 1;
  overflow: auto;
`;

const SendContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  padding: 0 2em 2em;

  input {
    flex: 1;
    padding: 1em;
    border: #b9b9b9 solid 1px;
    outline: none;
    border-radius: 0.5em;
  }
`;

export { Container, Profile, Messages, SendContent };
