import { css } from "@emotion/core";
import { rem } from "polished";

const breakPoints = {
  huge: 1200,
  large: 1024,
  medium: 768,
  small: 480,
};

export const media = n => {
  const breakPointsArray = Object.keys(breakPoints).map(size => [size, breakPoints[size]]);

  const [result] = breakPointsArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (min-width: ${size}px)`];
    return acc;
  }, []);

  return result;
};

export const getFontSize = size => {
  const measure = `${size}px`;
  const fontSize = css`
    font-size: ${measure};
    font-size: ${rem(measure)};
  `;

  return fontSize;
};
