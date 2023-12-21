"use client";
import React, { FC } from "react";

interface Props {
  width?: number | "full";
  color?: "orange" | "gray";
  children?: React.ReactNode;
  onCick?: () => void;
}

const Button: FC<Props> = ({
  width = 268,
  color = "orange",
  children,
  ...props
}) => {
  const args = [
    `rounded-xl hover:bg-[#FFAB08] flex justify-center items-center h-[30px] text-xs leading-3 lg:h-10 lg:text-base lg:leading-4`,
  ];

  if (color === "orange") {
    args.push("bg-[#FF7020] text-white");
  } else {
    args.push("bg-[#F2F2F3] hover:text-white");
  }

  return (
    <button
      style={width === "full" ? { width: "100%" } : { width: width + "px" }}
      className={args.join(" ")}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
