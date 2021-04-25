import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

const UpdateButton = ({
  modalStatus,
  oldSalon,
  oldCategory,
  oldSpecialis,
  oldService,
}) => {
  // console.log(oldSalon);
  return (
    <>
      <UpdateButtonStyled
        onClick={modalStatus}
        oldSalon={oldSalon}
        oldCategory={oldCategory}
        oldSpecialis={oldSpecialis}
        oldService={oldService}
      >
        Update
      </UpdateButtonStyled>
    </>
  );
};

export default observer(UpdateButton);

const UpdateButtonStyled = styled.button`
  text-align: center;
  font-family: sans-serif;
  font-size: 15px;
  color: white;
  background-color: ${(props) => props.theme.updateButton};
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
