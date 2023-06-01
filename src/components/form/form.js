import React, { useState } from "react";
import './form.scss';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import ru from '../../lang/ru.json';

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
//   const [photos, setPhoto] = useState("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.netsolutions.com%2Finsights%2F10-ux-design-trends-to-look-for-next-year%2F&psig=AOvVaw156WfMM2u5WCbeZqJLflHR&ust=1685748231874000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMDNmtabo_8CFQAAAAAdAAAAABAI") 

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
      } else {
        console.error("Ошибка при отправке сообщения в Telegram.");
      }
    } catch (error) {
      console.error("Произошла ошибка:", error);
    }
  };

  return (
    <>
      <section>
        <div className="contact contact--bg">
          <div className="contact__container contact__inner contact--px contact--py">
            <h2 className="contact__title title">связаться с нами</h2>
            <div className="row d-flex contact__forms">
              <div className="col-lg-6 col-md-12">
                <div className="contact__descr d-flex flex-column">
                  <b className="contact__headline">Получить консультацию нашего специалиста</b>
                  <p className="contact__content">
                    Нажимая на кнопку, я соглашаюсь на обработку персональных данных и с правилами пользования Платформой
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
                    />
                    <input
                      onChange={handleEmailChange}
                      value={email}
                      className="contact__input"
                      placeholder="Электронная почта"
                      type="text"
                    />
                  </div>
                  <button type="submit" className="accent__btn contact__btn">Отправить</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Form;
