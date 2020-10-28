import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { themeVal, stylizeFunction } from '../utils/general';

const _rgba = stylizeFunction(rgba);

export const FormHelper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  line-height: 1.25rem;
  color: ${_rgba(themeVal('color.base'), 0.48)};
`;

export const FormHelperMessage = styled.p`
  font-size: 0.875rem;
  ${({ invalid }) => invalid
    ? css`
          color: ${themeVal('color.danger')};
        `
    : ''}
`;

export const FormHelperCounter = styled.p`
  font-size: 0.75rem;
  padding-left: ${themeVal('layout.space')};
  margin-left: auto;
`;
