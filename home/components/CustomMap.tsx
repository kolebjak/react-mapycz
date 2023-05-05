import { FiLoader } from 'react-icons/fi'
import React, { ReactNode } from 'react'
import { Map } from '../../src'

type Props = {
  children?: ReactNode;
}

export const CustomMap = ({ children }: Props) => {
  return <Map className="rounded-md" loadingElement={<div className="rounded-md w-full h-[300px] bg-[#efefef] flex justify-center items-center"><FiLoader /></div>}>{children}</Map>
}

