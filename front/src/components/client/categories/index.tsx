"use client";
import React, { useEffect, useState } from "react";
import Category_btn from "../ui/category_btn";
import categories from "@/src/constants/categories";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Categories = () => {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      data-tid="category"
      className="px-[10px] xl:container md:pl-16 md:pr-0 lg:pl-8 xl:mx-auto xl:pl-0"
    >
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={0}
        centeredSlides={false}
        slidesPerGroupSkip={4}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className={"mySwiper w-full select-none overflow-hidden xl:w-max "}
      >
        {categories.map(({ id, icon, name, href }) => {
          return (
            <SwiperSlide key={id} className={"mr-2 !w-max md:mr-3 lg:mr-6"}>
              <Link href={href}>
                <Category_btn
                  size={screenWidth < 1024 ? "small" : "normal"}
                  active={
                    href === pathname ||
                    (pathname === "/" && href === "/category/burger")
                      ? true
                      : false
                  }
                  icon={icon}
                >
                  {name}
                </Category_btn>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Categories;
