import React, { useState } from "react";
// Importing specialistStore
import specialistStore from "../../stores/specialistStore";
// Importing observer
import { observer } from "mobx-react";
// Importing search bar
import SearchBar from "../Navbar/SearchBar";
// Importing SpecialistItem
import SpecialistItem from "./SpecialistItem";
// Importing from styles
import { ListWrapper, ListDiv } from "../../styles";
// Importing Loading
import Loading from "../Loading/Loading";

const SpecialistList = ({ salonId, modalStatus }) => {
  const [search, setSearch] = useState("");
  if (specialistStore.loading) return <Loading />;

  const specialistsList = specialistStore.specialists
    .filter((specialist) => +specialist.salonId === +salonId)
    .filter((specialist) =>
      specialist.username.toLowerCase().includes(search.toLowerCase())
    )
    .map((specialist) => (
      <SpecialistItem
        key={specialist.id}
        specialist={specialist}
        modalStatus={modalStatus}
      />
    ));

  return (
    <ListWrapper>
      <SearchBar setSearch={setSearch} />
      {specialistsList.length > 0 ? (
        <ListDiv>{specialistsList}</ListDiv>
      ) : (
        <h3> You have not added any specialist yet! </h3>
      )}
    </ListWrapper>
  );
};

export default observer(SpecialistList);
