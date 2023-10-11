import React from "react";
import { Foot, NavBar } from "../component";

const Layout = (prop) => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>{prop.Children}</main>
      <footer>
        <Foot />
      </footer>
    </div>
  );
};

export default Layout;
