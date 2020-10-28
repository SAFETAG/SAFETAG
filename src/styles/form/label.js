import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';

import { themeVal } from '../utils/general';

const LabelHint = styled.small`
  font-weight: ${themeVal('type.base.weight')};
  font-size: 0.75rem;
  line-height: 1;
  opacity: 0.64;
`;

const LabelBase = ({
  children, optional, ...rest
}) => (
  <label {...rest}>
    {children}
    {optional && '\u00A0'}
    {optional && (<LabelHint>(optional)</LabelHint>)}
  </label>
);

LabelBase.propTypes = {
  children: T.node,
  optional: T.bool
};

const FormLabel = styled(LabelBase)`
  display: inline-flex;
  align-items: center;
  font-family: ${themeVal('type.base.family')};
  font-weight: ${themeVal('type.base.bold')};
  font-size: 1rem;
  line-height: 1.5;

  &[for] {
    cursor: pointer;
  }
`;

export default FormLabel;
