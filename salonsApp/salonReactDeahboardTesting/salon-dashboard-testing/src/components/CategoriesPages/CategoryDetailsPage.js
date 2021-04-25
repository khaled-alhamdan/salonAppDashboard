import React from "react";
// Importing salonAuth
import salonAuth from "../../stores/salonAuth";
// Importing categoryStore
import categoryStore from "../../stores/categoryStore";
// Importing observer
import { observer } from "mobx-react";
// Importing useParams
import { useParams } from "react-router-dom";
// Importing buttons
import AddButton from "../Buttons/AddButton";
// Importing service modal component
import ServiceModal from "../../modals/ServiceModal";
// Importing Loading
import Loading from "../Loading/Loading";

import ServiceList from "../Services/ServiceList";

const CategoryDetailsPage = ({ modalStatus, isOpen, closeModal }) => {
  const { categoryId } = useParams();

  return (
    <div>
      {!categoryStore.loading ? (
        <>
          <ServiceList salonId={salonAuth.salon.id} />
          <ServiceModal
            isOpen={isOpen}
            modalStatus={modalStatus}
            closeModal={closeModal}
            categoryId={categoryId}
          />
          <AddButton modalStatus={modalStatus} />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default observer(CategoryDetailsPage);
