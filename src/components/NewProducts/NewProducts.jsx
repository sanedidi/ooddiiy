import s from "./NewProducts.module.scss";
import { products, slider } from "./../../slider";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Link from "next/link";
import { useIsClient } from "usehooks-ts";
const NewProducts = () => {
  const isClient = useIsClient();
  return (
    <section className={s.newProd}>
      {isClient && (
        <div className="container">
          <div className={s.newProd__wrapper}>
            <div className={s.newProd__cards}>
              <div className={s.newProd__main_top}>
                <h1>NEW PRODUCTS</h1>
                <p>New markdowns on our best- <br />sellers</p>
              </div>
              <Swiper
                slidesPerView={2}
                spaceBetween={15}
                navigation={true}
                modules={Navigation}
                className="mySwiper"
                breakpoints={{
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 5,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 6,
                    spaceBetween: 50,
                  },
                }}
              >
                {products.map((el, index) => (
                  <SwiperSlide key={index}>
                    <Link
                      href={`/single-product/${el?.id}`}
                      className={s.newProd__card}
                    >
                      <img className={s.newProd__top} src={el.img} alt="" />
                      <div className={s.newProd__btm}>
                        <div className={s.newProd__info}>
                          <p className={s.newProd__title}>
                            {localStorage.getItem("i18nextLng") === "uz"
                              ? `${el?.uz_name}`
                              : `${el?.ru_name}`}
                          </p>
                          <p className={s.newProd__price}>{el.price}</p>
                        </div>
                        <div className={s.newProd__btn}>
                          <p>
                            {el.desc.slice(0, 50)}
                            {"..."}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NewProducts;
