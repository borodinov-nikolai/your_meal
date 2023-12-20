"use client";
import React, { useState } from "react";
import Category_btn from "../ui/category_btn";
import categories from "@/src/constants/categories";
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Category = () => {
const [active, setActive] = useState<number>(1)

  return (
  


      <Swiper
               slidesPerView={9}
               spaceBetween={10}
               centeredSlides={false}
               slidesPerGroupSkip={4}
               grabCursor={true}
               keyboard={{
                 enabled: true,
               }}
               
              
               
               modules={[Keyboard, Scrollbar, Navigation, Pagination]}
               className={ "mySwiper h-max flex gap-[24px]  overflow-hidden"}
      > 
     
       
        

        {categories.map(({id, icon, name})=> {
      return   <SwiperSlide><Category_btn
      key={id}
      onClick={() => setActive(id)}
      active={id === active? true : false}
      icon={icon}
    >
      {name}
    </Category_btn></SwiperSlide>
     })}

      
      
      
       </Swiper>


  );
};

export default Category;
