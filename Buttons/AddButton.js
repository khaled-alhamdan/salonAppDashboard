import React from "react";
import styled from "styled-components";
// + icon
import { BsPlusCircle } from "react-icons/bs";

const AddButton = ({ modalStatus }) => {
  return (
    <>
      <PlusAndAddDiv>
        <IconPlusCircle onClick={modalStatus} />
        <AddNewProductButton onClick={modalStatus}>Add</AddNewProductButton>
      </PlusAndAddDiv>
    </>
  );
};

export default AddButton;

const PlusAndAddDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  margin-top: 25px;
`;

const IconPlusCircle = styled(BsPlusCircle)`
  cursor: pointer;
  width: 25px;
  height: 25px;
  color: ${(props) => props.theme.fontColor};
`;

const AddNewProductButton = styled.p`
  margin: 4px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
`;
