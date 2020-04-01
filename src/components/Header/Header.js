import React from "react";
import { Link, Location } from "@reach/router";
import { Header, Title } from "./Header.styles";
import { Bug } from "components/Icons";

export default () => {
  return (
    <Location>
      {({ location }) => (
        <Header>
          <div className="app--wrapper">
            <Title>
              <Link to="/">
                <Bug color="#fff" width="40px" /> Issues roster
              </Link>
            </Title>
            <nav>
              <ul>
                <li>
                  <Link
                    state={{
                      oldLocation: JSON.parse(JSON.stringify(location)),
                    }}
                    to="/repo"
                  >
                    Update repo
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </Header>
      )}
    </Location>
  );
};
