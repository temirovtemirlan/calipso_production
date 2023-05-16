// app.js

import React, { useEffect } from "react";

import './app.scss'; // Main sstyles 
import Header from "../header/";
import About from "../about/";
import History from "../history/";
import Product from "../product/";
import Catalog from "../catalog/";
import Form from '../form/';
import Footer from '../footer/';

import historyImg from '../../img/historyimg.png'; // ! png
import fuller from '../../server/content.json';


const App = () => {

    

    const dataList01 = [
        {title: "Экологически дружелюбных материалов"},
        {title: "Снижение отходов"},
        {title: "Вклад в охрану окружающей среды"}
    ]

    return (
        <React.Fragment>
            <Header/>
            <About/>
            <History bgColor={"#3AB8FF"} title={"история"} description={fuller.content} showButton={true} img={historyImg} />
            <Product/>
            <Catalog/>
            <History bgColor={"#6EB772"} title={"экология"} list={dataList01} description={fuller.content} showButton={false} img={historyImg} />
            <Form/>
            <Footer/>
        </React.Fragment>
    )
}

export default App;