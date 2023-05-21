// app.js
import React, { useState } from "react";

import './app.scss'; // Main sstyles 
import Header from "../header/";
import About from "../about/";
import History from "../history/";
import Product from "../product/";
import Catalog from "../catalog/";
import Form from '../form/';
import Footer from '../footer/';
import Cart from "../cart/";

import historyImg from '../../img/historyimg.png'; // ! png
import fuller from '../../server/content.json';


const App = () => {
    const [opened, setOpened] = useState(false);
    const [ cart, setCart ] = useState([]);

    const addToCartS = (product) => {
        setCart(prevCart => [...prevCart, product]);
    };

    const dataList01 = [
        {title: "Экологически дружелюбных материалов"},
        {title: "Снижение отходов"},
        {title: "Вклад в охрану окружающей среды"}
    ]

    const handleCloseCart = () => {
        setOpened(!opened);
    };

    return (
        <React.Fragment>
            <Header cartToOpen={handleCloseCart}/>
            <About/>
            <History bgColor={"#3AB8FF"} title={"история"} description={fuller.content} showButton={true} img={historyImg} />
            <Product/>
            <Catalog addToCartS={addToCartS}/>
            <History bgColor={"#6EB772"} title={"экология"} list={dataList01} description={fuller.content} showButton={false} img={historyImg} />
            <Form/>
            <Footer/>
            <Cart handleCloseCart={handleCloseCart} opened={opened} carts={cart}/>
        </React.Fragment>
    )
}

export default App;