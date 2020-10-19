import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #eee;
  
  &:nth-of-type(even) {
    background-color: #467505;
    color: #fff;
  }
`

export default Section;