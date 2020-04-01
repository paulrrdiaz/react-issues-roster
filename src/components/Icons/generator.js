import React from "react";
import { ReactSVG } from "react-svg";
import styled from "@emotion/styled";
import classnames from "classnames";
import isEmpty from "lodash/isEmpty";

const generator = iconSrc => ({
  color = null,
  height = null,
  maxHeight = null,
  maxWidth = null,
  width = null,
  id = null,
  className = "",
}) => {
  const iconClasses = classnames({
    icon: true,
    [className]: !isEmpty(className),
  });
  const ReactSVGStyled = styled(ReactSVG)`
    svg {
      height: ${height || null};
      max-height: ${maxHeight || null};
      max-width: ${maxWidth || null};
      min-height: 5px;
      min-width: 5px;
      transition: width 0.3s linear 0s, height 0.3s linear 0s;
      width: ${width || null};
    }

    svg path {
      fill: ${color || ""};
    }
  `;

  return <ReactSVGStyled id={id} src={iconSrc} className={iconClasses} />;
};

export default generator;
