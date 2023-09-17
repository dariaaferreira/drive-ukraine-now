import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.header`
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  min-height: 64px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: rgb(47, 48, 58);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Container = styled.div`
 display: flex;
 width: 1187px;
 margin: 0 auto;
 gap: 30px;
`;

export const NavList = styled.ul`
  display: flex;
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 5px;
  font-size: 24px;
  font-weight: 500;
  color: white; 

  :hover,
  :focus {
    transform: scale(1.1);
  }

  &.active {
    font-weight: bold;
    color: #2196F3;
  }

`;