import styled, { css } from 'styled-components';

interface Props {
  isMyMessage?: boolean;
}

const Container = styled.div<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 1em;

  ${props =>
    props.isMyMessage &&
    css`
      align-self: end;
      flex-direction: row-reverse;
    `}

  img {
    width: 2em;
    height: 2em;
    border-radius: 50%;
  }
`;

const Content = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => (props.isMyMessage ? '#2174d8' : '#000')};
  color: #fff;
  border-radius: 0.3em;
  padding: 0.8em 1em;
`;

export { Container, Content };
