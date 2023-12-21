import Image from "next/image";
import React from "react";
import icon_logo from "@/public/icons/footer-logo.png";
import icon_call from "@/public/icons/Call.png";
import icon_vk from "@/public/icons/VK.png";
import icon_tg from "@/public/icons/bi_telegram.png";

const Footer = () => {
  return (
    <div data-tid="footer" className="bg-white">
      <div data-tid="container" className={"container pb-[26px] pt-6"}>
        <Image
          data-tid="footer_logo"
          className={"h-[38px] w-[196px]"}
          src={icon_logo}
          width={300}
          height={58}
          alt="footer logo"
        ></Image>

        <div data-tid="footer_block" className={"flex flex-col"}>
          <div data-tid="call" className="mt-6">
            <h3 data-tid="call_title" className={"text-[18px] leading-none"}>
              Номер для заказа
            </h3>
            <div
              data-tid="number"
              className={
                "mt-2 flex items-center gap-2 text-xs leading-[15.6px]"
              }
            >
              <Image
                className={" h-6 w-6"}
                src={icon_call}
                height={24}
                width={24}
                alt="call icon"
              />
              <p> +7(930)833-38-11</p>
            </div>
          </div>

          <div data-tid="social" className={"mt-6"}>
            <h3 data-tid="social_title" className={"text-[18px] leading-none"}>
              {" "}
              Мы в соцсетях
            </h3>
            <div data-tid="social_icons" className={"mt-2 flex gap-4"}>
              <Image
                data-tid="vk_icon"
                src={icon_vk}
                width={36}
                height={36}
                alt="vk logo"
              />
              <Image
                data-tid="tg_icon"
                src={icon_tg}
                width={36}
                height={36}
                alt="vk telegram"
              />
            </div>
          </div>
          <div data-tid="copyright" className={"mt-[54px]"}>
            <p className={"text-xs leading-4"}>© YouMeal, 2022</p>
            <p className={"text-xs leading-4"}>Design: Anastasia Ilina </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
