import React from "react";
import { Wrapper, Link } from "./NotFound.styles";

export default () => {
  return (
    <>
      <Wrapper>
        <h1>
          <Link to="/">Go Home</Link>
        </h1>
        <p>you're drunk</p>
      </Wrapper>
    </>
  );
};
