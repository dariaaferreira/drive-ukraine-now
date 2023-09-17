import React from "react";
import { BiHeart, BiAlignJustify, BiHomeAlt } from 'react-icons/bi';
import { NavContainer, Container, NavLinkStyled, NavList } from './Header.styled';

const Header = () => {
  return (
    <NavContainer>
      <Container>
      <NavList>
        <NavLinkStyled to="/">
          <BiHomeAlt size={24} />
          Home
        </NavLinkStyled>
      </NavList>
      <NavList>
        <NavLinkStyled to="/catalog">
          <BiAlignJustify size={24} />
          Catalog
        </NavLinkStyled>
      </NavList>
      <NavList>
        <NavLinkStyled to="/favorites">
          <BiHeart size={24} />
          Favorites
        </NavLinkStyled>
      </NavList>
      </Container>
    </NavContainer>
  );
};

export default Header;