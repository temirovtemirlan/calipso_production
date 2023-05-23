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
import Loader from '../loader/';
import ScrollToTopBtn from "../scrollToTopBtn/";
import FixedHead from '../fixedHead/';

import historyImg from '../../img/historyimg.png'; // ! png
import fuller from '../../server/content.json';

const App = () => {
    const [opened, setOpened] = useState(false);
    const [item, setCart] = useState(Cookies.get('cart') ? JSON.parse(Cookies.get('cart')) : []);
    const [quantity, setQuantity] = useState(Cookies.get('quantity') ? JSON.parse(Cookies.get('quantity')) : 0);
    const [loader, setLoader] = useState(true);

    const dataList01 = [
        {title: "Экологически дружелюбных материалов"},
        {title: "Снижение отходов"},
        {title: "Вклад в охрану окружающей среды"}
    ]

    const handleCloseCart = () => {
        setOpened(!opened);
    };
    const removeFromCart = (product) => {
        setCart(prevCart => {
            const newCart = prevCart.filter(item => item.descr !== product.descr);
            Cookies.set('cart', JSON.stringify(newCart));
            
            // Обновляем quantity и куки quantity
            let newQuantity = newCart.reduce((total, item) => total + item.quantity, 0);
            setQuantity(newQuantity);
            Cookies.set('quantity', newQuantity);
            
            return newCart;
        });
    };
    const increaseQuantity = (product) => {
        addToCart(product);
        setQuantity(quantity + 1);
        Cookies.set('quantity', quantity + 1);
    };

    const decreaseQuantity = (product) => {
        setCart(prevCart => {
            const newCart = prevCart.map(item => {
                if (item.descr === product.descr) {
                    return {...item, quantity: item.quantity - 1};
                }
                return item;
            }).filter(item => item.quantity > 0);
            Cookies.set('cart', JSON.stringify(newCart));
            return newCart;
        });
        setQuantity(quantity - 1);
        Cookies.set('quantity', quantity - 1);
    };

    const addToCart = (product) => {
        setCart(prevCart => {
            // проверяем, есть ли уже этот товар в корзине
            const existingProduct = prevCart.find(item => item.descr === product.descr);
    
            let newCart;
            if (existingProduct) {
                // если товар уже есть, увеличиваем его количество
                newCart = prevCart.map(item =>
                    item.descr === product.descr ? {...item, quantity: item.quantity + 1} : item
                );
            } else {
                // если товара еще нет, добавляем его с количеством 1 и сохраняем изображение товара
                newCart = [...prevCart, {...product, quantity: 1, img: product.img}];
            }

            Cookies.set('cart', JSON.stringify(newCart));
            return newCart;
        });
        setQuantity(quantity + 1);
        Cookies.set('quantity', quantity + 1);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoader(false);
        }, 3000     );

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if(loader) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = '';
        }
    }, [loader]);

    return (
        <React.Fragment>
            {loader ? <Loader/> : null }
            <FixedHead cartToOpen={handleCloseCart} />
            <Header cartToOpen={handleCloseCart}/>
            <About id="about"/>
            <History bgColor={"#3AB8FF"} title={"история"} description={fuller.contentHistory} showButton={true} img={historyImg} />
            <Product/>
            
            <Catalog id="catalog" addToCart={addToCart}/>

            <History bgColor={"#6EB772"} title={"Чистая вода"} list={dataList01} description={fuller.contentFilter} showButton={false} img={historyImg} />
            <Form id="contacts"/>
            <Footer/>
            <Cart handleCloseCart={handleCloseCart} opened={opened} item={item} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
            <FixedCart  handleCloseCart={handleCloseCart} opened={opened} quantity={quantity} addToCart={addToCart}/>
            <ScrollToTopBtn/>
        </React.Fragment>
    )
}

export default App;
