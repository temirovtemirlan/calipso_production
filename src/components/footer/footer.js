import React from "react";

import telegram from '../../img/telegram.svg';
import instagram from '../../img/inst.svg';
import logo from '../../img/logo-calipso.svg';
import './footer.scss';


const Footer = () => {
    return (
        <>
            <footer className="footer__calipso footer--bg">
            <div className="footer__container"> 
                <div className="row row-gap-3 footer__contact d-flex align-items-start justify-content-start">
                    <ul className="col-lg-4 footer__list d-flex flex-column col-sm-12">
                        <li className="w-100"><a className="footer__link " href="tel:+9965012222299">+996 501 222 299</a></li>
                        <li><a className="footer__link" href="tel:+9965012222299">+996 555 222 299</a></li>
                    </ul>
                    <div className="col-lg-4 footer__content">
                        <p className="footer__paragraph">
                            ОсОО «КАЛИПСО ЛЛС»
                            725002, Кыргызская Республика, Чуйская область, с. Будёновка, ул. Набережная, 1.  <br /> ИНН 00802202310245
                        </p>
                    </div>
                    <div className="col-lg-4 d-flex footer__media justify-content-lg-end justify-content-md-start">
                        <a href="#"><img src={telegram} alt="telegram"/></a>
                        <a href="https://www.instagram.com/calipsokg/"><img src={instagram} alt="inst"/></a>
                    </div>
                </div>
                <div className="footer__copyright d-flex justify-content-between align-items-center w-100">
                    <div className="header__logo">
                        <img src={logo} alt="calipso"/>
                    </div>
                    <p className="">develop by Monster©</p>
                </div>
            </div>
            </footer>
        </>
    )
}

export default Footer;