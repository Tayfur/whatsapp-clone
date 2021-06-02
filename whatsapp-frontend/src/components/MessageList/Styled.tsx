import styled from 'styled-components';

export const Container = styled.div`
  max-width: 450px;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  background-color: black;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  height: 100%;
  position: fixed;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const Navbar = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  min-height: 70px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);

  background-color: #2a2f32;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const Nav = styled.div`
  max-width: 450px;
  height: 70px;
  display: flex;
  position: fixed;
  padding-left: 20px;
  align-items: center;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const NavLogo = styled.img`
  width: 40px;
  height: 40px;
  display: flex;
  position: relative;
  border-radius: 100px;
  object-fit: cover;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const MsgList = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  overflow: auto;
  background-color: #131c20;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const MsgListItem = styled.div`
  width: 100%;
  min-height: 72px;
  margin-top: 1px;
  display: flex;
  position: relative;
  cursor: pointer;
  :hover {
    background-color: #2a2f32;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const MsgListItemLogo = styled.div`
  max-width: 77px;
  max-height: 72px;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  @media screen and (max-width: 800px) {
  }
`;
export const MsgListItemLogoIcon = styled.img`
  max-width: 49px;
  max-height: 49px;
  object-fit: cover;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  @media screen and (max-width: 800px) {
  }
`;
export const MsgListItemContent = styled.div`
  cursor: pointer;
  width: 100%;
  max-height: 72px;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 10px;
  padding-right: 50px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);

  @media screen and (max-width: 800px) {
  }
`;
export const MsgListItemContentUsername = styled.div`
  width: 100%;
  max-height: 21px;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  position: relative;

  @media screen and (max-width: 800px) {
  }
`;
export const MsgListItemContentUsernameSpan = styled.span`
  font-size: 16px;
  color: white;
  font-weight: 700;

  @media screen and (max-width: 800px) {
  }
`;
export const MsgListItemContentMessageTimeSpan = styled.span`
  font-size: 12px;
  color: grey;
  font-weight: 400;

  @media screen and (max-width: 800px) {
  }
`;
export const MsgListItemContentLastMassage = styled.div`
  width: 100%;
  max-height: 21px;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  display: flex;

  position: relative;
  margin-top: 1px;
  @media screen and (max-width: 800px) {
  }
`;
export const MsgListItemContentLastMessageSpan = styled.span`
  font-size: 16px;
  color: gray;
  font-weight: 500;

  @media screen and (max-width: 800px) {
  }
`;
