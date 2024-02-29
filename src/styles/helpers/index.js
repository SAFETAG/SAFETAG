import { css } from "styled-components"

export const antialiased = () => css`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

// Hide only visually, but have it available for screenreaders
export const visuallyHidden = () => css`
  border: 0 none;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`

export const listReset = () => css`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const truncated = () => css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const visuallyDisabled = () => css`
  opacity: 0.8;
  filter: saturate(25%);
  filter: brightness(150%);
  cursor: not-allowed;
`

export const disabled = () => css`
  opacity: 0.8;
  filter: saturate(25%);
  filter: brightness(150%);
  pointer-events: none;
  cursor: not-allowed;
`

export const unscrollableY = () => css`
  overflow-y: hidden;
`

export const unscrollableX = () => css`
  overflow-x: hidden;
`
