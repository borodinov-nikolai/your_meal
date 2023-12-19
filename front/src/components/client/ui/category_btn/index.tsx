import Image from "next/image";
import React from "react";

interface Props {
  img?: string;
  children?: React.ReactNode;
  size?: "small" | "normal";
  active?: boolean;
}

const Category_btn: React.FC<Props> = ({
  img,
  children,
  size = "normal",
  active = false,
}) => {
  let button_size;
  let background;
  let border;
  let font_size;

  if (size === "normal") {
    font_size = "text-base";
    button_size = "w-[121px] h-[40px]";
  } else {
    button_size = "w-[97px] h-[30px]";
    font_size = "text-xs";
  }

  if (active) {
    background = "bg-[#FFAB08]";
    border = "hover:border-transparent";
  } else {
    background = "bg-white";
    border = "hover:border-[#F86310]";
  }

  return (
    <button
      className={[
        "rounded-[50px] border border-transparent",
        font_size,
        border,
        button_size,
        background,
      ].join(" ")}
    >
      {img && (
        <Image
          className={"flex h-6 w-6 gap-2"}
          src={img}
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
