import React, { useState } from "react";

import './cart.scss';
import cartFirst from '../../img/cart01.png';

const Cart = ({handleCloseCart, opened}) => {

    const [cart, setCart] = useState(0);


    return (
        <div className={`cart ${opened ? 'open' : 'close'}`}>

            <button onClick={handleCloseCart} className="cart--close">
                <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.15607 7.80957C8.68692 7.80957 8.19632 7.96725 7.83827 8.32475C7.12235 9.04158 7.12235 10.2442 7.83827 10.9611L19.354 22.4762L7.83827 33.9914C7.12235 34.7082 7.12235 35.9109 7.83827 36.6277C8.55437 37.3427 9.75777 37.3427 10.4739 36.6277L21.9894 25.1126L33.5049 36.6277C34.221 37.3427 35.4244 37.3427 36.1405 36.6277C36.8565 35.9109 36.8565 34.7082 36.1405 33.9914L24.6248 22.4762L36.1405 10.9611C36.8565 10.2442 36.8565 9.04158 36.1405 8.32475C35.7825 7.96725 35.2917 7.80957 34.8227 7.80957C34.3536 7.80957 33.8632 7.96725 33.5049 8.32475L21.9894 19.8399L10.4739 8.32475C10.1158 7.96725 9.62522 7.80957 9.15607 7.80957Z" fill="black"/>
                </svg>
            </button>

            <div className="container-sm container--cart-mt container__cart ">
                <div className="cart__block d-flex align-items-center justify-content-between">
                    
                    <div className="cart__item d-flex align-items-center">
                        <img src={cartFirst} alt="cart" />
                        <div className="cart__info d-flex flex-column ">
                            <h4>Питьевой виноградный сок</h4>
                            <div className="d-flex justify-content-between">
                                <span>0,5 л</span>
                                <b>100 сом</b>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex align-items-end flex-column">
                        <div className="d-flex align-items-center cart--controllers mb-2">
                            <button className="cart--controller  cart--remove" onClick={() => cart ? setCart(cart - 1) : null  }>
                            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20.7422" r="19" stroke="#2A2B40" strokeWidth="2"/>
                                <path d="M12 20.7422H28" stroke="#2A2B40" strokeWidth="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            </button>
                            <div className="cart--num">
                                {cart}
                            </div>
                            <button className="cart--controller cart--add" onClick={() => setCart(cart + 1)}>
                                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20.7422" r="19" stroke="#2A2B40" strokeWidth="2"/>
                                    <path d="M20 12.7422L20 28.7422M12 20.7422L28 20.7422" stroke="#2A2B40" strokeWidth="3" strokeLinecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>

                        <div className="d-flex cart__buttons--controller">
                            <button className="accent__btn accent__btn--dark w-100">
                                Купить
                            </button>
                            <button className="accent__btn accent__btn--dark w-100">
                                Удалить
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Cart;