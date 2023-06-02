// catalog.js
import React, { useState, useEffect } from "react";
import img1 from '../../img/product01.png';
import img2 from '../../img/product02.png';
import img3 from '../../img/product03.png';
import img4 from '../../img/product04.png';
import img5 from '../../img/product05.png';
import img6 from '../../img/product06.png';
import img7 from '../../img/product07.png';
import img8 from '../../img/product08.png';
import img9 from '../../img/product09.png';
import img10 from '../../img/product10.png';
import img11 from '../../img/product11.png';
import img12 from '../../img/product12.png';
import img13 from '../../img/product13.png';
import './catalog.scss';

const Catalog = ({ addToCart, allProducts,catalogRef }) => {
    const [filter, setFilter] = useState("Все");
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoad(false);
      }, []);

    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];

    let productsWithImages = [...allProducts]; // создаем копию массива allProducts

    for (let i = 0; i < productsWithImages.length; i++) {
        productsWithImages[i].img = images[i % images.length]; // используем оператор % для циклического присвоения изображений
    }

    const filteredProducts = allProducts.filter(product => filter === "Все" ? true : product.types?.map(type => type.toLowerCase()).includes(filter.toLowerCase()));
    const filterButton = ['Все','сладкие напитки','газированные напитки','питьевые напитки','5 литр','1 литр', '0.5 литр'];

    return (
        <>
        <main ref={catalogRef}>
            <div className="product product--bg">
                <div className="product__inner product__inner-my product__container">
                    <h2 className="product__title title product__title">продукция</h2>

                    <div className="filter d-flex w-100 filter__block row">

                        <div className="filter__flex d-flex flex-wrap w-100">

                        {
                            filterButton.map((button, id) => {
                                return (
                                    <button key={id} className={`accent__btn accent__btn--dark ${filter === button ? 'accent--active' : ''}`} onClick={() => setFilter(button)}>
                                        {button}
                                    </button>
                                )
                            })
                        }

                        </div>
                    </div>

                    <div  data-aos="fade-up" data-aos-duration="1500"  className="row row-gap-3 column-gap-3 product__catalog d-flex justify-content-lg-start justify-content-start  justify-content-md-start w-100">
                    {/* { error ? "Ошибка данных, пожалуйста перезагрузите страницу" : load ? "Нет данных" :
                        filteredProducts.map((product, id) => (
                            <СatalogBone key={id} data={product} />
                        ))
                    } */}

                    {
                        filteredProducts.map((product, id) => (
                            <СatalogBone key={id} data={product} img={product.img} addToCart={() => addToCart(product)}/>
                          ))
                    }
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}


const СatalogBone = ({data, addToCart}) => {

    const { img, descr, volume, price, quantity, char } = data;

    return (
        <>
        <div className="col-lg-3 col-md-6 col-sm-12 product__item d-flex flex-column product__catalog_items">
            <img src={img} alt="catalog01"/>
            <div className="d-flex justify-content-between flex-column w-100 catalog__item">

                <div className="catalog__pc">
                    <p className="about__descr about__descr-500 ">{descr}</p>
                    <div className="d-flex w-100 flex-column">
                        <div className="d-flex  justify-content-between ">
                            <span>Стоимость: </span>
                            <b>{price} сом</b>
                        </div>

                        <div className="d-flex  justify-content-between ">
                            <span>Литраж:</span>
                            <b>{volume}</b>
                        </div>

                        <div className="d-flex  justify-content-between ">
                            <span>Объем: </span>
                            <b>{char}</b>
                        </div>

                    </div>
                </div>

                <div className="">
                    <button onClick={addToCart} className="btn w-100 btn-primary product__btn--blue">Добавить в корзину</button>
                </div>

            </div>
        </div> 
        </>
    )
}

export default Catalog;