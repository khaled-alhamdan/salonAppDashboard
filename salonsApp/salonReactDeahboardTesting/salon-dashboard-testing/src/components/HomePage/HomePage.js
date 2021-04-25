import React from "react";
import SalonDetailPage from "../SalonPages/SalonDetailPage";
// Importing observer
import { observer } from "mobx-react";

const HomePage = ({ modalStatus, isOpen, closeModal }) => {
  return (
    <div>
      {/* <h1> Im home page</h1> */}
      <SalonDetailPage
        modalStatus={modalStatus}
        closeModal={closeModal}
        isOpen={isOpen}
      />
    </div>
  );
};

export default observer(HomePage);
