"use client";
import Image from "next/image";
import React, { FC, useState } from "react";
import Counter from "../ui/counter";
import { Composition } from "@/src/interfaces/products";
import Button from "../ui/button";
import { useAppDispatch } from "@/src/store/hooks";
import { addCartItem } from "@/src/store/slices/cartSlice";

interface Props {
  product: {
    id?: number;
    name?: string;
    image?: string;
    description?: string;
    price?: number;
    weight?: number;
    energy_value?: number;
    composition?: Composition[];
  };
}

const Product_description: FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState<number>(0);
  const {
    id,
    image,
    name,
    price,
    weight,
    description,
    energy_value,
    composition,
  } = product;

  return (
    <div
      data-tid="product_description"
      className={
        "h-screen w-screen bg-white px-[10px] pt-[32px] sm:h-[324px] sm:w-[524px] sm:rounded-3xl sm:px-4 sm:pt-4 lg:h-[432px] lg:w-[684px] lg:px-6 lg:pt-6"
      }
    >
      <h1
        data-tid="product_description__title"
        className={
          " text-[28px] font-semibold leading-[34px] lg:text-[40px] lg:leading-[48px]"
        }
      >
        {name}
      </h1>
      <div
        data-tid="product_description__description"
        className={"mt-3 flex flex-col sm:flex-row sm:gap-2 lg:mt-6 lg:gap-4 "}
      >
        {image && (
          <Image
            data-tid="product_description__description-image"
            className={
              "w-300 h-232 self-center sm:h-[180px] sm:w-[226px] lg:h-[220px] lg:w-[276px] "
            }
            src={process.env.NEXT_PUBLIC_CMS_URL + image}
            width={300}
            height={232}
            alt="product image"
          />
        )}
        <div
          data-tid="product_descroption__description-text"
          className={" mt-4 sm:mt-0 "}
        >
          <p
            className={
              "text-xs leading-[15.6px] lg:text-base lg:leading-[20.8px]"
            }
          >
            {description}
          </p>

          <h3
            className={
              "mt-[10px] text-[10px] font-semibold leading-[14px] lg:text-xs lg:leading-[15.6px]"
            }
          >
            Состав:
          </h3>
          <ul
            className={
              " mt-1 flex flex-col gap-[2px] text-[10px] leading-[12.8px] lg:text-xs lg:leading-[15.6px]"
            }
          >
            {composition?.map(({ id, item }) => {
              return <li key={id}>{item}</li>;
            })}
          </ul>
          <p
            className={
              "mt-1 text-[10px] leading-[14px] text-[#B1B1B1] lg:text-xs lg:leading-[15.6px]"
            }
          >
            {weight}г, ккал {energy_value}
          </p>
        </div>
      </div>
      <div
        data-tid="product_description__footer"
        className={
          "mt-[98px] flex flex-col sm:mt-6 sm:flex-row sm:justify-between lg:mt-10 "
        }
      >
        <div
          data-tid="product_description__buttons"
          className={"flex justify-between sm:justify-start sm:gap-2 lg:gap-4"}
        >
          <div
            data-tid="product_description__buy_button"
            className={"w-[218px] lg:w-[276px]"}
          >
            <Button
              onClick={() =>
                dispatch(
                  addCartItem({
                    id,
                    image,
                    name,
                    price,
                    weight,
                    count: count > 0 ? count : 1,
                  }),
                )
              }
            >
              Добавить
            </Button>
          </div>
          <Counter
            minusClick={() => count > 0 && setCount(count - 1)}
            plusClick={() => count < 99 && setCount(count + 1)}
            count={count}
          />
        </div>
        <div
          data-tid="product_description__price"
          className={
            " mt-4 place-self-end font-semibold leading-[20px] sm:mt-0 sm:place-self-center lg:text-2xl lg:leading-[31.2px]"
          }
        >
          {price}₽
        </div>
      </div>
    </div>
  );
};
export default Product_description;
