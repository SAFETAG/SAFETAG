import styled from "styled-components"
import { themeVal } from "./utils/general"

const Constrainer = styled.div`
  padding: ${themeVal("layout.space")};
  margin: 0 auto;
  max-width: ${themeVal("layout.max")};
`

export default Constrainer
