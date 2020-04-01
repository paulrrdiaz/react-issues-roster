import React from "react";
import { Location } from "@reach/router";
import { Dialog } from "@reach/dialog";
import { Global, css } from "@emotion/core";

import { AppProvider } from "context";
import Routes from "routes";
import globals from "styles/globals";

export default () => {
  return (
    <Location>
      {({ location, navigate }) => {
        const { oldLocation } = location.state || {};

        return (
          <AppProvider>
            <Global
              styles={css`
                ${globals}
              `}
            />
            <Routes location={oldLocation != null ? oldLocation : location} />
            <Dialog
              isOpen={oldLocation != null}
              onDismiss={() => {
                navigate(oldLocation.pathname);
              }}
            >
              <Routes location={location} />
            </Dialog>
          </AppProvider>
        );
      }}
    </Location>
  );
};
