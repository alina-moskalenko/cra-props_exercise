import React from "react";
import Title from "./Title";
import Description from "./Description";
import UserInfo from "./UserInfo";

// importing logo from src folder - loaded as a file in the bundle
import logoFileFromSRC from "../logo.svg";

// Logo served from the public folder (Production only)
// const logoPublicUrl = '/logo512.png';

// We don't need to specify the `props` argument as we are not using them in this component
function Header() {
  return (
    <header className="App-header">
      <UserInfo />
      <Title appTitle="Welcome to React, Ironhacker!" />
      <Description>You are ready to take this to the next level!</Description>
    </header>
  );
}

// export the component
export default Header;
