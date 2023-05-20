import styled from 'styled-components'
import React, { ReactNode } from 'react'
// import { Map } from '../../src'
import { FiArrowDown } from "react-icons/fi";
//
// const Wrapper = styled.div`
//   background-color: #fff;
//   border-radius: 10px;
//   padding: 40px;
//   margin: auto;
//   width: 1000px;
// `
//
// const Col = styled.div`
//   display: flex;
//   column-gap: 40px;
// `
//
// const StyledMap = styled(Map)`
//   border-radius: 4px;
// `


const Button = styled.div`
  color: #3EC564;
  border: 1px solid #3EC564;
  border-radius: 4px;
  padding: 5px 10px;
  bottom: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  column-gap: 10px;
  
  &:hover {
    background: #3EC564;
    color: #fff;
  }
`

// const Content = styled.div`
//   display: flex;
//   flex-flow: column;
//   justify-content: space-between;
//   align-items: flex-start;
// `
//
// const Loader = styled.div`
//   width: 500px;
//   height: 300px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `

interface Props {
  title: string;
  map?: ReactNode;
  description: ReactNode;
  buttonLabel?: string;
}

const Box = ({ buttonLabel, title, description, map }: Props) =>  {
  return (
    <>
      <div className="rounded-xl flex flex-col md:flex-row gap-x-3 w-full max-w-7xl">
        <div className="w-full flex flex-col justify-center">
          <div>
            <div className="bold text-primary text-xl pb-1 border-b-2">{title}</div>
            {description}
          </div>
        </div>
        {!!map && <div className="w-full">{map}</div>}
      </div>
      <div className="flex justify-center">{buttonLabel && <Button>{buttonLabel} <FiArrowDown /></Button>}</div>
    </>
  )
}

export default Box;
