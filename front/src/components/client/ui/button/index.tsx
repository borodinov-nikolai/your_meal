"use client";
import React, { FC } from "react";

interface Props {
  width?: number;
  size?: "small" | "normal";
  color?: "orange" | "white";
  children?: React.ReactNode;
  onCick?: () => void;
}

const Button: FC<Props> = ({
  width = 268,
  size = "normal",
  color = "orange",
  children,
  ...props
}) => {
  const args = [
    `rounded-xl hover:bg-[#FFAB08] flex justify-center items-center w-[${
      width + "px"
    }]`,
  ];

  if (size === "normal") {
    args.push("h-10 leading-4");
  } else {
    args.push("h-[30px] text-xs leading-3");
  }

  if (color === "orange") {
    args.push("bg-[#FF7020] text-white");
  } else {
    args.push("bg-[#F2F2F3] hover:text-white");
  }

  return (
    <button className={args.join(" ")} {...props}>
      {children}
    </button>
  );
};

export default Button;
