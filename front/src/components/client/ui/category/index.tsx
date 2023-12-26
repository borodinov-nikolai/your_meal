"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  icon?: StaticImageData;
  children?: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

const Category_btn: React.FC<Props> = ({
  icon,
  children,
  active = false,
  ...props
}) => {
  const args = [
    "rounded-[50px] px-2 h-[30px] text-xs lg:px-[14px] lg:text-base lg:h-[40px] hover:border-[#F86310] w-auto border border-transparent flex items-center justify-center gap-2 select-none",
  ];

  if (active) {
    args.push(" bg-[#FFAB08] hover:border-transparent");
  } else {
    args.push("bg-white");
  }

  return (
    <button data-tid="category_button" className={args.join(" ")} {...props}>
      {icon && (
        <Image
          priority
          className={"h-6 w-6"}
          src={icon}
          width={24}
          height={24}
          alt="category_item"
        />
      )}
      <p>{children} </p>
    </button>
  );
};

export default Category_btn;
