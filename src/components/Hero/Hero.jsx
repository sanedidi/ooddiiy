import s from "./Hero.module.scss";
import { slider } from "./../../slider";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import Link from "next/link";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className="container">
        <div className={s.hero__wrapper}>
          <Swiper
            navigation={true}
            scrollbar={{
              hide: true,
            }}
            modules={[Scrollbar, Navigation]}
            className="mySwiper"
          >
            {slider.map((el) => {
              return (
                <SwiperSlide>
                  <Link className={s.hero__img} href={"/"}>
                    <img src={el.img} alt="" />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
