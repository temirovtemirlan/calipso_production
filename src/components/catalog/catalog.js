import React, { useState } from "react";

import './catalog.scss';
import catalImg from '../../img/catalog01.png';


const Catalog = () => {
    const [filter, setFilter] = useState("Все");

    const allProducts = [
        {
            img: catalImg,
            descr: "Негазированная питьевая вода Calipso",
            liter: "0,5 литр",
            price: "100 сом",
            type: "Все"
        },
        {
            img: catalImg,
            descr: "Негазированная питьевая вода Calipso",
            liter: "0,5 литр",
            price: "100 сом",
            type: "Сладкие напитки"
        },
        {
            img: catalImg,
            descr: "Негазированная питьевая вода Calipso",
            liter: "0,5 литр",
            price: "100 сом",
            type: null
        },
        {
            img: catalImg,
            descr: "Негазированная питьевая вода Calipso",
            liter: "0,5 литр",
            price: "100 сом",
            type: null
        },
        {
            img: catalImg,
            descr: "Негазированная питьевая вода Calipso",
            liter: "0,5 литр",
            price: "100 сом",
            type: null
        },
        {
            img: catalImg,
            descr: "",
            liter: "1 литр",
            price: "100 сом",
            type: "сладкие напитки"
        }
    ];

    const filteredProducts = allProducts.filter(product => filter === "Все" ? true : product.type?.toLowerCase() === filter.toLowerCase());
    const filterButton = ['Все','сладкие напитки','газированные напитки','питьевые напитки','5 литр','1 литр', '0.5 литр'];

    return (
        <>
        <main>
            <div className="product product--bg">
                <div className="product__inner product__inner-my product__container">
                    <h2 className="product__title title product__title">продукция</h2>

                    <div className="filter d-flex w-100 filter__block row">

                        <div className="filter__flex d-flex">

                        {
                            filterButton.map(button => {
                                return (
                                    <button className={`accent__btn accent__btn--dark ${filter === button ? 'accent--active' : ''}`} onClick={() => setFilter(button)}>
                                        {button}
                                    </button>
                                )
                            })
                        }

                        </div>
                    </div>

                    <div  data-aos="fade-up" data-aos-duration="1500"  className="row row-gap-3 column-gap-3 product__catalog d-flex justify-content-lg-center justify-content-center  justify-content-md-center w-100">
                    {
    filteredProducts.map((product, id) => (
        <СatalogBone key={id} data={product} />
    ))
}
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}


const СatalogBone = ({data}) => {

    const { img, descr, liter, price } = data;

    return (
        <>
        <div className="col-lg-3 col-md-6 col-sm-12 product__item d-flex flex-column product__catalog_items">
            <img src={img} alt="catalog01"/>
            <div className="d-flex justify-content-between flex-column w-100">

                <div className="catalog__pc">
                    <p className="about__descr about__descr-500 ">{descr}</p>
                    <div className="d-flex justify-content-between w-100">
                        <span>{liter}</span>
                        <b>{price}</b>
                    </div>
                </div>

                <div className="">
                    <button className="btn w-100 btn-primary product__btn--blue">Купить</button>
                </div>

            </div>
        </div> 
        </>
    )
}

export default Catalog;