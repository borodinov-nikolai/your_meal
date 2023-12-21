import Image from "next/image";
import React from "react";
import logo from "@/public/icons/logo.png";
import img_burger from "@/public/images/g10.png";

const Header = () => {
  return (
    <div
      data-tid="header"
      className={
        ' h-[459px] w-full bg-[url("/images/bg.svg")] bg-cover bg-bottom bg-no-repeat pt-[24px] md:h-[349px] lg:h-[466px]'
      }
    >
      <div data-tid="container" className={"container"}>
        <div data-tid="header_logo">
          <Image
            priority
            className={
              " mx-auto h-[29px] w-[150px] p-[0px] lg:h-[33px] lg:w-[152px]"
            }
            src={logo}
            height={29}
            width={150}
            alt="logo"
          />
        </div>
        <div
          data-tid="header_block"
          className={
            "mt-6 flex-row-reverse items-center justify-center md:mx-auto  md:mt-[23px] md:flex md:w-[562px] lg:w-[763px]"
          }
        >
          <div
            data-tid="header_text"
            className={
              " mx-auto flex w-[300px] flex-col text-center md:mt-[27px] md:w-[325px] md:self-start md:text-start  lg:mt-[68px] lg:w-[437px] "
            }
          >
            <h1
              className={
                "text-[30px] font-extrabold leading-[36px] text-white md:text-[36px] lg:text-[50px] lg:leading-[60px]"
              }
            >
              Только самые{" "}
              <span className={"text-[#FF5C00]"}>сочные бургеры!</span>
            </h1>
            <p className={"mt-4 text-xs text-white lg:mt-[52px] lg:text-base"}>
              Бесплатная доставка от 599₽
            </p>
          </div>
          <div data-tid="header_image" className={"mx-auto w-max md:mx-0"}>
            <Image
              priority
              className={"h-[229px] w-[227px] lg:h-[326px] lg:w-[326px]"}
              src={img_burger}
              height={400}
              width={400}
              alt="burger"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
