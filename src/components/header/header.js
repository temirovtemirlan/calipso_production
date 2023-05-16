import React from "react";

import './header.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import bgCalipso from '../../img/logo-calipso.svg';
import bg from '../../img/bg.png';

const Header = () => {

    return (
        <>
        <header className="header header--bg">
            <div className="header__inner">
                <div className="header__container d-flex justify-content-between w-100 align-items-start">
                    <div className="adsf d-flex justify-content-between w-100">

                    <div className="header__logo"><img src={bgCalipso} alt="calipso"/></div>

                    <nav className="header__menu">
                        <a className="header__link link" href="#">О компании</a>
                        <a className="header__link link" href="#">Каталог</a>
                        <a className="header__link link" href="#">Тарифы</a>
                        <a className="header__link link" href="#">Контакты</a>
                        <a className="header__link link header--number" href="tel:+996555777888">+996 555 777 888</a>
                        <div className="header__lang">
                            <a className="header__link--lang is-active" href="#">Rus</a>
                            <a className="header__link--lang" href="#">Eng</a>
                        </div>
                        <div className="head__address">
                            <a href="tel:+74959810185">+7 495 981-01-85</a>
                            <i></i>
                            <a href="mailto:info@calipso.ru">info@calipso.ru</a>
                        </div>
                        <div className="head__copyright">
                            <p className="head__copyright--text">
                                © 2023 Calipso. Все права защищены.            
                            </p>
                        </div>
                    </nav>
                    
                    <button id="burger-menu " className="header__burger">
                        <div className="menu-icon">
                            <input className="menu-icon__cheeckbox" type="checkbox" />
                            <div>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </button>

                </div>

                </div>
                <div className="header__slogan header__container header__slogan--mt">
                    <h1 className="header__title header__title--mb">Чистейшая <br/> артезианская вода <br/> из глубин земли</h1>
                    <button className="accent__btn accent__btn--lg">Купить сейчас</button>
                </div>
            </div>
        </header>
        </>
    )
}

const HeaderLink = () => {
    return (
        <>
        </>
    )
}

export default Header;