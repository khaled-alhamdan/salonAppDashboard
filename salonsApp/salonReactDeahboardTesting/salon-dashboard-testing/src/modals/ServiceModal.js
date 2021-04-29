import React, { useState } from "react";
// Importing categorys store
import serviceStore from "../stores/serviceStore";

import Modal from "react-modal";
import {
  CreateButtonStyled,
  ModalInput,
  ModalInputDiv,
  ModalLabels,
  ClosingModalX,
} from "../styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ServiceModal = ({ oldService, isOpen, closeModal, categoryId }) => {
  const [service, setService] = useState(
    oldService ?? {
      name: "",
      description: "",
      price: "",
    }
  );

  const handleChange = (event) => {
    setService({
      ...service,
      [event.target.name]:
        event.target.name === "image"
          ? event.target.files[0]
          : event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    oldService
      ? serviceStore.updateService(service)
      : serviceStore.createServiceForCategory(service, categoryId);
    // serviceStore.createServiceForCategory(service, id);
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
                <ModalLabels>Name :</ModalLabels>
                <ModalInputDiv>
                  <ModalInput
                    type="text"
                    placeholder="Enter service Name"
                    name="name"
                    value={service.name}
                    onChange={handleChange}
                  />
                </ModalInputDiv>
              </div>
              <div>
                <ModalLabels>Description :</ModalLabels>
                <ModalInputDiv>
                  <ModalInput
                    type="text"
                    placeholder="Enter service description"
                    name="description"
                    value={service.description}
                    onChange={handleChange}
                  />
                </ModalInputDiv>
              </div>
              <div>
                <ModalLabels>Price :</ModalLabels>
                <ModalInputDiv>
                  <ModalInput
                    type="number"
                    placeholder="Enter service price"
                    name="price"
                    value={service.price}
                    onChange={handleChange}
                  />
                </ModalInputDiv>
              </div>
            </div>
            <CreateButtonStyled
              className="btn float-right"
              onSubmit={handleSubmit}
            >
              {oldService ? "Update" : "Create"}
            </CreateButtonStyled>
          </form>
        </Modal>
      ) : null}
    </>
  );
};

export default ServiceModal;
