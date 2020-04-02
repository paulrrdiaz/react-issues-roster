import React from "react";
import { Link, Location } from "@reach/router";
import { Header, Title, Nav } from "./Header.styles";
import { Bug } from "components/Icons";
import StubbornButton from "components/StubbornButton";

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
            <Nav>
              <ul>
                <li>
                  <StubbornButton />
                </li>
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
            </Nav>
          </div>
        </Header>
      )}
    </Location>
  );
};
