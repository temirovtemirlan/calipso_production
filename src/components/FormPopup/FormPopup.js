import React, { useEffect } from "react";
import './FormPopup.scss';

const FormPopup = ({item, removeFromCart, handlePopupController, popup, quantity}) => {

    const formSendReset = (e) => {
        e.preventDefault();
    }

    // let totalPrice = item.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
    // const totalPrice = item.reduce((acc, item) => acc + item.price, 0);
    // const totalPrice = item.map(item => item.reduce((elem, currentValue) => elem + currentValue.price, 0));
    // const totalPrice = item.reduce((accu))
    // const totalPrice = item.reduce((accumulator, current) => {

    //     accumulator + current.price
    // }, 0);

    // const existingItem = item.find((el) => el.price === item.map(el => el.price));
    // const sis = item.find(el => el.price === )

    // const totalPrice = item.reduce((acc, item) => {
    //     const existingItem = acc.find((el) => el.id === item.id);
    //     if (existingItem) {
    //       existingItem.price += item.price;
    //     } else {
    //       acc.push({ ...item });
    //     }
    //     return acc;
    //   }, []);

    const totalPrice = item.reduce((accumulator, currentValue) => {
        return (currentValue.price * currentValue.quantity) + accumulator
    }, 0)
      
    // console.log(totalPrice) 
      
    //   console.log("sdafd " + JSON.stringify(item.map(item => item.price)));
    //   console.log("sdafd " + JSON.stringify(item.map(item => item.price)));
    // console.log(sis)
    return (
        <>
        <div className="form__order">

        <div className={`form__popup ${popup ? "" : "form__show"}`}>
            <div className="form__inner d-flex flex-column">
            <div className="w-100"> 
                <button className="form__btn" onClick={handlePopupController}>
                <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7276 26.8207C15.1025 26.4456 15.3131 25.937 15.3131 25.4067C15.3131 24.8763 15.1025 24.3677 14.7276 23.9927L4.82757 14.0927L14.7276 4.19268C15.0919 3.81547 15.2935 3.31027 15.2889 2.78587C15.2844 2.26148 15.074 1.75985 14.7032 1.38904C14.3324 1.01822 13.8308 0.807886 13.3064 0.803329C12.782 0.798772 12.2768 1.00036 11.8996 1.36468L0.585572 12.6787C0.21063 13.0537 -6.05136e-07 13.5623 -5.81955e-07 14.0927C-5.58773e-07 14.623 0.21063 15.1316 0.585572 15.5067L11.8996 26.8207C12.2746 27.1956 12.7832 27.4062 13.3136 27.4062C13.8439 27.4062 14.3525 27.1956 14.7276 26.8207Z" fill="#2A2B40"/>
                </svg>
                </button>
            </div>
            
            <div className="form__block d-flex">
                <div className="form__list d-flex flex-column">
                <h2 className="form__title">
                  В заказе {quantity} товаров
                </h2>

                <div className="form__scroll">

                {
                    item.map((item, id) => (
                        <div key={id} className="form__cart cart__block flex-wrap d-flex align-items-end flex-column">
                            
                            <div className="w-100 align-items-center d-flex justify-content-between">
                                <div className="form__item d-flex align-items-center w-100">
                                        <img className="cart--image" src={item.img} alt="cart" />
                                        <div className="cart__info d-flex flex-column ">
                                            <h4 className="">{item.descr}</h4>
                                            <div className="d-flex justify-content-between">
                                            <div className="d-flex w-100 flex-column">
                                                <div className="d-flex  justify-content-between settings__item">
                                                    <span>Количество: </span>
                                                    <b>{item.quantity}</b>
                                                </div>

                                                <div className="d-flex  justify-content-between settings__item">
                                                    <span>Объем: </span>
                                                    <b>{item.char} / {item.volume}</b>
                                                </div>

                                                <div className="d-flex  justify-content-between settings__item">
                                                    <span>Цена: </span>
                                                    <b>{item.price} сом</b>
                                                </div>

                                            </div>
                                            </div>
                                        </div>
                                </div>

                            </div>

                            </div>))
                }
                </div>
                <div className="d-flex  justify-content-end align-items-center" style={{marginRight: "50px", marginTop: "20px"}}>
                    <h2 className="form__title">
                        Итоговая сумма: {totalPrice} сом
                    </h2>
                </div>
                </div>
                <div className="form__form">
                    <h2 className="form__title">Закажите артезианскую <br /> воду Calipso прямо сейчас!</h2>
                    <form className="form__popup-form d-flex flex-column" action="">
                        <input className="form__popup-input" type="text" placeholder="Введите ваше имя"/>
                        <input className="form__popup-input" type="text" placeholder="Номер "/>
                        <input className="form__popup-input" type="text" placeholder="Введите адрес доставки"/>
                        <button
                            className="form__popup-btn accent__btn accent__btn--dark accent--active"
                            onClick={formSendReset}
                        >
                        Отправить
                        </button>
                    </form>
                </div>
            </div>
            </div>
            
        </div>
        </div>

        </>
    )
}
export default FormPopup;