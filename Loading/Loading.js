import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Loading = () => {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader
        type="BallTriangle"
        color="#132239"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
};

export default Loading;
