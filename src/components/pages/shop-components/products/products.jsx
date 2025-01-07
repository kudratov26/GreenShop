import React from "react";
import { Card } from "../../../common/card/card";
import { flowersShop } from "../../../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Products = () => {
  return (
    <div className="full-height">
      <span className="hover:text-green hover:underline hover:font-bold underline-offset-[12px] transition-all duration-500 ease-in-out">
        Related Products
      </span>
      <hr className="bg-green mt-[6px] dfrowc gap-[30px]" />
      <Swiper slidesPerView={4} pagination={{ clickable: true }}>
        {flowersShop.map((data, index) => (
          <SwiperSlide key={index}>
            <Card items={[data]} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
