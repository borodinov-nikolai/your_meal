"use client";
import React, { FC } from "react";
import img_product from "@/public/images/burger_meat_bomb.jpg";
import Image, { StaticImageData } from "next/image";
import Button from "../ui/button";

interface Props {
  image?: StaticImageData;
  price?: number;
  name?: string;
  weight?: number;
}

const Product_card: FC<Props> = ({ image }) => {
  return (
    <div data-tid="product_card" className={"h-max w-full bg-white p-1 lg:p-3"}>
      <Image
        data-tid="image"
        className={"h-auto w-full"}
        src={img_product}
        width={276}
        height={220}
        alt="product_image"
      />
      <p
        data-tid="price"
        className={
          "mt-[10px] font-semibold leading-none lg:mt-[16px] lg:text-2xl lg:leading-none"
        }
      >
        500₽
      </p>
      <p
        data-tid="name"
        className={
          "mt-2 text-xs leading-[15.6px] lg:text-base  lg:leading-[20px]"
        }
      >
        Мясная бомба
      </p>
      <p
        data-tid="weight"
        className={
          "mt-4 text-xs leading-[15.6px] text-[#B1B1B1] lg:mt-[29px] lg:text-base lg:leading-[20px]"
        }
      >
        520г
      </p>

      <div data-tid="button" className="mt-[7px] flex justify-center lg:mt-2">
        <Button color={"gray"} width={"full"}>
          Добавить
        </Button>
      </div>
    </div>
  );
};

export default Product_card;
