import React, { useState } from "react";
// Importing salon auth
import salonAuth from "../../stores/salonAuth";
// Importing observer
import { observer } from "mobx-react";
// Importing styled components
import styled from "styled-components";
// Importing Route and Switch
import { Redirect } from "react-router";

// Importing assests
import AppLogo from "../../media/headerLogo.png";
import HeaderBG from "../../media/headerBG.png";

// Importing useHistory
// import { useHistory } from "react-router-dom";

const SigninPage = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  if (salonAuth.salon) return <Redirect to={`/home/${user.username}`} />;

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  // const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    salonAuth.signin(user);

    // if (salonAuth.salon) {
    // history.push(`/home/${user.username}`);
    // }
  };

  return (
    <>
      <Header>
        <HeaderLogoInfoDiv>
          <Logo />
        </HeaderLogoInfoDiv>
      </Header>
      <LoginDiv>
        <LogoDiv>
          <Logo style={{ width: "200px", height: "200px" }} />
        </LogoDiv>
        <form onSubmit={handleSubmit}>
          <LoginContainer>
            <LoginLabel> Username </LoginLabel>
            <LoginInput
              type="text"
              required
              placeholder="Enter username"
              name="username"
              onChange={handleChange}
            />
            <LoginLabel> Password </LoginLabel>
            <LoginInput
              type="text"
              required
              placeholder="Enter password"
              name="password"
              onChange={handleChange}
            />
            <LoginButton onSubmit={handleSubmit}>Sign in</LoginButton>
          </LoginContainer>
        </form>
      </LoginDiv>
    </>
  );
};

export default observer(SigninPage);

const LoginDiv = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  width: 100vw;
  height: 90px;
  margin-bottom: -40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${HeaderBG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 760px) {
    width: 0px;
    height: 0px;
    margin-bottom: 0;
  }
`;

const HeaderLogoInfoDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* background-color: yellow; */
`;

const LogoDiv = styled.div`
  width: 300px;
  height: 520px;
  /* background-color: black; */
  position: relative;
  background-image: url(${HeaderBG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: none;

  @media (max-width: 760px) {
    width: 0px;
    height: 0px;
    display: none;
  }
`;

const Logo = styled.div`
  width: 100px;
  height: 80px;
  margin-top: auto;
  margin-bottom: auto;
  background-image: url(${AppLogo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const LoginContainer = styled.div`
  padding: 60px;
  /* margin: 10px; */
  width: 250px;
  max-width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: radial-gradient(
    ellipse at left bottom,
    rgba(22, 24, 47, 1) 0%,
    rgba(38, 20, 72, 0.9) 59%,
    rgba(17, 27, 75, 0.9) 100%
  );
  box-shadow: 0 50px 70px -20px rgba(0, 0, 0, 0.8);
  @media (max-width: 760px) {
    height: 300px;
  }
  transition: ease-in-out;
`;

const LoginLabel = styled.label`
  color: white;
  margin: 14px 0;
  display: block;
  font-size: 22px;
  line-height: 1;
`;

const LoginInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 19px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  letter-spacing: 1px;
`;

const LoginButton = styled.button`
  border: none;
  outline: none;
  width: 108%;
  padding: 15px 0;
  color: #fff;
  font-size: 16px;
  letter-spacing: 1px;
  background: #603bbb;
  cursor: pointer;
  margin-top: 15px;
`;
