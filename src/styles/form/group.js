import styled from 'styled-components';
import { themeVal } from '../utils/general';
import { divide } from '../utils/math';

export const FormGroup = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-gap: ${divide(themeVal('layout.space'), 2)};
`;

export const FormGroupHeader = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export const FormGroupBody = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-gap: ${divide(themeVal('layout.space'), 4)};
`;
