// catalog.js
import React, { useState, useEffect } from "react";

import "./catalog.scss";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Catalog = ({ addToCart, catalogRef }) => {
  const [filter, setFilter] = useState("Все");
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://monstrcorp.com/api/v1/waters/"
        );
        if (response.data) {
          setProducts(response.data);
          console.log(response.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []); // Пустой массив зависимостей, чтобы данные получались только один раз при монтировании компонента

  useEffect(() => {
    setLoad(false);
  }, []); // Пустой массив зависимостей, чтобы этот эффект выполнялся только один раз при монтировании компонента

  const filteredProducts = products.filter((product) => {
    const tagNames = product?.tag?.map((tag) => tag.name_tag.toLowerCase());

    return filter === "Все" || filter === "Баары"
      ? true
      : tagNames?.includes(filter.toLowerCase());
  });

  const filterButton = [
    t("catalog.filter.btn-1"),
    t("catalog.filter.btn-2"),
    t("catalog.filter.btn-3"),
    t("catalog.filter.btn-4"),
    "5 литр",
    "1 литр",
    "0.5 литр",
  ];

  return (
    <>
      <main id="catalog" ref={catalogRef}>
        <div className="product product--bg">
          <div className="product__inner product__inner-my product__container">
            <h2 className="product__title title product__title">Каталог</h2>

            <div className="filter d-flex w-100 filter__block row">
              <div className="filter__flex d-flex flex-wrap w-100">
                {filterButton.map((button, id) => {
                  return (
                    <button
                      key={id}
                      className={`accent__btn accent__btn--dark ${
                        filter === button ? "accent--active" : ""
                      }`}
                      onClick={() => setFilter(button)}
                    >
                      {button}
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className="row row-gap-3 column-gap-3 product__catalog d-flex justify-content-lg-start justify-content-xl-center justify-content-center justify-content-sm-center justify-content-md-center  w-100"
            >
              {filteredProducts?.map((product, id) => (
                <СatalogBone
                  key={id}
                  data={product}
                  addToCart={() => addToCart(product)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

const СatalogBone = ({ data, addToCart }) => {
  const { t } = useTranslation();

  const { image, name, volume, quantity } = data;

  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12 product__item d-flex flex-column product__catalog_items">
        <img className="catalog__img" src={image} alt="catalog01" />
        <div className="d-flex justify-content-between flex-column w-100 catalog__item">
          <div className="catalog__pc">
            <p className="about__descr about__descr-500 ">{name}</p>
            <div className="d-flex w-100 flex-column">
              <div className="d-flex  justify-content-between ">
                {/* <span>{t("catalog.carts.price")}</span> */}
              </div>

              <div className="d-flex  justify-content-between ">
                <span>{t("catalog.carts.vol")}</span>
                <b>{volume}</b>
              </div>

              <div className="d-flex  justify-content-between ">
                <span>{t("catalog.carts.quan")}</span>
                <b>{quantity}</b>
              </div>
            </div>
          </div>

          <div className="">
            <button
              onClick={addToCart}
              className="btn w-100 btn-primary product__btn--blue"
            >
              {" "}
              {t("catalog.btn")}{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
