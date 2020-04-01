import styled from "@emotion/styled";
import styledMap from "styled-map";
import contrast from "contrast";
import { getFontSize } from "styles/utils";

export const List = styled("ul")`
  margin-top: 20px;
`;

export const Item = styled("li")`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${styledMap`
    active: rgba(var(--blue), .85);
    default: rgba(var(--white));
  `};
  color: ${styledMap`
    active: rgba(var(--white));
    default: rgba(var(--blue));
  `};
  padding: 12px 15px;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1) 0s;
  z-index: 1;

  &:hover {
    background-color: rgba(var(--blue), 0.85);
    color: rgba(var(--white));
    box-shadow: 0 0 15px 2px rgba(var(--blue), 0.75);
    transform: scale(1.15);
    z-index: 2;
  }

  & + * {
    margin-top: 5px;
  }
`;

export const Label = styled("span")`
  ${getFontSize(12)};
  background-color: ${props => `#${props.color}`};
  border-radius: 4px;
  color: ${props =>
    contrast(`#${props.color}`) === "light" ? "rgb(var(--blue))" : "rgb(var(--white))"};
  display: block;
  padding: 5px 10px;

  & + span {
    margin-left: 5px;
  }
`;

export const Empty = styled("div")`
  ${getFontSize(20)};
  align-items: center;
  font-weight: 300;
  justify-content: center;
  display: flex;
  border-radius: 4px;
  background-color: rgba(var(--yellow), 0.2);
  border: 1px solid rgb(var(--yellow));
  margin-top: 20px;
  min-height: 200px;
  height: 20vh;
`;
