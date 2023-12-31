"use client";
import Image from "next/image";
import React, { FC, ReactNode, useState } from "react";
import icon_close from "@/public/icons/close.png";

interface Props {
  children?: ReactNode;
  content?: ReactNode;
}

const Modal_window: FC<Props> = ({ children, content }) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className={"h-max w-full"}>
      <div
        data-tid="modal"
        className={"h-max w-full"}
        onClick={() => setShow(true)}
      >
        {children}
      </div>
      {show && (
        <>
          <div
            onClick={() => setShow(false)}
            className={
              " fixed left-0 top-0 z-40 h-screen w-screen cursor-pointer bg-black opacity-80"
            }
          ></div>
          <div
            className={
              "fixed  left-1/2  top-1/2 z-50 h-max  w-max translate-x-[-50%] translate-y-[-50%]  "
            }
          >
            <div className={"relative h-max w-max"}>
              <div
                data-tid="close_btn"
                onClick={() => setShow(false)}
                className={
                  " lg-top-6 absolute right-[10px] top-[10px] cursor-pointer sm:right-4 sm:top-4 lg:right-6"
                }
              >
                <Image
                  src={icon_close}
                  width={24}
                  height={24}
                  alt="close icon"
                />
              </div>
              {content}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Modal_window;
