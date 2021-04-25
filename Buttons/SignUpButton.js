import React, { useState } from "react";
import { NavbarButtons } from "../../styles";
import SignUpModal from "../../Modals/SignUpModal";

const SignUpButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const modalStatus = () => {
    setIsOpen(!isOpen);
  };
  const closeModal = () => setIsOpen(false);
  return (
    <div>
      <NavbarButtons onClick={modalStatus}> Sign up</NavbarButtons>
      <SignUpModal
        isOpen={isOpen}
        modalStatus={modalStatus}
        closeModal={closeModal}
      />
    </div>
  );
};

export default SignUpButton;
