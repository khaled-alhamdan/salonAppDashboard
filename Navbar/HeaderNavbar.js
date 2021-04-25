import React from "react";
import styled from "styled-components";
import { StyledLink } from "../../styles";
import Burger from "./Burger";

// Importing assests
// import AppLogoMiddle from "../../media/headerLogo.png";
import AppLogoSide from "../../media/logosolidwhite.png";
import HeaderBG from "../../media/headerBG.png";

export const HeaderNavbar = () => {
  return (
    <Header>
      <HeaderLogoInfoDiv>
        <StyledLink to="/home">
          <Logo />
        </StyledLink>
      </HeaderLogoInfoDiv>
      <HeaderNavbarDiv>
        <Burger />
      </HeaderNavbarDiv>
    </Header>
  );
};

export default HeaderNavbar;

const Header = styled.div`
  width: 100vw;
  height: 90px;
  /* margin-bottom: -40px; */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${HeaderBG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1000px;

  @media (min-width: 760px) {
    justify-content: space-between;
  }
`;

const HeaderLogoInfoDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100px;
  /* background-color: yellow; */
  height: 100%;
`;

const Logo = styled.div`
  width: 100px;
  height: 80px;
  margin-top: auto;
  margin-bottom: auto;
  background-image: url(${AppLogoSide});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const HeaderNavbarDiv = styled.div`
  display: flex;
  z-index: 1000px;
  /* background-color: blue; */
  @media (min-width: 760px) {
    padding: 10px;
  }
`;
