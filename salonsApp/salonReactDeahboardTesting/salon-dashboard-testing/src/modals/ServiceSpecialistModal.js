import React, { useState } from "react";
// Importing salonAuth store
import salonAuth from "../stores/salonAuth";
// Importing service store
import serviceStore from "../stores/serviceStore";
// Importing specialist store
import specialistStore from "../stores/specialistStore";
// Importing observer
import { observer } from "mobx-react";

import Modal from "react-modal";
import {
  CreateButtonStyled,
  ModalInput,
  ModalInputDiv,
  ModalLabels,
  ClosingModalX,
  ModalOption,
} from "../styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "260px",
    overflow: "scroll",
  },
};

const ServiceSpecialistModal = ({
  isOpen,
  closeModal,
  serviceId,
  categoryId,
}) => {
  const [serviceSpecialist, setServiceSpecialist] = useState({
    specialistId: null,
  });

  const handleChange = (event) => {
    setServiceSpecialist({
      ...serviceSpecialist,
      [event.target.name]:
        event.target.name === "image"
          ? event.target.files[0]
          : event.target.value,
    });
  };

  const filteredSpecialist = specialistStore.specialists.filter(
    (specialist) => +specialist.salonId === salonAuth.salon.id
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    serviceStore.assignServiceToSpecialist(serviceSpecialist, serviceId);
    closeModal();
  };

  return (
    <>
      {isOpen ? (
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
          contentLabel="Example Modal"
        >
          <form onSubmit={handleSubmit}>
            <ClosingModalX onClick={closeModal} />
            <div>
              <div>
                <ModalLabels>Category name :</ModalLabels>
                <ModalInputDiv>
                  <ModalInput type="text" value={categoryId} />
                </ModalInputDiv>
              </div>
              <div>
                <ModalLabels> Service name :</ModalLabels>
                <ModalInputDiv>
                  <ModalInput type="text" value={serviceId} />
                </ModalInputDiv>
              </div>
              <div>
                <ModalLabels> Specialist name :</ModalLabels>
                <ModalInputDiv>
                  <select onChange={handleChange} name="specialistId">
                    <ModalOption selected value>
                      Choose a specialist
                    </ModalOption>
                    {filteredSpecialist.map((specialist) => (
                      <ModalOption value={specialist.id}>
                        {specialist.firstName} {specialist.lastName}
                      </ModalOption>
                    ))}
                  </select>
                </ModalInputDiv>
              </div>
            </div>
            <CreateButtonStyled
              className="btn float-right"
              onSubmit={handleSubmit}
            >
              Assign
            </CreateButtonStyled>
          </form>
        </Modal>
      ) : null}
    </>
  );
};

export default observer(ServiceSpecialistModal);
