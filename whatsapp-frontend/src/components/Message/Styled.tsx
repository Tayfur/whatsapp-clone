import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 900px;
  display: flex;
  position: relative;
  background-color: black;
  border-left: 1px solid rgba(255, 255, 255, 0.25);

  @media screen and (max-width: 800px) {
  }
`;
export const Navbar = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  max-height: 70px;
  background-color: #2a2f32;
  @media screen and (max-width: 800px) {
  }
`;
export const Nav = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  position: fixed;
  @media screen and (max-width: 800px) {
  }
`;
