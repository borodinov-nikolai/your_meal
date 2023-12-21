"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  icon?: StaticImageData;
  children?: React.ReactNode;
  size?: "small" | "normal";
  active?: boolean;
  onClick?: () => void;
}

const Category_btn: React.FC<Props> = ({
  icon,
  children,
  size = "normal",
  active = false,
  ...props
}) => {
  const args = [
    "rounded-[50px] bg-white w-auto border border-transparent flex items-center justify-center gap-2 select-none",
  ];

  if (size === "normal") {
    args.push(" px-[14px] text-base h-[40px]");
  } else {
    args.push(" px-2 h-[30px] text-xs");
  }

  if (active) {
    args.push("bg-[#FFAB08] hover:border-transparent");
  } else {
    args.push("bg-white hover:border-[#F86310]");
  }

  return (
    <button className={args.join(" ")} {...props}>
      {icon && (
        <Image
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
