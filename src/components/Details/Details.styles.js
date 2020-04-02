import styled from "@emotion/styled";
import contrast from "contrast";
import { getFontSize, media } from "styles/utils";

export const Wrapper = styled("div")`
  background-color: rgb(var(--white));
  border-radius: 4px;
  padding: 20px 30px;
  margin-top: 20px;
  box-shadow: 0 0 10px 2px rgba(var(--black), 0.05);

  .flex {
    flex-wrap: wrap;
  }
`;

export const Title = styled("h2")`
  ${getFontSize(36)};
  font-family: var(--fontTitle);
  font-weight: 800;
  line-height: 1;
  margin-bottom: 10px;
`;

export const User = styled("a")`
  ${getFontSize(14)};
  align-items: center;
  display: flex;
  margin-bottom: 20px;

  img {
    border-radius: 50%;
    margin-right: 10px;
    max-width: 40px;
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

export const Body = styled("div")`
  ${getFontSize(18)};
  color: rgb(var(--blue));
  margin: 20px 0;
  line-height: 1.6;
  font-weight: 300;

  * {
    white-space: pre-line;
    word-break: break-word;
  }
`;

export const Button = styled("a")`
  display: inline-block;
  border-radius: 4px;
  border: 1px solid rgb(var(--black));
  text-align: center;
  padding: 10px;
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1) 0s;

  &:hover {
    transform: scale(1.15);
  }
`;
