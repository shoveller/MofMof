import styled from 'styled-components/macro';
import notification from 'assets/icon/notification.svg';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #ffff;
  height: 100px;
  padding: 0 20px;
  position: fixed;
  width: 373px;
<<<<<<< HEAD
`;
=======
  z-index: 100;
  box-shadow: 0 0.1px 5px 1px rgba(190, 190, 190, 0.2);
`
>>>>>>> header-and-footer


export const NotificationIcon = styled.button`
  width: 24px;
  height: 24px;
  background: url(${notification});
<<<<<<< HEAD
`;
=======
`

export const LogoBtn = styled.button`
  margin: 40px 0 10px 20px;
`
>>>>>>> header-and-footer
