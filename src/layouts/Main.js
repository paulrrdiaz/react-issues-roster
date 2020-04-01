import React from "react";
import Header from "components/Header";

export default ({ children }) => {
  return (
    <>
      <Header />
      <div className="app--wrapper">
        <main>{children}</main>
      </div>
    </>
  );
};
