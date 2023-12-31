'use client'
import React, { FC } from 'react'

interface Props {
  minusClick?: ()=> void
  plusClick?: ()=> void
  count?: number
}

const Counter : FC<Props> = ({minusClick, plusClick, count=0}) => {
  return (
    <div  className={" flex h-[30px] w-[74px] lg:h-10 lg:w-[84px]  rounded-lg bg-[#F2F2F3] "}>
        <button onClick={minusClick} className={" basis-1/3 text-xs lg:text-base lg:leading-[21.82px]"}>-</button>
        <div className={"flex basis-1/3 items-center justify-center text-xs lg:leading-[21.82px] lg:text-base "}>
      {count}
        </div>

        
        <button onClick={plusClick} className={"basis-1/3 text-xs"}>+</button>
    </div>
  )
}

export default Counter