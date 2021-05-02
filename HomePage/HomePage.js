import React from "react";
import SalonDetailPage from "../SalonPages/SalonDetailPage";
// Importing observer
import { observer } from "mobx-react";

const HomePage = () => {
  return (
    <div>
      {/* <h1> Im home page</h1> */}
      <SalonDetailPage />
    </div>
  );
};

export default observer(HomePage);
