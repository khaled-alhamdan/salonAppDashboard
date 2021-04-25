import React, { useState } from "react";
// Importing categoryStore
import categoryStore from "../../stores/categoryStore";
// Importing observer
import { observer } from "mobx-react";
// Importing search bar
import SearchBar from "../Navbar/SearchBar";
// Importing CategoryItem
import CategoryItem from "./CategoryItem";
// Importing from styles
import { ListWrapper, ListDiv } from "../../styles";
// Importing Loading
import Loading from "../Loading/Loading";

const CategoryList = ({ salonId, modalStatus, oldCategory }) => {
  const [search, setSearch] = useState("");
  if (categoryStore.loading) return <Loading />;

  const categoriesList = categoryStore.categories
    .filter((category) => category.salonId === +salonId)
    .filter((category) =>
      category.name.toLowerCase().includes(search.toLowerCase())
    )
    .map((category) => (
      <CategoryItem
        key={category.id}
        category={category}
        modalStatus={modalStatus}
        oldCategory={oldCategory}
      />
    ));

  return (
    <ListWrapper>
      <SearchBar setSearch={setSearch} />
      {categoriesList.length > 0 ? (
        <ListDiv>{categoriesList}</ListDiv>
      ) : (
        <h3> You have not added any category yet!</h3>
      )}
    </ListWrapper>
  );
};

export default observer(CategoryList);
