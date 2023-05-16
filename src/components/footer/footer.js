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
                    <ul className="col-lg-4 footer__list d-flex flex-column">
                        <li><a className="footer__link" href="tel:+996(312)555555">+996 (312) 555-555</a></li>
                        <li><a className="footer__link" href="tel:+996(999)666777">+996 (999) 666-777</a></li>
                        <li><a className="footer__link" href="mailto:calipsocompany@gmail.com">calipsocompany@gmail.com</a></li>
                    </ul>
                    <div className="col-lg-4 footer__content">
                        <p className="footer__paragraph">
                            сОО «Софтскилз» КР, ИНН 02304202110222
                            Кыргызская Республика, г. Бишкек, ул. Токтогула, д.125/1, пом 1104
                            Регистрационный номер 197076-3300-ООО, ОКПО 30967194
                        </p>
                    </div>
                    <div className="col-lg-4 d-flex footer__media justify-content-lg-end justify-content-md-start">
                        <a href="#"><img src={telegram} alt="telegram"/></a>
                        <a href="#"><img src={instagram} alt="inst"/></a>
                    </div>
                </div>
                <div className="footer__copyright d-flex justify-content-between align-items-center w-100">
                    <div className="header__logo"><img src={logo} alt="calipso"/></div>
                    <p className="">© Calipso 2023</p>
                </div>
            </div>
            </footer>
        </>
    )
}

export default Footer;