import styled from "@emotion/styled";
import { Link as LinkRouter } from "@reach/router";
import { getFontSize } from "styles/utils";

export const Wrapper = styled("div")`
  ${getFontSize(30)};
  align-items: center;
  background-color: rgba(var(--red), 0.25);
  border-radius: 4px;
  border: 1px solid rgb(var(--red));
  display: flex;
  flex-direction: column;
  font-weight: 300;
  justify-content: center;
  margin: 0 auto;
  max-width: 400px;
  padding: 20px;
  text-align: center;
  width: 90%;
`;

export const Link = styled(LinkRouter)`
  color: rgb(var(--red));
  font-family: var(--fontTitle);
  font-weight: 900;
`;
