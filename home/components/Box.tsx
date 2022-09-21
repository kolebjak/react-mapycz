import styled from 'styled-components'
import React, { ReactNode } from 'react'
import { Map } from '../../src'
import { FiArrowDown, FiLoader } from "react-icons/fi";

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 10px; 
  padding: 40px;
  margin: auto;
  width: 1000px;
`

const Col = styled.div`
  display: flex;
  column-gap: 40px;
`

const StyledMap = styled(Map)`
  border-radius: 4px;
`

const Title = styled.h1`
  font-size: 23px;
  margin-top: 0;
  margin-bottom: 7px;
`

const Button = styled.div`
  color: #3EC564;
  border: 1px solid #3EC564;
  border-radius: 4px;
  padding: 5px 10px;
  bottom: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  column-gap: 10px;
  
  &:hover {
    background: #3EC564;
    color: #fff;
  }
`

const Content = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-start;
`

const Loader = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`

interface Props {
  title: string;
  content: ReactNode;
  buttonLabel?: string;
}

const Box = ({ buttonLabel, title, content }: Props) =>  {
  return (
    <Wrapper>
      <Col>
        <StyledMap width="500px" loadingElement={<Loader><FiLoader /></Loader>} />
        <Content>
          <div>
            <Title>{title}</Title>
            {content}
          </div>
          {buttonLabel && <Button>{buttonLabel} <FiArrowDown /></Button>}
        </Content>
      </Col>
    </Wrapper>
  )
}

export default Box;
