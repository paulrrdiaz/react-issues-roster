import React from "react";

import Simple from "layouts/Simple";
import NotFound from "components/NotFound";
import Particles from "components/Particles";

export default () => (
  <Simple>
    <Particles />
    <div className="app--wrapper">
      <NotFound />
    </div>
  </Simple>
);
