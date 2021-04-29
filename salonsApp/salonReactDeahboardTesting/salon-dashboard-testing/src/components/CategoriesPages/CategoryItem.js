import React from "react";
// Importing categoryStore
import categoryStore from "../../stores/categoryStore";
// Importing observer
import { observer } from "mobx-react";
// Importing styled Link
import { StyledLink } from "../../styles";
// Importing buttons
import UpdateButton from "../Buttons/UpdateButton";
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

const CategoryItem = ({ category }) => {
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent refreshing the page
    categoryStore.deleteCategory(category.id);
  };

  return (
    <div>
      <ItemWrapper>
        <StyledLink to={`/categories/${category.id}`}>
          <ItemNameWrapper>
            <ItemName> {category.name}</ItemName>
          </ItemNameWrapper>
        </StyledLink>

        <ButtonsWrapper>
          <MoreInfoButtonDiv>
            <StyledLink to={`/categories/${category.id}`}>
              <MoreInfoButton> Info</MoreInfoButton>
            </StyledLink>
          </MoreInfoButtonDiv>
          <ButtonsDiv>
            <UpdateButton category={category} />
            <DeleteButton onClick={handleSubmit}> Delete </DeleteButton>
          </ButtonsDiv>
        </ButtonsWrapper>
      </ItemWrapper>
    </div>
  );
};

export default observer(CategoryItem);
