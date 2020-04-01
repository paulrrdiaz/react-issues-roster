import styled from "@emotion/styled";
import styledMap from "styled-map";
import { getFontSize } from "styles/utils";

export const Input = styled("input")`
  ${getFontSize(20)};
  border-radius: 4px;
  border: 1px solid rgb(var(--skyblue));
  color: rgb(var(--grey-1));
  display: block;
  padding: 10px 15px;
  transition: border-color 0.3s ease-in 0s, box-shadow 0.3s ease-in 0s;
  width: 100%;

  &:focus {
    border: 1px solid rgb(var(--blue));
    box-shadow: 0 0 10px 1px rgba(var(--blue), 0.5);
  }
`;

export const Label = styled("label")`
  ${getFontSize(22)};
  color: rgba(var(--grey), 0.85);
  display: block;
  font-weight: 300;
  letter-spacing: 0.5px;
  margin-bottom: 10px;
  position: relative;

  small {
    ${getFontSize(12)};
    font-weight: bold;
    position: absolute;
    right: 0;
    text-transform: uppercase;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Button = styled("button")`
  background-color: ${styledMap`
    primary: rgb(var(--blue));
    success: rgb(var(--green));
    warning: rgb(var(--yellow));
    danger: rgb(var(--red));
    default: rgb(var(--grey));
  `};
  color: ${styledMap`
    primary: rgb(var(--white));
    success: rgb(var(--white));
    warning: rgb(var(--blue));
    danger: rgb(var(--white));
    default: rgb(var(--white));
  `};
  border-radius: 4px;
  margin-top: 10px;
  padding: 10px 15px;
`;

export const Error = styled("span")`
  display: block;
  background-color: rgba(var(--red), 0.75);
  border-radius: 4px;
  color: rgb(var(--white));
  border: 1px solid rgb(var(--red));
  padding: 5px 10px;
  margin-top: 5px;
`;
