import React, { useState } from "react";
// Importing categorys store
import specialistStore from "../stores/specialistStore";
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
    height: "450px",
    overflow: "scroll",
  },
};

const SpecialistModal = ({ oldSpecialist, isOpen, closeModal }) => {
  // const { storeId } = useParams();

  const [specialist, setSpecialist] = useState(
    oldSpecialist ?? {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      gender: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    setSpecialist({
      ...specialist,
      [event.target.name]:
        event.target.name === "image"
          ? event.target.files[0]
          : event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    specialistStore.createSpecialistForSalon(specialist);
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
                    placeholder="Enter specialist username"
                    name="username"
                    value={specialist.username}
                    onChange={handleChange}
                  />
                </ModalInputDiv>
              </div>
              <div>
                <ModalLabels> First name :</ModalLabels>
                <ModalInputDiv>
                  <ModalInput
                    type="text"
                    placeholder="Enter specialist first name"
                    name="firstName"
                    value={specialist.firstName}
                    onChange={handleChange}
                  />
                </ModalInputDiv>
              </div>
              <div>
                <ModalLabels> Last name :</ModalLabels>
                <ModalInputDiv>
                  <ModalInput
                    type="text"
                    placeholder="Enter specialist last name"
                    name="lastName"
                    value={specialist.lastName}
                    onChange={handleChange}
                  />
                </ModalInputDiv>
              </div>
              <div>
                <ModalLabels> Email :</ModalLabels>
                <ModalInputDiv>
                  <ModalInput
                    type="text"
                    placeholder="Enter specialist email"
                    name="email"
                    value={specialist.email}
                    onChange={handleChange}
                  />
                </ModalInputDiv>
              </div>
              <div>
                <ModalLabels> Phone :</ModalLabels>
                <ModalInputDiv>
                  <ModalInput
                    type="text"
                    placeholder="Enter specialist phone number"
                    name="phone"
                    value={specialist.phone}
                    onChange={handleChange}
                    // inputMode="numeric"
                  />
                </ModalInputDiv>
              </div>
              <div>
                <ModalLabels> Password :</ModalLabels>
                <ModalInputDiv>
                  <ModalInput
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={specialist.password}
                    onChange={handleChange}
                  />
                </ModalInputDiv>
              </div>

              <div>
                <ModalLabels> Gender :</ModalLabels>
                <ModalInputDiv>
                  <select onChange={handleChange} name="gender">
                    <ModalOption selected value>
                      {``}
                    </ModalOption>
                    <ModalOption value={"male"}>Male</ModalOption>
                    <ModalOption value={"female"}>Feale</ModalOption>
                  </select>
                </ModalInputDiv>
              </div>

              {/* <ModalInputDiv>
                  <select onChange={handleChange} name="gender">
                    <ModalOption selected value>
                      {``}
                    </ModalOption>
                      <ModalOption value={"male"}>
                        Male
                      </ModalOption>
                      <ModalOption value={"female"}>
                        Feale
                      </ModalOption>
                  </select>
                </ModalInputDiv> */}

              <div>
                <ModalLabels> Image :</ModalLabels>
                <ModalInputDiv>
                  <ModalInput
                    type="file"
                    placeholder="Select an image"
                    name="image"
                    // value={specialist.image}
                    onChange={handleChange}
                  />
                </ModalInputDiv>
              </div>
            </div>
            <CreateButtonStyled
              className="btn float-right"
              onSubmit={handleSubmit}
            >
              {oldSpecialist ? "Update" : "Create"}
            </CreateButtonStyled>
          </form>
        </Modal>
      ) : null}
    </>
  );
};

export default observer(SpecialistModal);
