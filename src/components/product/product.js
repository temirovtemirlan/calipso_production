import React from "react"; 

import './product.scss' // styles product blog

import bottles from '../../img/bottles__back.png'; // bottles back
import bottle from '../../img/bottles__fwr.png'; // bottles forward
import parallaxFirst from '../../img/mountains.png' // mountains
import parallaxSec from '../../img/land.png' // mountains

const Product = () => {
    return (
        <>
        <section>
            <div className="product">
                <div className="product__inner pb-0 product__inner--my product__container">
                    <h2 className="product__title title product__title">продукция</h2>

                    <div className="row product__block d-flex justify-content-between">

                        <div className="col-lg-6 product__content" >
                            <img className="product__img--back" data-aos="fade-down-right" data-aos-duration="1500" data-aos-delay="300" src={bottles} alt="bottle_back"/>
                            <img className="product__img--fwr" data-aos="fade-down-left" data-aos-duration="1500" src={bottle} alt="bottle_fwr"/>
                        </div>

                        <div className="col-lg-6 product__content" data-aos="fade-left" data-aos-duration="1500" >
                            <h3 className="product__subject">негазированная вода</h3>
                            <span className="product__subtitle">5 л</span>
                            <p className="about__descr">
                                Текст-заполнитель — это текст, который имеет некоторые характеристики реального письменного текста, но является случайным набором слов или сгенерирован иным образом. Его можно использовать для отображения образца шрифтов, создания текста для тестирования или обхода спам-фильтра.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="parallax">
                    <img className="parallax__effects parallax--effects parallax-img" src={parallaxFirst} alt="mountains" data-speed="10"/>
                    <img className="parallax__effects parallax--effects parallax--effects-02 parallax-img" src={parallaxSec}  alt="land" data-speed="20"/>
                </div>
            </div>
        </section>
        </>
    )
}

export default Product;