import React from "react";
import './cookieNotification.scss';
import cookiePersn from '../../img/cookiePers.svg';
import { useTranslation } from "react-i18next";

const CookieNotification = ({acceptCookies}) => {
    
    const { t } = useTranslation();

    return (
        <>
            <div className="cookie__block">
                <div className="cookie__message d-flex justify-content-between align-items-center">
                    <div className="cookie__img"><img src={cookiePersn} alt="cookie" /></div>
                    <p className="cookie__descr">{t('cookie.cookie-title')}</p>
                    <div>
                        <button onClick={acceptCookies} className="accent__btn accent__btn--dark">{t('cookie.cookie-btn')}</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CookieNotification;