import React, { useState } from "react";
// Importing observer
import { observer } from "mobx-react";
// Importing salonAuth
import salonAuth from "../../stores/salonAuth";
// Importing serviceStore
import serviceStore from "../../stores/serviceStore";
// Importing useParams
import { useParams } from "react-router-dom";
// Importing styled Link
import { StyledLink } from "../../styles";
// Importing from styles
import {
  ListWrapper,
  ListDiv,
  ItemWrapper,
  ItemNameWrapper,
  ItemName,
  ButtonsWrapper,
  ButtonsDiv,
  MoreInfoButtonDiv,
  MoreInfoButton,
  DeleteButton,
} from "../../styles";
// Importing buttons
import AddButton from "../Buttons/AddButton";
// Importing ServiceSpecialistModal component
import ServiceSpecialistModal from "../../modals/ServiceSpecialistModal";
// Importing Loading
import Loading from "../Loading/Loading";

const ServiceDetailPage = () => {
  const { categoryId } = useParams();
  const { serviceId } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  if (serviceStore.loading) return <loading />;

  const modalStatus = () => {
    setIsOpen(!isOpen);
  };
  const closeModal = () => setIsOpen(false);

  const foundService = serviceStore.services.find(
    (service) => service.id === +serviceId
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    serviceStore.removeServiceFromSpecialist(
      serviceId,
      foundService.specialistServices[0].specialistId
    );
  };

  const serviceDetails = foundService.specialistServices.map((service) => (
    <div key={service.id}>
      <ItemWrapper>
        <StyledLink to={`/specialists/${service.specialistId}`}>
          <ItemNameWrapper>
            <ItemName> {service.specialistName}</ItemName>
          </ItemNameWrapper>
        </StyledLink>

        <ButtonsWrapper>
          <MoreInfoButtonDiv>
            <StyledLink to={`/specialists/${service.specialistId}`}>
              <MoreInfoButton> Info</MoreInfoButton>
            </StyledLink>
          </MoreInfoButtonDiv>
          <ButtonsDiv>
            <DeleteButton onClick={handleSubmit}> Remove </DeleteButton>
          </ButtonsDiv>
        </ButtonsWrapper>
      </ItemWrapper>
    </div>
  ));

  return (
    <div>
      {!serviceStore.loading ? (
        <>
          <ListWrapper>
            {serviceDetails.length > 0 ? (
              <>
                <h3>
                  {foundService.name} can be provided by the following
                  specialists
                </h3>
                <ListDiv>{serviceDetails}</ListDiv>
              </>
            ) : (
              <h3>
                None of your salon specialist can provide this service yet!
              </h3>
            )}
          </ListWrapper>
          <ServiceSpecialistModal
            isOpen={isOpen}
            modalStatus={modalStatus}
            closeModal={closeModal}
            categoryId={categoryId}
            serviceId={serviceId}
          />
          <AddButton modalStatus={modalStatus} />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default observer(ServiceDetailPage);
