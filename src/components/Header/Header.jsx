import React, { useState, useEffect } from "react";
import s from "./Header.module.scss";
import Link from "next/link";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import HeaderLink from "./HeaderLink/HeaderLink";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useIsClient } from "usehooks-ts";

const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const [isMenu, setIsMenu] = useState(false);
  const router = useRouter();
  const isClient = useIsClient();

  useEffect(() => {
    setIsOpen(false);
    setIsMenu(false);
  }, [router]);

  return (
    <section className={s.header}>
      {isClient && (
        <div className="container">
          <div className={s.header__main}>
            <div className={s.header__wrapper}>
              <div className={s.header__logo}>
                <Link href={"/"}>
                  <img src="/LOGO.png" alt="" />
                </Link>
              </div>
              <div className={s.header__search}>
                <input
                  type="text"
                  placeholder="Search for products or brands"
                />
              </div>
              <div className={s.header__items}>
                <button
                  className={s.header__lang}
                  onClick={() => changeLanguage("uz")}
                >
                  UZ
                </button>
                <button
                  className={s.header__lang}
                  onClick={() => changeLanguage("ru")}
                >
                  RU
                </button>
                <svg
                  width="28"
                  height="23"
                  viewBox="0 0 28 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.15604 13.3264L13.367 21.2581C13.6783 21.5261 13.8339 21.6601 14.0195 21.6601C14.2051 21.6601 14.3608 21.5261 14.6721 21.2581L23.883 13.3264C26.7269 10.8775 27.0225 6.54384 24.5979 3.67923C21.8541 0.437418 16.6434 0.947176 14.682 4.71428C14.4029 5.25022 13.6361 5.25022 13.3571 4.71428C11.3957 0.947176 6.18499 0.437418 3.44114 3.67923C1.01655 6.54384 1.31218 10.8775 4.15604 13.3264Z"
                    stroke="#0449B1"
                    strokeWidth="2"
                  />
                </svg>

                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1309_65)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 0.409973C9.79086 0.409973 8 2.20083 8 4.40997V6.40997H4C2.89543 6.40997 2 7.3054 2 8.40997V20.41C2 22.6191 3.79086 24.41 6 24.41H18C20.2091 24.41 22 22.6191 22 20.41V8.40997C22 7.3054 21.1046 6.40997 20 6.40997H16V4.40997C16 2.20083 14.2091 0.409973 12 0.409973ZM14 8.40997V9.40997C14 9.96225 14.4477 10.41 15 10.41C15.5523 10.41 16 9.96225 16 9.40997V8.40997H20V20.41C20 21.5146 19.1046 22.41 18 22.41H6C4.89543 22.41 4 21.5146 4 20.41V8.40997H8V9.40997C8 9.96225 8.44772 10.41 9 10.41C9.55228 10.41 10 9.96225 10 9.40997V8.40997H14ZM14 6.40997V4.40997C14 3.3054 13.1046 2.40997 12 2.40997C10.8954 2.40997 10 3.3054 10 4.40997V6.40997H14Z"
                      fill="#0449B1"
                    />
                  </g>
                  <path
                    d="M12.0535 10.285C12.8855 10.285 13.5359 10.5818 14.0047 11.1756C14.5633 11.8787 14.8426 13.0447 14.8426 14.6736C14.8426 16.2986 14.5613 17.4666 13.9988 18.1776C13.534 18.7635 12.8855 19.0565 12.0535 19.0565C11.2176 19.0565 10.5438 18.7361 10.032 18.0955C9.52031 17.451 9.26445 16.3045 9.26445 14.6561C9.26445 13.0389 9.5457 11.8748 10.1082 11.1639C10.573 10.5779 11.2215 10.285 12.0535 10.285ZM12.0535 11.6502C11.8543 11.6502 11.6766 11.7147 11.5203 11.8436C11.3641 11.9686 11.243 12.1951 11.157 12.5233C11.0438 12.949 10.9871 13.6658 10.9871 14.6736C10.9871 15.6815 11.0379 16.3748 11.1395 16.7537C11.241 17.1287 11.368 17.3787 11.5203 17.5037C11.6766 17.6287 11.8543 17.6912 12.0535 17.6912C12.2527 17.6912 12.4305 17.6287 12.5867 17.5037C12.743 17.3748 12.8641 17.1463 12.95 16.8182C13.0633 16.3963 13.1199 15.6815 13.1199 14.6736C13.1199 13.6658 13.0691 12.9744 12.9676 12.5994C12.866 12.2205 12.7371 11.9686 12.5809 11.8436C12.4285 11.7147 12.2527 11.6502 12.0535 11.6502Z"
                    fill="#0449B1"
                  />
                  <defs>
                    <clipPath id="clip0_1309_65">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.409973)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className={s.header__btm}>
              <HeaderLink />
            </div>
            <div className={s.header__link2}>
              <div className={s.header__links}>
                <Link href={"/"}>{t("link")}</Link>
                {/* главная */}
                <Link href={"/products"}>{t("link2")}</Link>
                {/* продукты */}
              </div>
              <div
                className={`${s.burger} ${isMenu ? "burger-open" : ""}`}
                onClick={() => {
                  // menuHandle();
                  setIsMenu((prev) => !prev);
                  toggleDrawer();
                }}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <Drawer
              open={isOpen}
              direction="right"
              className={s.header__drawer}
              onClose={() => {
                toggleDrawer();
                setIsMenu((prev) => !prev);
              }}
            >
              <div
                className={s.sdf}
                onClick={() => {
                  // menuHandle();
                  setIsMenu((prev) => !prev);
                  toggleDrawer();
                }}
              >
                &times;
              </div>
              <div className={s.header__bur}>
                <div className={s.headerLink__wrapper}>
                  <div className={s.header__link_drawer}>
                    <Link href={"/"}>{t("link")}</Link>
                    {/* главная */}
                    <Link href={"/products"}>{t("link2")}</Link>
                    {/* продукты */}
                    <Link href={"/"}>{t("link3")}</Link>
                    {/* коллекции */}
                    <Link href={"/products"}>{t("link4")}</Link>
                    {/* топ */}
                    <Link href={"/"}>{t("link5")}</Link>
                    {/* lookbook */}
                    <Link href={"/"}>{t("link6")}</Link>
                    {/* о нас */}
                    <Link href={"/products"}>{t("link7")}</Link>
                    {/* FAQ */}
                  </div>
                </div>
              </div>
            </Drawer>
          </div>
        </div>
      )}
    </section>
  );
};

export default Header;
