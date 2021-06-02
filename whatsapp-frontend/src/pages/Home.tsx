import React from 'react';
import { MessageList, Message } from '../components/ExpComponents';
import { Container } from './styled';
interface Props {}

export const Home: React.FC = () => {
  return (
    <>
      <Container>
        <MessageList />
        <Message />
      </Container>
    </>
  );
};
