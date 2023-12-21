"use client";
import React, { useState } from "react";
import Cart_item from "../cart_item";
import Button from "../ui/button";

const Cart = () => {
  const [showContent, setShowContent] = useState<boolean>(false);
  return (
    <div
      data-tid="cart"
      onClick={() => setShowContent(true)}
      className={" relative h-[48px]  w-full rounded-xl bg-white px-[10px]"}
    >
      {!showContent && (
        <div
          data-tid="wrapper"
          className={"flex w-full items-center justify-between pt-4"}
        >
          <div data-tid="title" className={" font-semibold leading-4"}>
            Корзина
          </div>
          <div
            data-tid="counter"
            className="flex h-4 w-8 items-center justify-center rounded-lg bg-[#F2F2F3] text-[10px]"
          >
            0
          </div>
        </div>
      )}

      {showContent && (
        <div
          data-tid="cart_content"
          className={
            " absolute left-0 z-10 h-[389px] w-full rounded-xl bg-white px-[10px] shadow-[0_0_10px_0_rgba(0,0,0,0.15)]"
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
                0
              </div>
            </div>

            <div data-tid="cart_item_holder">
              <Cart_item />
              <Cart_item />
              <Cart_item />
            </div>

            <div
              data-tid="total"
              className={"flex justify-between border-t pt-[12px]"}
            >
              <div className={"text-xs leading-4"}>Итого</div>
              <div className={"text-xs leading-4"}>1279₽</div>
            </div>

            <div
              data-id="buy_button"
              className={"mt-[19px] flex justify-center"}
            >
              <Button width={280} size={"small"}>
                Оформить заказ
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
