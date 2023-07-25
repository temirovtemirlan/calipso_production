import React, { useState, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "../menu/";
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import CalipsoBanner from '../../img/fadkf43j.mp4';
import SwiperCore, { Navigation, Autoplay, EffectFade, Pagination } from 'swiper';
// scss
import './header.scss';
import ButtonSwitch from "../button-slider/";
import banner from '../../img/bg.png'
import { useTranslation } from "react-i18next";
SwiperCore.use([Navigation, Autoplay, EffectFade, Pagination]);


const Header = ({ cartToOpen, burgerToggle, handleOpenBurgerMenu, burgerToOpen, header }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const swiperRef = useRef(null);

    const { t } = useTranslation();

    const handleSlideChange = (swiper) => {
        // Отключаем возможность прокрутки после первого изменения слайда
        swiper.detachEvents();
    };

    return (
        <>
            <header className="header header--bg">
                <div className="header__inner">
                    <div className="header__container d-flex justify-content-between w-100 align-items-start">
                        <div className="d-flex justify-content-between w-100">
                            <Menu burgerToOpen={burgerToOpen} cartToOpen={cartToOpen} />
                        </div>
                    </div>
                    <div className="header__slogan header__container header__slogan--mt">
                        <h1 className="header__title header__title--mb">{t('ЧИСТЕЙШАЯ АРТЕЗИАНСКАЯ ВОДА ИЗ ГЛУБИН ЗЕМЛИ')}</h1>
                        <a className="accent__btn accent__btn--lg" href="#catalog">Купить сейчас</a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;