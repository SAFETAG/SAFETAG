import styled from 'styled-components';
import controlSkin from './control-skin';

const FormInput = styled.input.attrs(props => ({
  size: props.size || 'medium'
}))`
  ${controlSkin()}

  /* Type number control
     Remove number arrows form numeric text fields
   ========================================================================== */
  &[type="number"] {
    -moz-appearance: textfield;
  
    /* Webkit specific */
  
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

export default FormInput;
