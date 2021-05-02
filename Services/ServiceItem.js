import React from "react";
// Importing serviceStore
import serviceStore from "../../stores/serviceStore";
// Importing observer
import { observer } from "mobx-react";
// Importing styled Link
import { StyledLink } from "../../styles";
// Importing buttons
import UpdateButton from "../Buttons/UpdateButton";
// Importing UseParams
import { useParams } from "react-router-dom";
// Importing from styles
import {
  ItemWrapper,
  ItemNameWrapper,
  ItemName,
  ButtonsWrapper,
  ButtonsDiv,
  MoreInfoButtonDiv,
  MoreInfoButton,
  DeleteButton,
} from "../../styles";

const ServiceItem = ({ service }) => {
  const { categoryId } = useParams();
  // const service = props.service;

  const handleSubmit = (event) => {
    event.preventDefault();
    serviceStore.deleteService(service.id);
  };

  return (
    <div>
      <ItemWrapper>
        <StyledLink to={`/categories/${categoryId}/${service.id}`}>
          <ItemNameWrapper>
            <ItemName> {service.name}</ItemName>
          </ItemNameWrapper>
        </StyledLink>

        <ButtonsWrapper>
          <MoreInfoButtonDiv>
            <StyledLink to={`/categories/${categoryId}/${service.id}`}>
              <MoreInfoButton> Info</MoreInfoButton>
            </StyledLink>
          </MoreInfoButtonDiv>
          <ButtonsDiv>
            <UpdateButton service={service} />
            <DeleteButton onClick={handleSubmit}> Delete </DeleteButton>
          </ButtonsDiv>
        </ButtonsWrapper>
      </ItemWrapper>
    </div>
  );
};

export default observer(ServiceItem);
