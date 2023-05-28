// cart.js
import React, { useState, useEffect } from "react";
import './cart.scss';
import cartFirst from '../../img/cart01.png';
import svgBottles from '../../img/svgBottle.svg' //
// import pngBottles from '../../img/pngBottle.png'

const Cart = ({handleCloseCart, opened, item, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, closeCart, targetRef}) => {

    return (
        <div className={`cart ${opened ? 'open'  : 'close'} `}>

                <button onClick={handleCloseCart} className="cart--close">
                    <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.15607 7.80957C8.68692 7.80957 8.19632 7.96725 7.83827 8.32475C7.12235 9.04158 7.12235 10.2442 7.83827 10.9611L19.354 22.4762L7.83827 33.9914C7.12235 34.7082 7.12235 35.9109 7.83827 36.6277C8.55437 37.3427 9.75777 37.3427 10.4739 36.6277L21.9894 25.1126L33.5049 36.6277C34.221 37.3427 35.4244 37.3427 36.1405 36.6277C36.8565 35.9109 36.8565 34.7082 36.1405 33.9914L24.6248 22.4762L36.1405 10.9611C36.8565 10.2442 36.8565 9.04158 36.1405 8.32475C35.7825 7.96725 35.2917 7.80957 34.8227 7.80957C34.3536 7.80957 33.8632 7.96725 33.5049 8.32475L21.9894 19.8399L10.4739 8.32475C10.1158 7.96725 9.62522 7.80957 9.15607 7.80957Z" fill="black"/>
                    </svg>
                </button>

            <div className="scroll-container container--cart-mt w-100">
                <div className="container-sm container__cart">
                {item.length ? item.map((item, id) => (
                            <div key={id} className="cart__block flex-wrap d-flex align-items-center justify-content-between ">
                                
                                <div className="cart__item d-flex align-items-center w-100">
                                    <img className="cart--image" src={item.img} alt="cart" />
                                    <div className="cart__info d-flex flex-column ">
                                        <h4>{item.descr}</h4>
                                        <div className="d-flex justify-content-between">
                                            <span>0,5 л</span>
                                            <b>100 сом</b>
                                        </div>
                                    </div>
                                </div>
                                <div className="buttons__controller d-flex align-items-end flex-column">
                                    <div className="d-flex align-items-center cart--controllers mb-2">
                                        <button className="cart--controller cart--remove" onClick={() => decreaseQuantity(item)}>
                                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="20" cy="20.7422" r="19" stroke="#2A2B40" strokeWidth="2"/>
                                            <path d="M12 20.7422H28" stroke="#2A2B40" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        </button>
                                        <div className="cart--num">
                                            {item.quantity}
                                        </div>
                                        <button className="cart--controller cart--add" onClick={() => increaseQuantity(item)}>
                                            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="20" cy="20.7422" r="19" stroke="#2A2B40" strokeWidth="2"/>
                                                <path d="M20 12.7422L20 28.7422M12 20.7422L28 20.7422" stroke="#2A2B40" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="d-flex cart__buttons--controller">
                                        <button className="accent__buy accent__btn accent__btn--dark w-100">
                                            Заказать
                                        </button>
                                        <button  onClick={() => removeFromCart(item)} className="accent__delete accent__btn accent__btn--dark w-100">
                                            Удалить
                                        </button>
                                    </div>
                                </div>

                            </div>)) : <div className="cart-empty">
                                <div className="cart-empty__inner d-flex align-items-center justify-content-center">
                                    <div><img src={svgBottles} alt="empty" /></div>
                                    <div className="cart-empty__content">
                                        <h4>В корзине пока нет товаров</h4>
                                        <p>Ваша корзина ощущается легкой как вода. Добавьте свежие продукты и наслаждайтесь вкусом артезианской воды</p>
                                        <button onClick={closeCart} className="accent__btn accent__btn--dark">Начать покупки</button>
                                    </div>
                                </div>
                            </div>}
                    </div>
                
            </div>

        </div>
    )
}
export default Cart;