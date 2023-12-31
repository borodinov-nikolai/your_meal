'use client'
import React, { FC } from "react";
import Image from "next/image";
import Counter from "../ui/counter";


interface Props {
  item: {
    id?: number
    image?: string;
    price?: number;
    name?: string;
    weight?: number;
    count?: number;
  }

}



const Cart_item: FC<Props> = ({item}) => {
  const {id, image, name, price, weight, count} = item
  return (
    <div
      data-tid="cart_item"
      className={"flex h-[75px] items-center justify-between border-t"}
    >
      <div data-tid="description" className={"flex gap-2 "}>
       {image && <Image
          data-tid="image"
          className={"h-[52px] w-[64px] rounded-lg"}
          src={process.env.NEXT_PUBLIC_CMS_URL + image}
          width={64}
          height={52}
          alt="product_image"
        />}
        <div data-tid="text">
          <p className={"text-xs leading-4"}> {name}</p>
          <p className={"text-xs leading-4 text-[#B1B1B1]"}>{weight}г</p>
          <p className={"mt-[6px] text-xs leading-4"}>{price}₽</p>
        </div>
      </div>

      <div
        data-tid="counter_holder"
       
      >
       <Counter count={count} />
      </div> 
    </div>
  );
};

export default Cart_item;
