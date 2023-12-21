import React from "react";
import img_product from "@/public/images/burger_meat_bomb.jpg";
import Image from "next/image";

const Cart_item = () => {
  return (
    <div
      data-tid="cart_item"
      className={"flex h-[75px] items-center justify-between border-t"}
    >
      <div data-tid="description" className={"flex gap-2 "}>
        <Image
          data-tid="image"
          className={"h-[52px] w-[64px] rounded-lg"}
          src={img_product}
          width={64}
          height={52}
          alt="product_image"
        />
        <div data-tid="text">
          <p className={"text-xs leading-4"}> Супер сырный</p>
          <p className={"text-xs leading-4 text-[#B1B1B1]"}>512г</p>
          <p className={"mt-[6px] text-xs leading-4"}>550₽</p>
        </div>
      </div>

      <div
        data-tid="counter"
        className={" flex h-[30px] w-[74px]  rounded-lg bg-[#F2F2F3] "}
      >
        <button className={" basis-1/3 text-xs"}>-</button>
        <div className={"flex basis-1/3 items-center justify-center text-xs "}>
          0
        </div>
        <button className={"basis-1/3 text-xs"}>+</button>
      </div>
    </div>
  );
};

export default Cart_item;
