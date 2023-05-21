import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, EffectFade, Pagination  } from 'swiper';
import ButtonSwitch from "../button-slider/";
import './product.scss';
import 'swiper/swiper-bundle.css';
import mountains from '../../img/mountains.png'; // mountains
import land from '../../img/land.png'; // land

import limonProduct from '../../img/limon.png'; // limon 
import GasProduct from '../../img/gas.png'; // gas
import WaterProduct from '../../img/water.png'; // water
import NineTeen from '../../img/ninteen.png'; // water

SwiperCore.use([Navigation, Autoplay, EffectFade, Pagination]);

function Product() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const swiperRef = useRef(null);

  const descriptions = [
    "Зеленый чай Calipso - это идеальный напиток для тех, кто ценит здоровый образ жизни и хочет наслаждаться естественным вкусом премиум-чая. Добытая с глубины 176 метров, наша вода обеспечивает наилучший баланс минералов для превращения высококачественных зеленых чайных листьев в освежающий напиток. Ваша чашка чая никогда не была такой приятной.",

    "Газированная вода Calipso - это настоящее удовольствие, которое оживляет и освежает в течение всего дня. Используя наш источник воды с глубины 176 метров, мы создаем воду с нежным и естественным вкусом, усиленную тонкими пузырьками газа. Это идеальное средство для утоления жажды или просто для любителей более динамичных напитков.",

    "Негазированная вода Calipso представляет собой воплощение чистоты и свежести. С глубины 176 метров мы добываем самую чистую, балансированную по минералам воду, которую затем бережно бутилируем, сохраняя все ее природные свойства. Это идеальный вариант для тех, кто предпочитает простую, но качественную воду.",

    "Наша бутилированная вода в объеме 18,9 литров – это универсальное решение для больших семей, офисов или мероприятий. Это та же великолепная вода, добытая с глубины 176 метров, но в удобном большом объеме. С ней у вас всегда будет достаточно чистой воды для любых потребностей."
  ];

  const title = [
    "Зеленый чай лимон",
    "Газированная вода",
    "Заголовок 3",
    "Заголовок 4",
    "Заголовок 5",
    "Заголовок 6"
  ];

  const liter = [
    "0,5 литров",
    "0,5 литров",
    "0,5 литров",
    "18,9 литров литров"
  ];

  const imagesBottles = [limonProduct,GasProduct, WaterProduct, NineTeen] ;

    
  const slides = [];
  
  for (let i = 0; i < 7; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        <div>Slide {i}</div>
      </SwiperSlide>
    );
  }

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };


  return (
    <>
    
    <div className="product-slider product__container">
        <div className="product__inner">
            <h2 className="title product__title">Продукция</h2>

            <div className="row d-flex justify-content-between w-100">
                <Swiper
                    dots="true"
                    className="col-lg-5"
                    ref={swiperRef}
                    loop
                    autoplay={{ delay: 800 }}
                    speed={600}
                    effect="fade-in"
                    onSlideChange={handleSlideChange}
                    onSwiper={(swiper) => console.log("onSwiper")}
                    pagination={{ clickable: true, el: ".swiper-pagination" }} 
                >

                  {
                    imagesBottles.map((img, id) => (
                      <SwiperSlide key={id}>
                        <img className="slider__img" src={img} alt="bottles" />
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
                <div className="product-details col-lg-5">
                    <h3 className="product__subject">{title[currentSlide]}</h3>
                    <span className="product__subtitle">{liter[currentSlide]}</span>
                    <p className="about__descr">{descriptions[currentSlide]}</p>
                    <ButtonSwitch mirrorX={true} func={() => swiperRef.current.swiper.slidePrev()}/>
                    <ButtonSwitch func={() => swiperRef.current.swiper.slideNext()}/>
                    <div className="bullet-container"><div className="swiper-pagination"></div></div>
                </div>
            </div>

        </div>


    </div>
        <div className="parallax">
            <img className="parallax__effects history__parallax--effects parallax-img" src={mountains} alt="mountains" data-speed="10"/>
            <img className="parallax__effects history__parallax--effects history__parallax--effects-02 parallax-img" src={land} alt="land" data-speed="20"/>
        </div>
    </>
  );
}

// onClick={() => swiperRef.current.swiper.slideNext()}

export default Product;