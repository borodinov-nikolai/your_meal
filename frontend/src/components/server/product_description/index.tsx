import Image from 'next/image'
import React, { FC } from 'react'
import Buy_button from '../../client/buy_button'
import Counter from '../../client/ui/counter'
import { Composition } from '@/src/interfaces/products'

interface Props {
  product: {
    id?:number
    name?:string,
    image?:string,
    description?: string,
    price?: number,
    weight?: number,
    energy_value?: number,
    composition?: Composition[] 
  }
  
}

const Product_description : FC<Props> = ({product}) => {

    const {id, image, name, price, weight, description, energy_value, composition} = product

  
  const image_url = process.env.CMS_URL

  // console.log(image)


    return (
        <div data-tid='product_description' className={'w-screen lg:pt-6 lg:w-[684px] lg:h-[432px] sm:w-[524px] lg:px-6 sm:rounded-3xl sm:h-[324px] h-screen px-[10px] sm:px-4 pt-[32px] sm:pt-4 bg-white'} >
          <h1 data-tid='product_description__title' className={' text-[28px] lg:text-[40px] lg:leading-[48px] font-semibold leading-[34px]'}>{name}</h1>
          <div data-tid='product_description__description' className={'flex flex-col lg:mt-6 sm:flex-row mt-3 sm:gap-2 lg:gap-4 '} >
          {image && <Image data-tid='product_description__description-image' className={'w-300 h-232 lg:w-[276px] lg:h-[220px] sm:w-[226px] sm:h-[180px] self-center '} src={image_url + image} width={300} height={232} alt='product image'/>}
            <div data-tid='product_descroption__description-text' className={' mt-4 sm:mt-0 '} > 
              <p className={'text-xs leading-[15.6px] lg:text-base lg:leading-[20.8px]'} >{description}</p>
            
              <h3 className={'text-[10px] lg:text-xs lg:leading-[15.6px] leading-[14px] font-semibold mt-[10px]'} >Состав:</h3>
            <ul className={' text-[10px] lg:text-xs lg:leading-[15.6px] leading-[12.8px] mt-1 flex flex-col gap-[2px]'} >
                {composition?.map(({id, item})=> {
                  return <li key={id}>{item}</li>
                })}
            </ul>
            <p className={'mt-1 lg:text-xs lg:leading-[15.6px] text-[10px] leading-[14px] text-[#B1B1B1]'} >{weight}г, ккал {energy_value}</p>
            </div>
          </div>
          <div data-tid='product_description__footer' className={'mt-[98px] lg:mt-10 sm:mt-6 flex flex-col sm:flex-row sm:justify-between '} >
            <div data-tid='product_description__buttons' className={'flex justify-between sm:justify-start sm:gap-2 lg:gap-4'} >
              <div data-tid='product_description__buy_button' className={'w-[218px] lg:w-[276px]'} >
                <Buy_button product={{id, name, price, weight, image}} width={'full'} color={'orange'}>Добавить</Buy_button>
              </div>
              <Counter/>
            </div>
            <div data-tid="product_description__price" className={' sm:place-self-center mt-4 lg:text-2xl lg:leading-[31.2px] sm:mt-0 place-self-end leading-[20px] font-semibold'} >{price}₽</div>
          </div>
        </div>
    )
}
export default Product_description