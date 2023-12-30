'use client'
import React, {FC} from 'react'
import Button from '../ui/button'
import { useAppDispatch} from '@/src/store/hooks';
import { add_to_cart } from '@/src/store/slices/cart_slice';

interface Props {
  width?: number | "full";
  color?: "orange" | "gray";
  children?: React.ReactNode;
  product?: {
  id?:number
  image?: string;
  price?: number;
  name?: string;
  weight?: number;
  }
}

const Buy_button : FC<Props> = ({color, width, children, product}) => {
const dispatch = useAppDispatch()
  return (


    <Button onClick={(e)=>{e.stopPropagation(); (product && dispatch(add_to_cart(product))) }}  color={color} width={width} >{children}</Button>
  )
}

export default Buy_button