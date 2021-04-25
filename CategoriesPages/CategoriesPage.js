import React from "react";
// Importing salonAuth
import salonAuth from "../../stores/salonAuth";
// Importing categoryStore
import categoryStore from "../../stores/categoryStore";
// Importing category modal component
import CategoryModal from "../../modals/CategoryModal";
// Importing observer
import { observer } from "mobx-react";
// Imporing category list
import CategoryList from "./CategoryList";
// Importing buttons
import AddButton from "../Buttons/AddButton";
// Importing Loading
import Loading from "../Loading/Loading";

const CategoriesPage = ({ modalStatus, isOpen, closeModal, category }) => {
  return (
    <div>
      {!categoryStore.loading ? (
        <>
          <CategoryList
            salonId={salonAuth.salon.id}
            modalStatus={modalStatus}
            oldCategory={category}
          />
          <CategoryModal
            isOpen={isOpen}
            modalStatus={modalStatus}
            closeModal={closeModal}
            oldCategory={category}
          />
          <AddButton modalStatus={modalStatus} />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default observer(CategoriesPage);
