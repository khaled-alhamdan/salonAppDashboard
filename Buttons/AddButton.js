import React, { useState } from "react";
import styled from "styled-components";
// + icon
import { BsPlusCircle } from "react-icons/bs";
// import categoryModal
import CategoryModal from "../../modals/CategoryModal";
// import ServiceModal
import ServiceModal from "../../modals/ServiceModal";
// import ServiceSpecialistModal
import ServiceSpecialistModal from "../../modals/ServiceSpecialistModal";
// import SpecialistModal
import SpecialistModal from "../../modals/SpecialistModal";

const AddButton = ({ categoryId, serviceId, cDcategoryId, salonId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <>
      <PlusAndAddDiv onClick={openModal}>
        <IconPlusCircle />
        <AddNewProductButton>Add</AddNewProductButton>
      </PlusAndAddDiv>
      {categoryId && serviceId ? (
        <ServiceSpecialistModal
          isOpen={isOpen}
          closeModal={closeModal}
          categoryId={categoryId}
          serviceId={serviceId}
        />
      ) : cDcategoryId ? (
        <ServiceModal
          isOpen={isOpen}
          closeModal={closeModal}
          categoryId={cDcategoryId}
        />
      ) : !salonId ? (
        <CategoryModal
          isOpen={isOpen}
          closeModal={closeModal}
          categoryId={categoryId}
        />
      ) : (
        <SpecialistModal isOpen={isOpen} closeModal={closeModal} />
      )}
    </>
  );
};

export default AddButton;

const PlusAndAddDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  width: 80px;
  height: 30px;
  margin-left: auto;
  margin-right: auto;
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
