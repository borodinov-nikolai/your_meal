"use client";
import React, { useEffect, useState } from "react";
import Cart_item from "../cart_item";
import Button from "../ui/button";
import icon_delivery from "@/public/icons/free-icon-delivery-2362252.png";
import Image from "next/image";
import { useAppSelector } from "@/src/store/hooks";

const Cart = () => {
  const { cart_items, total_count, total_price } = useAppSelector(
    (state) => state.cart,
  );
  const [showContent, setShowContent] = useState<boolean>(false);

  useEffect(() => {
    total_count < 1 && setShowContent(false);
  }, [total_count]);

  return (
    <div
      data-tid="cart"
      className={
        " relative h-[48px] w-full rounded-xl bg-white px-[10px] sm:w-[145px] lg:w-[300px]"
      }
    >
      {!showContent && (
        <div
          data-tid="close_cart"
          onClick={() => cart_items.length > 0 && setShowContent(true)}
          className={`flex h-full w-full ${
            cart_items.length > 0 && "cursor-pointer"
          } items-center justify-between`}
        >
          <div data-tid="title" className={" font-semibold leading-4"}>
            Корзина
          </div>
          <div
            data-tid="counter"
            className="flex h-4 w-8 items-center justify-center rounded-lg bg-[#F2F2F3] text-[10px]"
          >
            {total_count}
          </div>
        </div>
      )}

      {showContent && (
        <div
          data-tid="open_cart "
          className={
            " absolute left-0 z-10 h-[389px] w-full rounded-xl bg-white px-[10px] shadow-[0_0_10px_0_rgba(0,0,0,0.15)] sm:w-[300px]"
          }
        >
          <div>
            <div
              data-tid="wrapper"
              className={"flex h-10 w-full justify-between pt-4 "}
            >
              <div data-tid="title" className={" font-semibold leading-4"}>
                Корзина
              </div>
              <div
                data-tid="counter"
                className="flex h-4 w-8 items-center justify-center rounded-lg bg-[#F2F2F3] text-[10px]"
              >
                {total_count}
              </div>
            </div>

            <div
              data-tid="cart_item_holder"
              className={"max-h-[225px] overflow-y-scroll"}
            >
              {cart_items &&
                cart_items.map(({ id, name, price, weight, image, count }) => {
                  return (
                    <Cart_item
                      key={id}
                      item={{ id, image, name, price, weight, count }}
                    />
                  );
                })}
            </div>

            <div
              data-tid="total"
              className={"flex justify-between border-t pt-[12px]"}
            >
              <div className={"text-xs leading-4"}>Итого</div>
              <div className={"text-xs leading-4"}>{total_price}₽</div>
            </div>

            <div
              data-id="buy_button"
              className={"mt-[19px] flex justify-center"}
            >
              <Button width={280}>Оформить заказ</Button>
            </div>

            <div
              data-tid="cart_footer"
              className={"mt-2 flex items-center justify-between "}
            >
              <div data-tid="delivery" className={"flex items-center gap-2  "}>
                <Image
                  className={"h-6 w-6"}
                  src={icon_delivery}
                  width={24}
                  height={24}
                  alt="delivery_icon"
                />
                <p className={"text-[10px] leading-3"}>Бесплатная доставка</p>
              </div>
              <div
                data-tid="hide"
                onClick={() => setShowContent(false)}
                className={
                  "cursor-pointer text-[10px] leading-3 text-[#B1B1B1]"
                }
              >
                Свернуть
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
