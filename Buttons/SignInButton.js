import React, { useState } from "react";
import { NavbarButtons } from "../../styles";
import SignInModal from "../../Modals/SignInModal";
import { observer } from "mobx-react";

const SignInButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const modalStatus = () => {
    setIsOpen(!isOpen);
  };
  const closeModal = () => setIsOpen(false);
  return (
    <div>
      <NavbarButtons onClick={modalStatus}> Sign in</NavbarButtons>
      <SignInModal
        isOpen={isOpen}
        modalStatus={modalStatus}
        closeModal={closeModal}
      />
    </div>
  );
};

export default observer(SignInButton);
