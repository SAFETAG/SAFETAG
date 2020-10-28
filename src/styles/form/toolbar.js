import styled from 'styled-components';
import { themeVal } from '../utils/general';
import { divide } from '../utils/math';

const FormToolbar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding-left: ${themeVal('layout.space')};

  > *:not(:first-child) {
    margin-left: ${divide(themeVal('layout.space'), 4)};
  }
`;

export default FormToolbar;
