import React from "react";
import { Router } from "@reach/router";

import Home from "views/Home";
import Repo from "views/Repo";
import NotFound from "views/NotFound";

export default props => (
  <Router {...props}>
    <NotFound path="*" />
    <Home path="/" />
    <Repo path="/repo" />
  </Router>
);
