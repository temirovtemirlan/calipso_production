import React, { useState, useEffect, useRef } from "react";
import Logo from '../../img/logo-calipso.svg';
import './menu.scss';

const Menu = ({fixedMenu = false, cartToOpen, bgMenu, paddingT, paddingB, burgerToOpen}) => {
    let menudRef = useRef();

    return (    
        <div className="menu__inner d-flex justify-content-between w-100 align-items-center" style={{paddingTop: paddingT, paddingBottom: paddingB}}>
            <div className="header__logo"><img src={Logo} alt="calipso"/></div>
            <nav className={`header__menu d-flex align-items-center`}>
                <a className="header__link link"  href="#">О компании</a>
                <a className="header__link link"  href="#">Каталог</a>
                <a className="header__link link"  href="#">Контакты</a>
                <a className="header__link link header--number" href="tel:+996501222299">+996 501 222 299</a>

                <button  onClick={cartToOpen} className="add-to-card">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1H5.54251L9.425 21.849C9.70972 23.3502 11.0168 24.4373 12.5439 24.4373H30.3516" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6.22852 4.68823H33.4448L31.2059 18.6523H8.82978" stroke="white" strokeLinejoin="round"/>
                        <path d="M26.5725 34.6871C28.2951 34.6871 29.6915 33.2907 29.6915 31.5682C29.6915 29.8456 28.2951 28.4492 26.5725 28.4492C24.85 28.4492 23.4536 29.8456 23.4536 31.5682C23.4536 33.2907 24.85 34.6871 26.5725 34.6871Z" stroke="white" strokeMiterlimit="10"/>
                    <path d="M13.1004 34.6871C14.8229 34.6871 16.2193 33.2907 16.2193 31.5682C16.2193 29.8456 14.8229 28.4492 13.1004 28.4492C11.3778 28.4492 9.98145 29.8456 9.98145 31.5682C9.98145 33.2907 11.3778 34.6871 13.1004 34.6871Z" stroke="white" strokeMiterlimit="10"/>
                </svg>
                </button>
                <button className="accent__btn">RU ↓</button>
            </nav>
            <button ref={menudRef} className="burgerMenus menud" onClick={burgerToOpen}>
                <div className="burgerMenus__liness">
                    <span className="burgerMenus__lines burgerMenus__lines01"></span>
                    <span className="burgerMenus__lines burgerMenus__lines02"></span>
                    <span className="burgerMenus__lines burgerMenus__lines03"></span>
                </div>
            </button>
        </div>
    )
}

export default Menu;