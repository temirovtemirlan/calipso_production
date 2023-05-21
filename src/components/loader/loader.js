import React from "react";
import './loader.scss';

const Loader = () => {
    return (
        <>
        <div className="load">
            <div className="circle__parent">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>
        </>
    )
}

export default Loader;