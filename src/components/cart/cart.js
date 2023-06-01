// cart.js
import React, { useState, useEffect, useRef } from "react";
import './cart.scss';
import cartFirst from '../../img/cart01.png';
import emptyBottle from '../../img/emptyBottle.svg';

const Cart = ({handleCloseCart, opened, item, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, handleOrderOfProduct}) => {

    return (
        <div className={`cart ${opened ? 'open'  : 'close'} `}>

                <button onClick={handleCloseCart} className="cart--close">
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.15376 4.04733L7.81376 6.69733C7.89999 6.77104 7.96837 6.86336 8.01376 6.96733C8.0321 7.06985 8.0321 7.17481 8.01376 7.27733C8.01252 7.38018 7.99217 7.48191 7.95376 7.57733C7.91836 7.6815 7.85631 7.77459 7.77376 7.84733C7.74132 7.89147 7.70055 7.92884 7.65376 7.95733L7.50376 8.03733H7.35376C7.25487 8.05839 7.15265 8.05839 7.05376 8.03733H6.90376L6.75376 7.95733C6.70681 7.92905 6.666 7.89165 6.63376 7.84733L4.01376 5.17733L1.34376 7.83733C1.31131 7.88147 1.27055 7.91884 1.22376 7.94733L1.07376 8.02733H0.923758C0.824867 8.04839 0.722649 8.04839 0.623758 8.02733H0.473758L0.323758 7.94733C0.276808 7.91905 0.236004 7.88165 0.203758 7.83733C0.11897 7.76858 0.0534981 7.67899 0.0137581 7.57733C-0.0044642 7.47816 -0.0044642 7.3765 0.0137581 7.27733C-0.00458604 7.17481 -0.00458604 7.06985 0.0137581 6.96733C0.0533359 6.86527 0.114774 6.77311 0.193758 6.69733L2.87376 4.04733L0.213758 1.37733C0.123878 1.30709 0.0547524 1.21377 0.0137581 1.10733C-0.0044642 1.00816 -0.0044642 0.906498 0.0137581 0.807328C-0.00227952 0.711327 -0.00227952 0.61333 0.0137581 0.517328C0.0533359 0.415271 0.114774 0.323114 0.193758 0.247328C0.269114 0.167831 0.361393 0.106312 0.463758 0.0673283C0.659908 -0.00910943 0.877608 -0.00910943 1.07376 0.0673283C1.17612 0.106312 1.2684 0.167831 1.34376 0.247328L4.01376 2.90733L6.68376 0.237328C6.75911 0.157831 6.85139 0.0963117 6.95376 0.0573283C7.14991 -0.0191094 7.36761 -0.0191094 7.56376 0.0573283C7.66612 0.0963117 7.7584 0.157831 7.83376 0.237328C7.91397 0.316001 7.97549 0.41169 8.01376 0.517328C8.0298 0.61333 8.0298 0.711327 8.01376 0.807328C8.01252 0.910182 7.99217 1.01191 7.95376 1.10733C7.91836 1.2115 7.85631 1.30459 7.77376 1.37733L5.15376 4.04733Z" fill="white"/>
                </svg>
                </button>

            <div className="scroll-container container--cart-mt w-100 flex-wrap">
                <div className="container-sm container__cart">
                {item.length ? item.map((item, id) => (
                            <div key={id} className="cart__block flex-wrap d-flex align-items-end flex-column">
                                
                                <div className="w-100 align-items-center d-flex justify-content-between">
                                    <div className="cart__item d-flex align-items-center w-100">
                                            <img className="cart--image" src={item.img} alt="cart" />
                                            <div className="cart__info d-flex flex-column ">
                                                <h4 className="">{item.descr}</h4>
                                                <div className="d-flex justify-content-between">
                                                <div className="d-flex w-100 flex-column">
                                                    <div className="d-flex  justify-content-between settings__item">
                                                        <span>Стоимость: </span>
                                                        <b>{item.price} сом</b>
                                                    </div>

                                                    <div className="d-flex  justify-content-between settings__item">
                                                        <span>Объем: </span>
                                                        <b>{item.char}</b>
                                                    </div>

                                                </div>
                                                </div>
                                            </div>
                                    </div>

                                <div className="buttons__controller__first d-flex align-items-end flex-column">
                                    <div className="d-flex align-items-center cart--controllers mb-2">
                                        <button className="cart--controller cart--remove" onClick={() => decreaseQuantity(item)}>
                                        <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="17.4998" cy="18.2419" r="16.9998" stroke="#2A2B40"/>
                                            <path d="M10.5 18.2422H24.4998" stroke="#2A2B40" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        </button>
                                        <div className="cart--num">
                                            {item.quantity}
                                        </div>
                                        <button className="cart--controller cart--add" onClick={() => increaseQuantity(item)}>
                                        <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="17.5" cy="18.2422" r="17" stroke="#2A2B40"/>
                                            <path d="M17.5 11.2422L17.5 25.2422M10.5 18.2422L24.5 18.2422" stroke="#2A2B40" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        </button>
                                    </div>

                                    <div className="d-flex cart__buttons--controller">
                                    </div>
                                </div>


                                </div>

                                <div className="d-flex buttons__controller">

                                    <div className="buttons__controller__second d-flex align-items-end flex-column">
                                        <div className="d-flex align-items-center cart--controllers mb-2">
                                            <button className="cart--controller cart--remove" onClick={() => decreaseQuantity(item)}>
                                            <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="17.4998" cy="18.2419" r="16.9998" stroke="#2A2B40"/>
                                                <path d="M10.5 18.2422H24.4998" stroke="#2A2B40" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            </button>
                                            <div className="cart--num">
                                                {item.quantity}
                                            </div>
                                            <button className="cart--controller cart--add" onClick={() => increaseQuantity(item)}>
                                            <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="17.5" cy="18.2422" r="17" stroke="#2A2B40"/>
                                                <path d="M17.5 11.2422L17.5 25.2422M10.5 18.2422L24.5 18.2422" stroke="#2A2B40" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            </button>
                                        </div>

                                        <div className="d-flex cart__buttons--controller">
                                        </div>
                                    </div>

                                    <button  onClick={() => removeFromCart(item)} className="accent__delete accent__btn accent__btn--dark">Удалить</button>


                                </div>



                                </div>)) : 
                                
                                <div className="cart-empty">
                                <div className="cart-empty__inner d-flex flex-column align-items-center"> 
                                    <div><img src={emptyBottle} alt="empty" /></div>
                                    <div className="cart-empty__content text-center">
                                        <h4>В корзине пока нет товаров</h4>
                                        <p>Ваша корзина ощущается легкой как вода. Добавьте продукты и наслаждайтесь вкусом артезианской воды</p>
                                    </div>
                                </div>
                            </div>
                            }
                    </div>
                
            </div>

        <div className="cart__buy"> 
            <button onClick={handleOrderOfProduct} disabled={!item.length ?? true} className={`accent__btn accent__btn--dark accent--active w-50 ${!item.length ? "accent__btn--disable" : "" }`}>
                Заказать
            </button>
        </div>

        </div>
    )
}
export default Cart;
