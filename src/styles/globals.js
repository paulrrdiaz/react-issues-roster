import { css } from "@emotion/core";
import emotionNormalize from "emotion-normalize";
import emotionReset from "emotion-reset";
import reset from "./reset";
import plugins from "./plugins";
import universals from "./universals";

const Globals = css`
  /* stylelint-disable */
  ${emotionNormalize};
  ${emotionReset};

  :root {
    --white: 255, 255, 255; /* #ffffff */
    --black: 0, 0, 0; /* #000000 */
    --grey: 76, 86, 106; /* #4C566A */
    --grey-1: 51, 51, 51;
    --grey-2: 216, 216, 216;
    --grey-3: 236, 236, 236;
    --snow: 236, 239, 244; /* #ECEFF4 */
    --blue: 94, 129, 172; /* #5E81AC */
    --skyblue: 129, 161, 193; /* #81A1C1 */
    --red: 231, 76, 60;
    --green: 39, 174, 96;
    --yellow: 241, 196, 15;
    --fontTitle: "Montserrat", Arial, Helvetica, sans-serif;
    --fontNormal: "Roboto", Arial, Helvetica, sans-serif;
  }

  ${reset};
  ${plugins};
  ${universals};
  /* stylelint-enable */
`;

export default Globals;
