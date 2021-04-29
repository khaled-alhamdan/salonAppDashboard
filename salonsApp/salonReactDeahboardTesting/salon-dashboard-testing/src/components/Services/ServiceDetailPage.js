import React from "react";
// Importing observer
import { observer } from "mobx-react";
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
// Importing Loading
import Loading from "../Loading/Loading";

const ServiceDetailPage = () => {
  const { categoryId } = useParams();
  const { serviceId } = useParams();

  if (serviceStore.loading) return <loading />;

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
          <AddButton categoryId={categoryId} serviceId={serviceId} />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default observer(ServiceDetailPage);
