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
// Importing Loading
import Loading from "../Loading/Loading";

import ServiceList from "../Services/ServiceList";

const CategoryDetailsPage = () => {
  const { categoryId } = useParams();

  return (
    <div>
      {!categoryStore.loading ? (
        <>
          <ServiceList salonId={salonAuth.salon.id} />
          <AddButton cDcategoryId={categoryId} />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default observer(CategoryDetailsPage);
