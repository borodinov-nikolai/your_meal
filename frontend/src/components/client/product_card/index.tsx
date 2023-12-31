'use client'
import React, { FC } from "react";
import Image from "next/image";
import Button from "../ui/button";
import { useAppDispatch } from "@/src/store/hooks";
import { addToCart } from "@/src/store/slices/cartSlice";



interface Props {
  product: {
    id?: number;
    image?: string;
    price?: number;
    name?: string;
    weight?: number;
  }
 
}


const Product_card: FC<Props> = ({product}) => {
  const dispatch = useAppDispatch()
  const {image, price, name, weight} = product
  return (
    <div data-tid="product_card" className={"h-max w-full bg-white p-1 lg:p-3 cursor-pointer "}>
      {image && <Image
        data-tid="image"
        className={"h-auto w-full"}
        src={process.env.NEXT_PUBLIC_CMS_URL + image}
        width={276}
        height={220}
        alt="product_image"
      />}
      <p
        data-tid="price"
        className={
          "mt-[10px] font-semibold leading-none lg:mt-[16px] lg:text-2xl lg:leading-none"
        }
      >
        {price}₽
      </p>
      <p
        data-tid="name"
        className={
          "mt-2 text-xs leading-[15.6px] lg:text-base  lg:leading-[20px]"
        }
      >
        {name}
      </p>
      <p
        data-tid="weight"
        className={
          "mt-4 text-xs leading-[15.6px] text-[#B1B1B1] lg:mt-[29px] lg:text-base lg:leading-[20px]"
        }
      >
        {weight}г
      </p>

      <div   data-tid="button" className="mt-[7px] flex justify-center lg:mt-2">

       <Button onClick={(e)=>{e.stopPropagation(); dispatch(addToCart({...product, count:1}))}} color='gray' width='full'>Добавить</Button>
       
      </div>
    </div>
  
  );
};

export default Product_card;
