'use client'
import React, { FC } from 'react'
import img_product from '@/public/images/burger_meat_bomb.jpg'
import Image, { StaticImageData } from 'next/image'
import Button from '../ui/button'


interface Props {
    image?: StaticImageData,
    price?: number,
    name?: string,
    weight?: number
}




const Product_card: FC<Props> = ({image}) => {
  return (
    <div data-tid='product_card' className={'w-full h-max p-1 lg:p-3 bg-white'}>
        <Image data-tid='image' className={'w-full h-auto'} src={img_product} width={276} height={220} alt='product_image'/>
        <p data-tid='price' className={'leading-none mt-[10px] lg:text-2xl lg:leading-none lg:mt-[16px] font-semibold'} >500₽</p>
        <p data-tid='name' className={'text-xs leading-[15.6px] lg:text-base lg:leading-[20px]  mt-2'} >Мясная бомба</p>
        <p data-tid='weight' className={'text-[#B1B1B1] text-xs leading-[15.6px] lg:text-base lg:leading-[20px] lg:mt-[29px] mt-4'} >520г</p>

        <div data-tid='button'  className="mt-[7px] lg:mt-2 flex justify-center" ><Button color={'gray'} width={'full'} >Добавить</Button></div>

    </div>
  )
}

export default Product_card