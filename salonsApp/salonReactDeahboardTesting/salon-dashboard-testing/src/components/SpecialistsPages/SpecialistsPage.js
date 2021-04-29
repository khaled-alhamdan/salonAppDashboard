import React from "react";
import salonAuth from "../../stores/salonAuth";
import { observer } from "mobx-react";
// Imporing category list
import SpecialistList from "./SpecialistList";
// Importing buttons
import AddButton from "../Buttons/AddButton";
// Importing Loading
import Loading from "../Loading/Loading";

const SpecialistsPage = () => {
  return (
    <div>
      {!salonAuth.loading ? (
        <>
          <SpecialistList salonId={salonAuth.salon.id} />
          <AddButton />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default observer(SpecialistsPage);
