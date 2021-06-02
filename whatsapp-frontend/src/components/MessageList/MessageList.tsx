import React from 'react';
import {
  Container,
  Wrapper,
  Navbar,
  Nav,
  NavLogo,
  MsgList,
  MsgListItem,
  MsgListItemLogo,
  MsgListItemLogoIcon,
  MsgListItemContent,
  MsgListItemContentLastMassage,
  MsgListItemContentUsername,
  MsgListItemContentUsernameSpan,
  MsgListItemContentMessageTimeSpan,
  MsgListItemContentLastMessageSpan,
} from './Styled';
interface Props {}

const MessageList: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Navbar>
          <Nav>
            <NavLogo
              src={
                'https://www.barcawelt.de/images/Trainer/Pep_Guardiola_ManCity.jpg'
              }
            />
          </Nav>
        </Navbar>
        <MsgList>
          <MsgListItem>
            <MsgListItemLogo>
              <MsgListItemLogoIcon
                draggable={false}
                src={
                  'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE'
                }
              />
            </MsgListItemLogo>
            <MsgListItemContent>
              <MsgListItemContentUsername>
                <MsgListItemContentUsernameSpan>
                  Tayfur
                </MsgListItemContentUsernameSpan>
                <MsgListItemContentMessageTimeSpan>
                  11:45
                </MsgListItemContentMessageTimeSpan>
              </MsgListItemContentUsername>
              <MsgListItemContentLastMassage>
                <MsgListItemContentLastMessageSpan>
                  bu mesaj benden sana
                </MsgListItemContentLastMessageSpan>
              </MsgListItemContentLastMassage>
            </MsgListItemContent>
          </MsgListItem>
          <MsgListItem>
            <MsgListItemLogo>
              <MsgListItemLogoIcon
                draggable={false}
                src={
                  'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE'
                }
              />
            </MsgListItemLogo>
            <MsgListItemContent>
              <MsgListItemContentUsername>
                <MsgListItemContentUsernameSpan>
                  Tayfur
                </MsgListItemContentUsernameSpan>
                <MsgListItemContentMessageTimeSpan>
                  11:45
                </MsgListItemContentMessageTimeSpan>
              </MsgListItemContentUsername>
              <MsgListItemContentLastMassage>
                <MsgListItemContentLastMessageSpan>
                  bu mesaj benden sana
                </MsgListItemContentLastMessageSpan>
              </MsgListItemContentLastMassage>
            </MsgListItemContent>
          </MsgListItem>
        </MsgList>
      </Wrapper>
    </Container>
  );
};

export default MessageList;
