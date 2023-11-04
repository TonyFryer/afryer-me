import React from "react";
import Header from "./header";
import Menu from "./nav";
export default ({ children }) => (
  <div className="container">
    <Header />
    <Menu />
    <div>{children}</div>
  </div>
);
