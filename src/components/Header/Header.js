import React, { useState } from "react";
import { Link, Location } from "@reach/router";
import { Header, Title, Nav, CallNav } from "./Header.styles";
import { Bug, Menu, Close } from "components/Icons";
import { AnimateOnChange } from "react-animation";
import StubbornButton from "components/StubbornButton";

export default () => {
  const [showNav, setShowNav] = useState(false);

  const onClick = () => setShowNav(prevShowNav => !prevShowNav);

  return (
    <>
      <Location>
        {({ location }) => (
          <Header>
            <div className="app--wrapper">
              <Title>
                <Link to="/">
                  <Bug color="#fff" width="40px" /> Issues roster
                </Link>
              </Title>
              <Nav visible={showNav}>
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
            <CallNav onClick={onClick}>
              <AnimateOnChange animationIn="bounceIn" animationOut="bounceOut" durationOut={500}>
                {showNav ? <Close width="100%" color="#fff" /> : <Menu width="100%" color="#fff" />}
              </AnimateOnChange>
            </CallNav>
          </Header>
        )}
      </Location>
    </>
  );
};
