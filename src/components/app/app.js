// app.js
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

import './app.scss'; // Main sstyles 
import Header from "../header/";
import About from "../about/";
import History from "../history/";
import Product from "../product/";
import Catalog from "../catalog/";
import Form from '../form/';
import Footer from '../footer/';
import Cart from "../cart/";
import FixedCart from "../fixedCart/";

import historyImg from '../../img/historyimg.png'; // ! png
import fuller from '../../server/content.json';


const App = () => {
    const [opened, setOpened] = useState(false);
    const [item, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const dataList01 = [
        {title: "Экологически дружелюбных материалов"},
        {title: "Снижение отходов"},
        {title: "Вклад в охрану окружающей среды"}
    ]

    useEffect(() => {
        // designModes();
    })

    const designModes = () => {
        document.designMode = "on";
    }

    const handleCloseCart = () => {
        setOpened(!opened);
    };

    const removeFromCart = (product) => {
        setCart(prevCart => {
            // Фильтруем корзину, удаляя выбранный товар
            const updatedCart = prevCart.filter(item => item.descr !== product.descr);
    
            // Пересчитываем общее количество товаров в обновленной корзине
            const updatedQuantity = updatedCart.reduce((total, item) => total + item.quantity, 0);
    
            // Устанавливаем новое состояние quantity
            setQuantity(updatedQuantity);
    
            // Возвращаем обновленную корзину
            return updatedCart;
        });
    };
    
    const increaseQuantity = (product) => {
        addToCart(product);
        setQuantity(quantity => quantity + 1);
    };

    const decreaseQuantity = (product) => {
        setCart(prevCart => {
            return prevCart.map(item => {
                if (item.descr === product.descr) {
                    return {...item, quantity: item.quantity - 1};
                }
                return item;
            }).filter(item => item.quantity > 0);
        });
        setQuantity(quantity => quantity - 1);
    };

    const addToCart = (product) => {
        setCart(prevCart => {
            // проверяем, есть ли уже этот товар в корзине
            const existingProduct = prevCart.find(item => item.descr === product.descr);
    
            if (existingProduct) {
                // если товар уже есть, увеличиваем его количество
                return prevCart.map(item =>
                    item.descr === product.descr ? {...item, quantity: item.quantity + 1} : item
                );
            } else {
                // если товара еще нет, добавляем его с количеством 1 и сохраняем изображение товара
                return [...prevCart, {...product, quantity: 1, img: product.img}];
            }
        });
        setQuantity(quantity + 1);
    };

    return (
        <React.Fragment>
            <Header cartToOpen={handleCloseCart}/>
            <About/>
            <History bgColor={"#3AB8FF"} title={"история"} description={fuller.content} showButton={true} img={historyImg} />
            <Product/>
            
            <Catalog addToCart={addToCart}/>

            <History bgColor={"#6EB772"} title={"экология"} list={dataList01} description={fuller.content} showButton={false} img={historyImg} />
            <Form/>
            <Footer/>
            <Cart handleCloseCart={handleCloseCart} opened={opened} item={item} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
            <FixedCart  handleCloseCart={handleCloseCart} opened={opened} quantity={quantity} addToCart={addToCart}/>
        </React.Fragment>
    )
}

export default App;