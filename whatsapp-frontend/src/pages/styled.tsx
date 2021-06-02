import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 0;
  flex-direction: row;
  background-color: #131c20;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
