import React from "react";
import s from "./Collection.module.scss";
import { col } from "@/slider";
import Link from "next/link";

const Collection = () => {
  return (
    <section className={s.new}>
      <div className="container">
        <div className={s.new__wrapper}>
            <div className={s.new__cards}>
          {col.map((el) => {
            return(
                <Link href={'/'}  id={el?.id} className={s.new__card}>
                    <img src={el?.img} alt="" />
                    <h2>{el?.ru_title}</h2>
                    <p>{el?.desc.slice(0, 90)}</p>
                </Link>
            )
          })}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
