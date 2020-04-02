import styled from "@emotion/styled";
import { getFontSize } from "styles/utils";

export const Header = styled("header")`
  background-color: rgb(var(--blue));
  color: rgb(var(--white));
  display: block;
  padding: 10px 0;

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

  a {
    align-items: center;
    display: flex;
  }

  .icon {
    margin-right: 10px;
  }
`;

export const Nav = styled("nav")`
  ul {
    display: flex;
    align-items: center;
  }

  li {
    text-align: center;

    button,
    a {
      ${getFontSize(15)};
      border-radius: 4px;
      padding: 7px 15px;
      text-transform: uppercase;
      transition: background-color 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) 0s;

      &:hover {
        background-color: rgba(var(--black), 0.5);
      }
    }
  }
`;
