import React, { useState } from "react";
import styled from "styled-components";
import { StyledLink } from "../../styles";
// Importing salon auth
import salonAuth from "../../stores/salonAuth";
// Importing observer
import { observer } from "mobx-react";
// Importing useHistory
import { useHistory } from "react-router-dom";

const Burger = () => {
  const [open, setOpen] = useState(false);

  const NavbarButtonsList = [
    { name: "home", params: salonAuth.salon.username },
    { name: "specialists" },
    { name: "categories" },
  ];

  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent refreshing the page
    salonAuth.signout();
    history.push(`/`);
  };
  return (
    <div>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <div
        style={{
          display: "flex",
          position: "absolute",
          top: "0px",
          right: "0px",
        }}
        open={open}
      >
        <NavBarUL open={open}>
          {NavbarButtonsList.map(({ name, params }) => (
            // <StyledLink to={`/${name}/${salonAuth.salon.username}`} key={name}>
            <StyledLink to={`/${name}${params ? `/${params}` : ""}`} key={name}>
              <NavbarButtons>{name}</NavbarButtons>
            </StyledLink>
          ))}
          <NavbarButtons onClick={handleSubmit}> Log out </NavbarButtons>
        </NavBarUL>
      </div>
    </div>
  );
};

export default observer(Burger);

export const StyledBurger = styled.div`
  display: none;
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 20px;
  right: 10px;

  @media (max-width: 760px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.4s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? `rotate(45deg)` : `rotate(0)`)};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? `translateX(100%)` : `translateX(0)`)};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? `rotate(-45deg)` : `rotate(0)`)};
    }
  }
`;

export const NavbarButtons = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 90px;
  height: 25px;
  background: white;
  color: #132239;
  border: none;
  border-radius: 3px;
  margin: 2px;
  outline: none;
  text-transform: capitalize;
  cursor: pointer;

  :hover {
    background: #463973;
    transition: 0.4s;
    color: white;
  }
`;

export const NavBarUL = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  /* transition: 0.3s; */
  z-index: 10000px;

  @media (max-width: 760px) {
    flex-flow: column nowrap;
    transform: ${({ open }) => (open ? `translateX(0%)` : `translateX(100%)`)};
    position: absolute;
    height: 100vh;
    width: 175px;
    top: 72px;
    right: 0;
    background: #132239;

    // list inside drawer
    li {
      z-index: 10000px;
      align-items: center;
      margin-top: 10px;
      color: white;
      background: none;
      font-weight: bold;
      position: relative;
      padding: 3px;
      left: 18px;
      :before {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: 0;
        left: 0;
        background-color: white;
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out;
      }
      :hover:before {
        visibility: visible;
        transform: scaleX(1);
      }
    }
  }
`;
