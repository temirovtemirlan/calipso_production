import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "../menu/";
// scss
import './header.scss';

const Header = ({cartToOpen, burgerToggle, handleOpenBurgerMenu, burgerToOpen}) => {

    return (
        <>
        <header className="header header--bg">
            <div className="header__inner">
                <div className="header__container d-flex justify-content-between w-100 align-items-start">
                    <div className="d-flex justify-content-between w-100">
                        <Menu burgerToOpen={burgerToOpen} cartToOpen={cartToOpen}/>
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

export default Header;