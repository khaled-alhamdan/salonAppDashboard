import React from "react";
// Importing salonAuth
import salonAuth from "../../stores/salonAuth";
// Importing categoryStore
import categoryStore from "../../stores/categoryStore";
// Importing observer
import { observer } from "mobx-react";
// Imporing category list
import CategoryList from "./CategoryList";
// Importing buttons
import AddButton from "../Buttons/AddButton";
// Importing Loading
import Loading from "../Loading/Loading";

const CategoriesPage = () => {
  return (
    <div>
      {!categoryStore.loading ? (
        <>
          <CategoryList salonId={salonAuth.salon.id} />
          <AddButton />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default observer(CategoriesPage);
