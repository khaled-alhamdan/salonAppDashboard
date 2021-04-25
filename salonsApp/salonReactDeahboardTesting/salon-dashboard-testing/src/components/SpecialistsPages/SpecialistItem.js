import React from "react";
// Importing specialistStore
import specialistStore from "../../stores/specialistStore";
// Importing observer
import { observer } from "mobx-react";
// Importing styled Link
import { StyledLink } from "../../styles";
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

const SpecialistItem = (props) => {
  const specialist = props.specialist;

  const handleSubmit = (event) => {
    event.preventDefault();
    specialistStore.deleteSpecialist(specialist.id);
    alert("Specialist account has been deleted");
  };

  return (
    <div>
      <ItemWrapper>
        <StyledLink to={`/specialists/${specialist.id}`}>
          <ItemNameWrapper>
            <ItemName> {specialist.username}</ItemName>
          </ItemNameWrapper>
        </StyledLink>

        <ButtonsWrapper>
          <MoreInfoButtonDiv>
            <StyledLink to={`/specialists/${specialist.id}`}>
              <MoreInfoButton> Info</MoreInfoButton>
            </StyledLink>
          </MoreInfoButtonDiv>
          <ButtonsDiv>
            <DeleteButton onClick={handleSubmit}> Delete </DeleteButton>
          </ButtonsDiv>
        </ButtonsWrapper>
      </ItemWrapper>
    </div>
  );
};

export default observer(SpecialistItem);
