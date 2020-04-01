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
