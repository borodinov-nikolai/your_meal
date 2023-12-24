'use client'
import React, { Children, FC, useState } from 'react'
import Button from '../ui/button'

interface Props {
  width?: number | "full";
  color?: "orange" | "gray";
  children?: React.ReactNode;
}

const Buy_button :FC<Props> = ({color, width, children}) => {
 


  return (


    <Button onClick={(e)=>{e.stopPropagation()}}  color={color} width={width} >{children}</Button>
  )
}

export default Buy_button