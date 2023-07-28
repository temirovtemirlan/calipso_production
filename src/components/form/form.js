import React, { useState, useEffect } from "react";
import './form.scss';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import ru from '../../lang/ru.json';

import successImg from '../../img/success.svg';
import emptyImg from '../../img/info.svg';
import errorImg from '../../img/error.svg';
import { useTranslation } from "react-i18next";


const Form = () => {
      const [name, setName] = useState("");
      const [phone, setPhone] = useState("");
      const [email, setEmail] = useState("");

      // Message
      const [successMessage, setSuccessMessage] = useState(false);
      const [emptyMessage, setEmptyMessage] = useState(false);
      const [errorMessage, setErrorMessage] = useState(false);
  

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (phone) => {
    setPhone(phone);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name === "" || phone === "" || email === "") {
      return setEmptyMessage(!emptyMessage);
    }


    const telegramBotToken = "6097734755:AAE4caTHXdk_O6GE8SI2zccqgOp78Ys6oQQ";
    const chatId = "1866340108";

    const messageText = `Имя пользователя: ${name}\nТелеофон: ${phone}\nGmail: ${email}`;

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
        console.log("Сообщение успешно отправлено в Telegram!");
        setName("");
        setPhone("");
        setEmail("");
        setSuccessMessage(!successMessage)
      } else {
        console.error("Ошибка при отправке сообщения в Telegram.");
        setErrorMessage(!errorMessage)
      }
    } catch (error) {
      console.error("Произошла ошибка:", error);
    }
  };

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setSuccessMessage(false);
    }, 3000);
    const timer2 = setTimeout(() => {
      setEmptyMessage(false);
    }, 2000);
    const timer3 = setTimeout(() => {
      setErrorMessage(false)
    }, 5000);
  
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    }
  });

  const {t} = useTranslation();

  return (
    <>
      <section  id="contacts">
        <div className="contact contact--bg">
          <div className="contact__container contact__inner contact--px contact--py">
            <h2 className="contact__title title">{t("form.title")}</h2>
            <div className="row d-flex contact__forms">
              <div className="col-lg-6 col-md-12">
                <div className="contact__descr d-flex flex-column">
                  <b className="contact__headline">{t("form.sub")}</b>
                  <p className="contact__content">
                  {t("form.descr")}
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <form onSubmit={handleSubmit} className="contact__form d-flex flex-column" action="POST">
                  <input
                    onChange={handleNameChange}
                    value={name}
                    placeholder="Имя"
                    className="contact__input w-100 contact__input--my"
                    type="text"
                  />
                  <div className="contact__block-input d-flex w-100 ">
                    <ReactPhoneInput
                      className="contact__block-input"
                      country={'kg'}
                      preferredCountries={['kz', 'ru', 'uz']}
                      localization={ru}
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder="555 555 555"
                    />
                    <input
                      onChange={handleEmailChange}
                      value={email}
                      className="contact__input"
                      placeholder="Электронная почта"
                      type="text"
                    />
                  </div>
                  <button type="submit" className="accent__btn contact__btn">{t('form.btn')}</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

       { successMessage ? (
         <Message messageState={successMessage} img={successImg} title={t('notifications.success.title')} descr={t('notifications.success.descr')}/>
       ) : emptyMessage ? (
        <Message messageState={emptyMessage} img={emptyImg} title={t('notifications.empty.title')} descr={t('notifications.empty.descr')}/>
       ) : errorMessage ? (
         <Message messageState={errorMessage} img={errorImg} title={t('notifications.error.title')} descr={t('notifications.error.descr')}/>
       ) : null
       }
    </>
  );
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

export default Form;
