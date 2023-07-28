import React, { useState, useEffect, useReducer, useRef } from "react";
import './FormPopup.scss';

import ReactPhoneInput from 'react-phone-input-2';
import ru from '../../lang/ru.json';
import successImg from '../../img/success.svg';
import emptyImg from '../../img/info.svg';
import errorImg from '../../img/error.svg';
import { CSSTransition } from "react-transition-group";
import { useTranslation } from "react-i18next";


const FormPopup = ({item, clearCart,handlePopupController, popup, quantity, setPopup}) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const { t } = useTranslation();

    // Message
    const [successMessage, setSuccessMessage] = useState(false);
    const [emptyMessage, setEmptyMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    // popupRef
    const popupRef = useRef();
    
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopup(false);
        
         // Закрыть блок
      }
    };
  
    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
  
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, []);


    const handleNameChange = (event) => {
        setName(event.target.value);
      };
    
      const handlePhoneChange = (phone) => {
        setPhone(phone);
      };
    
      const handleAddressChange = (event) => {
        setAddress(event.target.value);
      };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (name === "" || phone === "" || address === "") {
          // return ; // Если хотя бы одно поле не заполнено, просто выйти из функции handleSubmit
          return setEmptyMessage(!emptyMessage);
        }
    
        const telegramBotToken = "6097734755:AAE4caTHXdk_O6GE8SI2zccqgOp78Ys6oQQ";
        const chatId = "1866340108";
    
        const messageText = `Новый Адрес доставки!\n\nИмя пользователя: ${name}\nТелеофон: ${phone}\nАдрес доставки: ${address}\n\nВ заказе ${quantity}:\n${item.map((item) => (`Название: ${item.descr}\nКоличество: ${item.quantity} блок\nОбъем: ${item.volume}\nЦена: ${item.price} сом\nИтоговая цена: ${totalPrice} сом`))}`;
    
        try {
          const response = await fetch(
            `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                chat_id: chatId,
                text: messageText,
              }),
            }
          );
    
          if (response.ok) {
            // console.log("Сообщение успешно отправлено в Telegram!");

              setName("");
              setPhone("");
              setAddress("");
              setSuccessMessage(!successMessage);
              clearCart();
          } else {
            // console.error("Ошибка при отправке сообщения в Telegram.");
          setErrorMessage(!errorMessage)

          }
        } catch (error) {
          console.error("Произошла ошибка:", error);
        }
      };

    const totalPrice = item.reduce((accumulator, currentValue) => {
        return (currentValue.price * currentValue.quantity) + accumulator
    }, 0)

    useEffect(() => {

      if (emptyMessage) {
        const timer1 = setTimeout(() => {
          setEmptyMessage(false);
          // console.log("the notification inmount");
        }, 3000);

        return () => {
          clearTimeout(timer1);
          // console.log("the notification is deleted");
        }
      }

      if (errorMessage) {
        const timer3 = setTimeout(() => {
          setErrorMessage(false);
          // console.log("the notification inmount");
        }, 3000);
        
        return () => {
          clearTimeout(timer3);
          // console.log("the notification is deleted"); 
        }
      }

    }, [successMessage, emptyMessage, errorMessage]);

    return (
        <>
        <div className="form__order">

        <div ref={popupRef} className={`form__popup ${popup ? "form__show" : "form__hide"}`}>
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
                {t('carts.order-1')} {quantity} {t('carts.order-2')}
                </h2>

                <div className="form__scroll">

                {
                    item.map((item, id) => (
                        <div key={id} className="form__cart cart__block flex-wrap d-flex align-items-end flex-column">
                            
                            <div className="w-100 align-items-center d-flex justify-content-between">
                                <div className="form__item d-flex align-items-center w-100">
                                        <img className="cart--image" src={item.img} alt="cart" />
                                        <div className="cart__info d-flex flex-column ">
                                            <h4 className="cart__descr">{item.descr}</h4>
                                            <div className="d-flex justify-content-between">
                                            <div className="d-flex w-100 flex-column">

                                                <div className="d-flex  justify-content-between settings__item">
                                                    <span>{t('catalog.carts.price')} </span>
                                                    <b>{item.price} сом</b>
                                                </div>

                                                <div className="d-flex  justify-content-between settings__item">
                                                    <span>{t('catalog.carts.vol')} </span>
                                                    <b>{item.char} / {item.volume}</b>
                                                </div>

                                                <div className="d-flex  justify-content-between settings__item">
                                                    <span>{t('catalog.carts.quan')} </span>
                                                    <b>{item.quantity}</b>
                                                </div>



                                            </div>
                                            </div>
                                        </div>
                                </div>

                            </div>

                            </div>))
                }
                </div>
                <div className="form__price-total d-flex justify-content-lg-end align-items-center" style={{marginRight: "50px"}}>
                    <h2 className="form__title form__price">
                        {t('carts.price')}: {totalPrice} сом
                    </h2>
                </div>
                </div>
                <div className="form__form">
                    <h2 className="form__title form__subject">{t("carts.form")}</h2>
                    <form onSubmit={handleSubmit} className="form__popup-form d-flex flex-column" action="POST">
                        <input
                            className="form__popup-input"
                            type="text"
                            placeholder={t('form.input.input-2')}
                            onChange={handleNameChange}
                            value={name}
                            />
                        <ReactPhoneInput
                                className="form__num"
                                country={'kg'}
                                preferredCountries={['kz','ru','uz']}
                                localization={ru}
                                value={phone}
                                onChange={handlePhoneChange}
                                
                                />
                        <input
                            className="form__popup-input"
                            type="text"
                            placeholder={t('form.input.input-1')}
                            onChange={handleAddressChange}
                            value={address}
                            />
                        <button
                            type="submit"
                            className="form__popup-btn accent__btn accent__btn--dark accent--active"
                        >
                        {t('form.btn')}
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


const Message = ({messageState = false, img, title, descr}) => {
  return (
    <>
<div className={`message__block ${messageState ? "message__show" : ""}`}>
            <div className="message__title d-flex align-items-center">
              <img src={img} alt="svg icon" />
              <h4>{title}</h4>
            </div>

            <p className="message__text">
              {descr}
            </p>
          </div>

    </>
  )
}

export default FormPopup;