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
    <div data-tid='product_card' className={'w-[300px] h-[411px] p-3 bg-white'}>
        <Image data-tid='image' className={'w-[276px] h-[220px]'} src={img_product} width={276} height={220} alt='product_image'/>
        <p data-tid='price' >689₽</p>
        <p data-tid='name' >Мясная бомба</p>
        <p data-tid='weight' >520г</p>

        <div data-tid='button' ><Button color={'white'} width={276} >Добавить</Button></div>

    </div>
  )
}

export default Product_card