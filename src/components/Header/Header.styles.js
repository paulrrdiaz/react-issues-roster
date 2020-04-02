import styled from "@emotion/styled";
import styledMap from "styled-map";
import { getFontSize, media } from "styles/utils";

export const Header = styled("header")`
  background-color: rgb(var(--blue));
  position: relative;
  color: rgb(var(--white));
  display: block;
  padding: 10px 0;
  z-index: 99;

  .app--wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Title = styled("h1")`
  ${getFontSize(24)};
  font-family: var(--fontTitle);
  font-weight: 900;
  text-transform: uppercase;
  flex: 1;

  a {
    align-items: center;
    justify-content: center;
    display: flex;
  }

  .icon {
    margin-right: 10px;
  }

  ${media("medium")} {
    flex: none;
  }
`;

export const Nav = styled("nav")`
  position: fixed;
  top: 0;
  left: ${styledMap`
    visible: 0;
    default: -100vw;
  `};
  bottom: 0;
  width: 100vw;
  padding: 20px 10px;
  background-color: ${styledMap`
    visible: rgba(var(--black), 0.5);
    default: transparent;
  `};
  z-index: 10;
  transition: left 0.3s cubic-bezier(0.19, 1, 0.22, 1) 0s,
    background-color 0.3s cubic-bezier(0.19, 1, 0.22, 1) 0.3s;

  ${media("medium")} {
    background-color: transparent;
    display: block;
    padding: 0;
    left: auto;
    position: relative;
    width: auto;
  }

  ul {
    background-color: rgb(var(--blue));
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column-reverse;
    width: 80vw;

    ${media("medium")} {
      flex-direction: row;
      position: relative;
      width: auto;
    }
  }

  li {
    text-align: center;

    & + li {
      border-bottom: 1px solid rgb(var(--white));

      ${media("medium")} {
        border-bottom: 0;
      }
    }

    button,
    a {
      ${getFontSize(24)};
      display: inline-block;
      border-radius: 4px;
      max-width: 80%;
      padding: 15px;
      text-transform: uppercase;
      transition: background-color 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) 0s;

      ${media("medium")} {
        ${getFontSize(15)};
        max-width: none;
        padding: 7px 15px;
      }

      &:hover {
        ${media("medium")} {
          background-color: rgba(var(--black), 0.5);
        }
      }
    }
  }
`;

export const CallNav = styled("button")`
  position: fixed;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: 15px;
  background-color: rgba(var(--black), 0.75);
  display: block;
  z-index: 100;
  bottom: 10px;
  left: 10px;

  ${media("medium")} {
    display: none;
  }
`;
