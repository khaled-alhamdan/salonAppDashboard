// Importing useState
import React, { useState } from "react";
// Importing Route and Switch
import { Route, Switch, Redirect } from "react-router";
// Importing Global stayle for theme
import { GlobalStyle, ThemeButton, ThemeButtonDiv } from "./styles";
// Importing Themeprovide
import styled, { ThemeProvider } from "styled-components";
// Importing salon auth
import salonAuth from "./stores/salonAuth";
// Importing observer
import { observer } from "mobx-react";
// import './App.css';

// Importing components
import SigninPage from "./components/signPages/SigninPage";
import HeaderNavbar from "./components/Navbar/HeaderNavbar";
import CategoriesPage from "./components/CategoriesPages/CategoriesPage";
import CategoryDetailsPage from "./components/CategoriesPages/CategoryDetailsPage";
import SpecialistsPage from "./components/SpecialistsPages/SpecialistsPage";
import SpecialistDetailsPage from "./components/SpecialistsPages/SpecialistDetailsPage";
import HomePage from "./components/HomePage/HomePage";
import ServiceDetailPage from "./components/Services/ServiceDetailPage";

// Setting theme colors
const theme = {
  lightTheme: {
    backgroundColor: "#e0e0e0", // main background color
    ListDiv: "#463973",
    ItemWrapper: "#132239",
    moreInfoText: "white",
    moreInfoBorder: "white",
    deleteButton: "#c92f1e",
    updateButton: "green",
    boxColor: "black",
    headerBGC: "black",
    fontColor: "#132239",
    buttonTextColor: "white",
    buttonBGColor: "#132239",
  },
  darkTheme: {
    backgroundColor: "#132239", // main background color
    ListDiv: "#463973",
    ItemWrapper: "#132239",
    moreInfoText: "black",
    moreInfoBorder: "grey",
    deleteButton: "#c92f1e",
    updateButton: "green",
    boxColor: "white",
    headerBGC: "black",
    fontColor: "white",
    buttonTextColor: "black",
    buttonBGColor: "white",
  },
};

const App = () => {
  const [currentTheme, setCurrentTheme] = useState("lightTheme");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "lightTheme" ? "darkTheme" : "lightTheme");
  };

  // const salonLists = salonAuth.salons.find(
  //   (salon) => salon.id === salonAuth.salon.id
  // );

  // console.log(salonLists.categories.map((category) => category.services));

  return (
    <AppWrapperDiv>
      <ThemeProvider theme={theme[currentTheme]}>
        {salonAuth.salon ? <HeaderNavbar /> : null}
        <GlobalStyle />
        <Switch>
          <Route path="/" exact>
            <SigninPage />
          </Route>
          <Route path="/home/:username" exact>
            <HomePage />
          </Route>
          <Route path="/home" exact>
            <Redirect to="/home/:username" exact />
          </Route>
          <Route path="/categories/:categoryId" exact>
            <CategoryDetailsPage />
          </Route>
          <Route path="/categories/:categoryId/:serviceId" exact>
            <ServiceDetailPage />
          </Route>
          <Route path="/categories" exact>
            <CategoriesPage />
          </Route>
          <Route path="/specialists/:specialistId" exact>
            <SpecialistDetailsPage />
          </Route>
          <Route path="/specialists" exact>
            <SpecialistsPage />
          </Route>
        </Switch>
        <ThemeButtonDiv>
          {salonAuth.salon ? (
            <ThemeButton onClick={toggleTheme}>
              {currentTheme === "lightTheme" ? "Dark" : "Light"} Mode
            </ThemeButton>
          ) : null}
        </ThemeButtonDiv>
      </ThemeProvider>
    </AppWrapperDiv>
  );
};

export default observer(App);

const AppWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
`;
