import styled, { createGlobalStyle } from "styled-components";

import { Link } from "react-router-dom";
// X icon
import { MdClose } from "react-icons/md";

// Importing noAvailableImage.png
import noAvailableImage from "./media/noAvailableImage.png";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.fontColor};
    background-color: ${(props) => props.theme.backgroundColor};;
  }
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  display: flex;
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 250px;
  outline: none;
  border: none;
`;

export const ListWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ListDiv = styled.div`
  width: 95vw;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.ListDiv};
  border-radius: 5px;
  padding: 13px 5px 10px 5px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  width: 97%;
  background-color: ${(props) => props.theme.ItemWrapper};
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
  /* margin-top: 5px; */
  margin-bottom: 5px;
  border-radius: 5px;
`;

export const ItemNameWrapper = styled.div`
  width: 180px;
  /* background-color: pink; */
  cursor: pointer;
`;

export const ItemName = styled.label`
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  font-weight: bold;
  color: white;
  :hover {
    cursor: pointer;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  width: 250px;
  /* background-color: grey; */
  align-items: center;
  justify-content: flex-end;
  padding: 5px;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  /* background-color: pink; */
`;

export const MoreInfoButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: purple; */
  /* @media (max-width: 760px) {
    justify-content: center;
  } */
`;

export const MoreInfoButton = styled.button`
  width: 80px;
  height: 26px;
  text-align: center;
  font-family: sans-serif;
  font-size: 15px;
  color: white;
  border: 2px solid white;
  border-radius: 6px;
  margin: 2px;
  /* border: 2px solid ${(props) => props.theme.moreInfoBorder}; */
  outline: none;
  opacity: 50%;
  background-color: #463973;
  :hover {
    cursor: pointer;
    opacity: 100%;
    transition: 0.8s;
  }
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  font-family: sans-serif;
  margin: 1.25em;
  padding: 0.5em 2em;
  border-radius: 7px;
  background-color: ${(props) => props.theme.buttonBGColor};
  color: ${(props) => props.theme.buttonTextColor};
  transition-duration: 0.4s;
  outline: 0;
  border: none;
  :hover {
    background-color: grey;
    color: Black;
    transition: 1s;
    border: 1px solid white;
  }
`;

export const ThemeButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
`;

export const BackDetailButton = styled.button`
  color: ${(props) => props.theme.buttonTextColor};
  background-color: ${(props) => props.theme.buttonBGColor};
  text-transform: uppercase;
  font-family: sans-serif;
  border: none;
  border-radius: 4px;
  padding: 6px 10px;
  outline: none;
  margin-top: 15px;

  :hover {
    background-color: grey;
    color: Black;
    transition: 0.6s;
    border: 1px solid white;
  }
`;

export const CreateButtonStyled = styled.button`
  color: white;
  background-color: black;
  opacity: 70%;
  border: none;
  border-radius: 4px;
  padding: 6px 10px;
  outline: none;
  margin-top: 15px;

  :hover {
    opacity: 100%;
    transition: 0.8s;
  }
`;

export const ModalInput = styled.input`
  width: 300px;
  height: 30px;
  outline: none;
  border: 2px solid grey;
  border-radius: 5px;
  margin: 5px;
  color: black;
`;

export const ModalInputDiv = styled.div`
  padding: 6px;
`;

export const ModalOption = styled.option`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalLabels = styled.label`
  font-family: sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: black;
`;

export const ClosingModalX = styled(MdClose)`
  cursor: pointer;
  width: 30px;
  height: 50px;
  color: black;
  position: absolute;
  right: 10px;
  top: 5px;
  padding: none;
`;

export const DeleteButton = styled.button`
  background-color: ${(props) => props.theme.deleteButton};
  text-align: center;
  font-family: sans-serif;
  font-size: 15px;
  color: white;
  /* border: 2px solid ${(props) => props.theme.moreInfoBorder}; */
  border: 2px solid white;
  outline: none;
  padding: 3px;
  width: 80px;
  border-radius: 6px;
  margin: 2px;
  opacity: 50%;
  :hover {
    cursor: pointer;
    opacity: 100%;
    transition: 0.8s;
  }
`;

/////////Specialist and salon details page//////////

export const ProfileWrapper = styled.div`
  width: 100vw;
  display: flex;
  /* min-height: 100vh; */
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const ProfileContainer = styled.div`
  width: 700px;
  height: 400px;
  display: flex;
  background: radial-gradient(
    ellipse at left bottom,
    rgba(22, 24, 47, 1) 0%,
    rgba(38, 20, 72, 0.9) 59%,
    rgba(17, 27, 75, 0.9) 100%
  );
  box-shadow: 1px 1px 6px black;
  padding: 10px;
  align-items: center;
  @media (max-width: 760px) {
    width: 400px;
    height: 500px;
    flex-direction: column;
    align-items: center;
  }
`;
export const ImageAndIconsWrapper = styled.div`
  display: flex;
  padding: 5px;
  width: 40%;
  height: 95%;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: green; */
  align-items: center;
  @media (max-width: 760px) {
    height: 130px;
    flex-direction: row;
    width: 90%;
    align-items: center;
  }
`;

export const SalonImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 40px;
  background-image: url(${noAvailableImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 20px;
  @media (max-width: 760px) {
    width: 120px;
    height: 120px;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 150px;
  height: 80px;
  flex-direction: column;
  /* background-color: yellow; */
  /* @media (max-width: 760px) {
    height: 100px;
  } */
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 96%;
  height: 98%;
  /* background-color: red; */
  margin-top: 20px;
  overflow: scroll;
  justify-content: center;
  align-items: center;
  /* padding: 5px; */

  @media (max-width: 760px) {
    height: 3000px;
  }
`;

export const InfoContainer = styled.div`
  display: grid;
  justify-content: space-around;
  align-items: center;
  grid-template-columns: repeat(2, auto);
  gap: 10px;
  width: 90%;
  height: 100%;
  overflow: scroll;
  /* background-color: yellow; */
`;

export const TextContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: #132239;
  width: 200px;
  height: 100px;
  border-radius: 8px;
  @media (max-width: 760px) {
    width: 150px;
  }
`;

export const TitleStyle = styled.p`
  color: white;
  font-weight: bold;
`;

export const InfoStyle = styled.p`
  color: white;
  font-weight: bold;
`;
