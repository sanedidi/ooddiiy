import { products } from "@/slider";
import { useRouter } from "next/router";
import React, { useState } from "react";
import s from "./singPage.module.scss";
const SingleProduct = () => {
  const router = useRouter();
  const findProd = products?.find((el) => {
    return el?.id == router.query.id;
  });
  const [currentImage, setCurrentImage] = useState(0);
  const [images] = useState([
    findProd?.img2,
    findProd?.img3,
    findProd?.img4,
    findProd?.img5,
  ]);

  const handleClick = (index) => {
    setCurrentImage(index);
  };
  return (
    
    <section className={s.singProd}>
      <div className="container">
        <div className={s.singProd__wrapper}>
          <div className={s.singProd__img}>
          <div className={s.singProd__pre}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="asd"
            className={currentImage === index ? s.active : ''}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <img src={images[currentImage]} alt="asd" />
          </div>
          <div className={s.singProd__info}>
            <div className={s.singProd__top}>
              <h1>{findProd?.ru_name}</h1>
              <p>{findProd?.desc}</p>
            </div>
            <div className={s.singProd__sizes}>
              <div className={s.singProd__sizes_top}>
                <p>Sizes</p>
              </div>
              <div className={s.singProd__sizes_btm}>
                <button className={s.singProd__size}>XS</button>
                <button className={s.singProd__size}>S</button>
                <button className={s.singProd__size}>M</button>
                <button className={s.singProd__size}>L</button>
                <button className={s.singProd__size}>XL</button>
                <button className={s.singProd__size}>XXL</button>
              </div>
            </div>
            <div className={s.singProd__prices}>
              <div className={s.singProd__prices_top}>
                <p>Price</p>
              </div>
              <div className={s.singProd__prices_btm}>
                <p className={s.singProd__price}>{findProd?.price}</p>
              </div>
            </div>
            <button className={s.singProd__btn}>{findProd?.btn}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
