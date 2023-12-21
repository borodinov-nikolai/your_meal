"use client";
import React from "react";
import Category_btn from "../ui/category_btn";
import categories from "@/src/constants/categories";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import { usePathname } from "next/navigation";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Categories = () => {
  const pathname = usePathname();

  return (
    <div
      data-tid="categories"
      className="px-[10px] xl:container md:pl-16 md:pr-0 lg:pl-8 xl:pl-0"
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
            <SwiperSlide
              data-tid="slider"
              key={id}
              className={"mr-2  !w-max md:mr-3 lg:mr-6"}
            >
              <Link href={href}>
                <Category_btn
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
