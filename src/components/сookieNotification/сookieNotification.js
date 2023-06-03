import React from "react";
import './cookieNotification.scss';
import cookiePersn from '../../img/cookiePers.svg';

const CookieNotification = ({acceptCookies}) => {
    return (
        <>
            <div className="cookie__block">
                <div className="cookie__message d-flex justify-content-between align-items-center">
                    <div className="cookie__img"><img src={cookiePersn} alt="cookie" /></div>
                    <p className="">Мы используем файлы cookie для хранения данных. Продолжая использовать сайт, вы даете согласие</p>
                    <div>
                        <button onClick={acceptCookies} className="accent__btn accent__btn--dark">Согласен</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CookieNotification;