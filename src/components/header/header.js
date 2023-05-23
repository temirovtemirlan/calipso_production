import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-scroll';
import Menu from "../menu/";

import Logo from '../../img/logo-calipso.svg';
import bg from '../../img/bg.png';
import './header.scss';

const Header = ({cartToOpen}) => {

    return (
        <>
        <header className="header header--bg">
            <div className="header__inner">
                <div className="header__container d-flex justify-content-between w-100 align-items-start">
                    <div className="adsf d-flex justify-content-between w-100">
                        <Menu cartToOpen={cartToOpen}/>
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

/*

<button id="burger-menu " className="header__burger">
                        <div className="menu-icon">
                            <input className="menu-icon__cheeckbox" type="checkbox" />
                            <div>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </button>
*/
export default Header;