import React from "react";

import Simple from "layouts/Simple";
import NotFound from "components/NotFound";
import Particles from "components/Particles";
import SEO from "components/SEO";

export default () => (
  <>
    <SEO title="⛔️ 404 Not Found" />
    <Simple>
      <Particles />
      <div className="app--wrapper">
        <NotFound />
      </div>
    </Simple>
  </>
);
