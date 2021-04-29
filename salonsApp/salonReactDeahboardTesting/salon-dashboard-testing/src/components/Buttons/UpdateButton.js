import React, { useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
// import categoryModal
import CategoryModal from "../../modals/CategoryModal";
// import SalonModal
import SalonModal from "../../modals/SalonModal";
// import ServiceModal
import ServiceModal from "../../modals/ServiceModal";

const UpdateButton = ({ category, salon, service }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <CategoryModal
        isOpen={isOpen}
        closeModal={closeModal}
        oldCategory={category}
      />
      {/* <SalonModal isOpen={isOpen} closeModal={closeModal} oldSalon={salon} /> */}
      {/* <ServiceModal
        isOpen={isOpen}
        closeModal={closeModal}
        oldService={service}
      /> */}
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
