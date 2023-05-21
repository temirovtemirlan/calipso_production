import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, EffectFade, Pagination  } from 'swiper';
import ButtonSwitch from "../button-slider/";
import './product.scss';
import 'swiper/swiper-bundle.css';
import mountains from '../../img/mountains.png'; // mountains
import land from '../../img/land.png'; // land
import bottles from '../../img/bottles.png'; // bottles
import bottlesss from '../../img/bottles__back.png'; // bottles

SwiperCore.use([Navigation, Autoplay, EffectFade, Pagination]);

function Product() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const swiperRef = useRef(null);

      // Задайте ваши описания здесь
  const descriptions = [
    "Описание для слайда 1",
    "Описание для слайда 2",
    "Описание для слайда 3",
    "Описание для слайда 4",
    "Описание для слайда 4",
    "Описание для слайда 4",
    "Описание для слайда 4"
  ];

  const title = [
    "Заголовок 1",
    "Заголовок 2",
    "Заголовок 3",
    "Заголовок 4",
    "Заголовок 5",
    "Заголовок 6"
  ];

  const liter = [
    "5 литров",
    "2 литров",
    "0.5 литров",
    "200 литров",
    "200 литров",
    "200 литров"
  ];

    
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
    <div className="product-slider product__container">
        <div className="product__inner">
            <h2 className="title product__title">Продукция</h2>

            <div className="row">
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
                    <SwiperSlide>
                        <img src={bottles} alt="bottles" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={bottlesss} alt="bottles" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={bottles} alt="bottles" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={bottles} alt="bottles" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={bottles} alt="bottles" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={bottles} alt="bottles" />
                    </SwiperSlide>
                    

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

        <div className="parallax">
            <img className="parallax__effects history__parallax--effects parallax-img" src={mountains} alt="mountains" data-speed="10"/>
            <img className="parallax__effects history__parallax--effects history__parallax--effects-02 parallax-img" src={land} alt="land" data-speed="20"/>
        </div>

    </div>
  );
}

// onClick={() => swiperRef.current.swiper.slideNext()}

export default Product;