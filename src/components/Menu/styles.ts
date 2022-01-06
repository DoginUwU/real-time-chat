import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 2em;

  padding: 2em;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 1em;
  cursor: pointer;

  img {
    width: 3em;
    height: 3em;
    border-radius: 50%;
    object-fit: cover;
  }

  .info {
    h2 {
      font-size: 1.2em;
      font-weight: 500;
      color: #2174d8;
    }
    p {
      font-size: 0.8em;
      font-weight: 300;
    }
  }
`;

const Search = styled.div`
  position: relative;

  input {
    width: 100%;
    padding: 0.6em 1em 0.6em 3em;
    border: #b9b9b9 solid 1px;
    outline: none;
    border-radius: 0.5em;
  }

  svg {
    position: absolute;
    left: 1em;
    top: 50%;
    transform: translateY(-50%);
    color: #b9b9b9;
  }
`;

const Persons = styled.div`
  flex: 1;
`;

export { Container, Profile, Search, Persons };
