import React, { useState } from "react";
// Importing serviceStore
import serviceStore from "../../stores/serviceStore";
// Importing observer
import { observer } from "mobx-react";
// Importing search bar
import SearchBar from "../Navbar/SearchBar";
// Importing ServiceItem
import ServiceItem from "./ServiceItem";
// Importing useParams
import { useParams } from "react-router-dom";
// Importing from styles
import { ListWrapper, ListDiv } from "../../styles";
// Importing Loading
import Loading from "../Loading/Loading";

const ServiceList = ({ salonId }) => {
  const [search, setSearch] = useState("");
  const { categoryId } = useParams();

  if (serviceStore.loading) return <Loading />;

  const servicesList = serviceStore.services
    .filter((service) => +service.salonId === +salonId)
    .filter((service) => +service.categoryId === +categoryId)
    .filter((service) =>
      service.name.toLowerCase().includes(search.toLowerCase())
    )
    .map((service) => (
      <ServiceItem key={service.id} service={service} categoryId={categoryId} />
    ));

  return (
    <ListWrapper>
      <SearchBar setSearch={setSearch} />
      {servicesList.length > 0 ? (
        <ListDiv>{servicesList}</ListDiv>
      ) : (
        <h3> You have not added any services yet!</h3>
      )}
    </ListWrapper>
  );
};

export default observer(ServiceList);
