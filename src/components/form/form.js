import React from "react";

import './form.scss'    ;
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
// import ru './f';
import ru from '../../lang/ru.json';

const Form = () => {
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
                                    Нажимая на кнопку, я соглашаюсь на обработку <br/> персональных данных и с правилами пользования <br/> Платформой
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <form className="contact__form d-flex flex-column" action="POST">
                                <input placeholder="Имя" className="contact__input w-100 contact__input--my"  type="text"/>
                                <div className="contact__block-input d-flex w-100 ">

                                <ReactPhoneInput
                                className="contact__block-input"
                                country={'kg'}
                                preferredCountries={['kz','ru','uz']}
                                localization={ru}
                                />
                                    <input className="contact__input" placeholder="Электронная почта" type="text"/>
                                </div>
                                <button className="accent__btn contact__btn">Отправить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Form;