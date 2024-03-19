import React from "react";
import s from "./HeaderLink.module.scss";
import Link from "next/link";
import { useTranslation } from "react-i18next";
const HeaderLink = () => {
  const { t } = useTranslation();

  return (
    <section className={s.headerLink}>
      <div className="container">
        <div className={s.headerLink__wrapper}>
        <Link href={"/"}>{t('link')}</Link>
                    {/* главная */}
                    <Link href={"/products"}>{t('link2')}</Link>
                    {/* продукты */}
                    <Link href={"/"}>{t('link3')}</Link>
                    {/* коллекции */}
                    <Link href={"/products"}>{t('link4')}</Link>
                    {/* топ */}
                    <Link href={"/"}>{t('link5')}</Link>
                    {/* lookbook */}
                    <Link href={"/"}>{t('link6')}</Link>
                    {/* о нас */}
                    <Link href={"/products"}>{t('link7')}</Link>
                    {/* FAQ */}
        </div>
      </div>
    </section>
  );
};

export default HeaderLink;
