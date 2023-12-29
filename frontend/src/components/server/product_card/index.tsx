import React, { FC } from "react";
import Image from "next/image";
import Buy_button from "../../client/buy_button";


interface Props {
  image?: string;
  price?: number;
  name?: string;
  weight?: number;
}


const Product_card: FC<Props> = ({ image, price, name, weight }) => {
  return (
    <div data-tid="product_card" className={"h-max w-full bg-white p-1 lg:p-3 cursor-pointer "}>
      {image && <Image
        data-tid="image"
        className={"h-auto w-full"}
        src={process.env.CMS_URL + image}
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

       <Buy_button color='gray' width='full'>Добавить</Buy_button>
       
      </div>
    </div>
  
  );
};

export default Product_card;
