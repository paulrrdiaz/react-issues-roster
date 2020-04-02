import { css } from "@emotion/core";
import { media } from "styles/utils";

export default css`
  main {
    margin: 40px 0;
  }

  .app--wrapper {
    margin: 0 auto;
    max-width: 1024px;
    position: relative;
    width: 86%;
    z-index: 1;
  }

  .relative {
    position: relative;
  }

  .flex {
    display: flex;
  }

  [data-reach-dialog-overlay] {
    background-color: rgba(var(--blue), 0.8);
    z-index: 99;
  }

  [data-reach-dialog-content] {
    border-radius: 4px;
    width: 90vw;
    top: 40%;
    position: relative;
    transform: translateY(-50%);
    margin: 0 auto;

    ${media("medium")} {
      width: 50vw;
    }
  }
`;
