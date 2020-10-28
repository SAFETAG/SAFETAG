import styled from "styled-components"
import Button from "./button"

const ButtonCaret = styled(Button)`
  ::after {
    content: "\\25BC";
  }
`

export default ButtonCaret
