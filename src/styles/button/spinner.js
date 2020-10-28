import React from 'react'
import T from "prop-types"

import styled, { keyframes } from "styled-components"

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerIcon = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 4px solid ${props =>props.color === 'light' ? 'rgba(255,255,255,0.4)': 'rgba(55,55,55,0.4)'};
  border-right: 4px solid ${props =>props.color === 'light' ? 'rgba(255,255,255,0.4)': 'rgba(55,55,55,0.4)'};
  border-bottom: 4px solid ${props =>props.color === 'light' ? 'rgba(255,255,255,0.4)': 'rgba(55,55,55,0.4)'};
  border-left: 4px solid ${props =>props.color === 'light' ? 'rgba(255,255,255,1)': 'rgba(55,55,55,1)'};;
  background: transparent;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

const SpinnerBlock = styled.div`
  margin: 0 0.5rem 0 -1rem;
  padding-right: 0.5rem;
`

export default function Spinner({ color }) {
  return <SpinnerBlock><SpinnerIcon color={color}/></SpinnerBlock>
}

Spinner.propTypes = {
  color: T.string
}
