import styled from "@emotion/styled";
import styledMap from "styled-map";
import contrast from "contrast";
import { getFontSize, media } from "styles/utils";

export const List = styled("ul")`
  margin-top: 20px;
`;

export const Item = styled("li")`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
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

  .flex {
    margin-top: 10px;
    width: 100%;
    flex-wrap: wrap;
  }

  ${media("medium")} {
    flex-direction: row;

    .flex {
      margin-top: 0;
      width: auto;
    }
  }

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
  margin-bottom: 5px;
  margin-right: 5px;
  padding: 5px 10px;

  ${media("medium")} {
    margin-bottom: 0;
    margin-right: 0;
  }

  & + span {
    ${media("medium")} {
      margin-left: 5px;
    }
  }
`;

export const Empty = styled("div")`
  ${getFontSize(20)};
  align-items: center;
  background-color: rgba(var(--yellow), 0.2);
  border-radius: 4px;
  border: 1px solid rgb(var(--yellow));
  display: flex;
  font-weight: 300;
  height: 20vh;
  justify-content: center;
  line-height: normal;
  margin-top: 20px;
  min-height: 200px;
  padding: 20px;
  text-align: center;
`;
