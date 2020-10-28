import styled from 'styled-components';
import { rgba } from 'polished';
import { themeVal, stylizeFunction } from '../utils/general';
import { multiply } from '../utils/math';

const _rgba = stylizeFunction(rgba);

export const FormFieldset = styled.fieldset`
  background-color: ${themeVal('color.mist')};
  border-radius: ${themeVal('shape.rounded')};
  border: ${themeVal('layout.border')} solid ${_rgba(themeVal('color.base'), 0.08)};
  margin-left: -${multiply(themeVal('layout.space'), 2)};
  margin-right: -${multiply(themeVal('layout.space'), 2)};
  padding: 0;

  fieldset & {
    margin-left: -${themeVal('layout.space')};
    margin-right: -${themeVal('layout.space')};
  }
`;

export const FormFieldsetHeader = styled.div`
  display: flex;
  flex-flow: wrap nowrap;
  justify-content: space-between;
  padding: 0.75rem ${multiply(themeVal('layout.space'), 2)};
  border-bottom: ${themeVal('layout.border')} solid ${_rgba(themeVal('color.base'), 0.08)};

  fieldset fieldset & {
    padding: 0.25rem ${themeVal('layout.space')};
  }
`;

export const FormFieldsetBody = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-gap: ${themeVal('layout.space')};
  padding: ${multiply(themeVal('layout.space'), 2)};

  fieldset fieldset & {
    padding: ${themeVal('layout.space')};
  }
`;
