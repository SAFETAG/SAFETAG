import T from "prop-types"
import styled, { css } from "styled-components"

import Button from "./button"

import { themeVal } from "../utils/general"

const horizontalStyles = () => css`
  flex-flow: row nowrap;
  > ${/* sc-selector */ Button}:first-child:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    clip-path: inset(-100% 0 -100% -100%);
  }
  > ${/* sc-selector */ Button}:last-child:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    clip-path: inset(-100% -100% -100% 0);
  }
  > ${/* sc-selector */ Button}:not(:first-child):not(:last-child) {
    border-radius: 0;
    clip-path: inset(-100% 0);
  }
  > ${/* sc-selector */ Button} + ${/* sc-selector */ Button} {
    margin-left: -${themeVal("layout.border")};
  }
`

const verticalStyles = () => css`
  flex-flow: column;
  > ${/* sc-selector */ Button}:first-child:not(:last-child) {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    clip-path: inset(-100% -100% 0 -100%);
  }
  > ${/* sc-selector */ Button}:last-child:not(:first-child) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    clip-path: inset(0 -100% -100% -100%);
  }
  > ${/* sc-selector */ Button}:not(:first-child):not(:last-child) {
    border-radius: 0;
    clip-path: inset(0 -100%);
  }
  > ${/* sc-selector */ Button} + ${/* sc-selector */ Button} {
    margin-top: -${themeVal("layout.border")};
  }
`

const ButtonGroup = styled.div`
  position: relative;
  display: inline-flex;

  /* stylelint-disable-next-line */
  > ${/* sc-selector */ Button} {
    display: block;
    position: relative;
    margin: 0;
    z-index: 2;
  }
  ${({ orientation }) =>
    orientation === "vertical" ? verticalStyles() : horizontalStyles()}
`

ButtonGroup.propTypes = {
  children: T.node,
  orientation: T.string,
}

export default ButtonGroup
