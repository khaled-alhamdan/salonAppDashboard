import React from "react";
import salonAuth from "../../stores/salonAuth";
// Importing category modal component
import SpecialistModal from "../../modals/SpecialistModal";
import { observer } from "mobx-react";
// Imporing category list
import SpecialistList from "./SpecialistList";
// Importing buttons
import AddButton from "../Buttons/AddButton";
// Importing Loading
import Loading from "../Loading/Loading";

const SpecialistsPage = ({ modalStatus, isOpen, closeModal }) => {
  return (
    <div>
      {!salonAuth.loading ? (
        <>
          <SpecialistList
            salonId={salonAuth.salon.id}
            modalStatus={modalStatus}
            closeModal={closeModal}
            isOpen={isOpen}
          />
          <SpecialistModal
            isOpen={isOpen}
            modalStatus={modalStatus}
            closeModal={closeModal}
          />
          <AddButton modalStatus={modalStatus} />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default observer(SpecialistsPage);
