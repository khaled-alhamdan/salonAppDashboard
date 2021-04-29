import React, { useState } from "react";
// Importing categorys store
import salonAuth from "../stores/salonAuth";
import { observer } from "mobx-react";

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
    height: "450px",
    overflow: "scroll",
  },
};

const SalonModal = ({ oldSalon, isOpen, closeModal }) => {
  // const { storeId } = useParams();

  const [salon, setSalon] = useState(
    oldSalon ?? {
      username: "",
      address: "",
      email: "",
      phone: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    setSalon({
      ...salon,
      [event.target.name]:
        event.target.name === "image"
          ? event.target.files[0]
          : event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    salonAuth.updateSalon(salon);
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
                <ModalLabels>Userame :</ModalLabels>
                <ModalInputDiv>
                  <ModalInput
                    type="text"
                    placeholder="Enter salon name"
                    name="username"
                    value={salon.username}
                    onChange={handleChange}
                  />
                </ModalInputDiv>
              </div>
              <div>
                <ModalLabels> Address :</ModalLabels>
                <ModalInputDiv>
                  <ModalInput
                    type="text"
                    placeholder="Enter salon address"
                    name="address"
                    value={salon.address}
                    onChange={handleChange}
                  />
                </ModalInputDiv>
              </div>
              <div>
                <ModalLabels> Email :</ModalLabels>
                <ModalInputDiv>
                  <ModalInput
                    type="text"
                    placeholder="Enter salon email"
                    name="email"
                    value={salon.email}
                    onChange={handleChange}
                  />
                </ModalInputDiv>
              </div>
              <div>
                <ModalLabels> Phone :</ModalLabels>
                <ModalInputDiv>
                  <ModalInput
                    type="number"
                    placeholder="Enter salon phone number"
                    name="phone"
                    value={salon.phone}
                    onChange={handleChange}
                  />
                </ModalInputDiv>
              </div>
              <div>
                <ModalLabels> Image :</ModalLabels>
                <ModalInputDiv>
                  <ModalInput
                    type="file"
                    placeholder="Select image"
                    name="image"
                    // value={salon.image}
                    onChange={handleChange}
                  />
                </ModalInputDiv>
              </div>
            </div>
            <CreateButtonStyled
              className="btn float-right"
              onSubmit={handleSubmit}
            >
              Update
            </CreateButtonStyled>
          </form>
        </Modal>
      ) : null}
    </>
  );
};

export default observer(SalonModal);
