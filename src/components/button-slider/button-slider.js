import React from "react";
import './button-slider.scss';

const ButtonSwitch = ({ func, mirrorX = false }) => {
    return (
        <>
        <button className={`myButton ${mirrorX ? 'mirrorX' :''}`} onClick={func}>
            <svg className="mySvg" width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="myPathStroke" d="M1.60744 35C1.60744 16.2223 16.8298 1.00001 35.6074 1.00001C54.3851 1.00001 69.6074 16.2223 69.6074 35C69.6074 53.7777 54.3851 69 35.6074 69C16.8298 69 1.60744 53.7777 1.60744 35Z" stroke="#36A9E1" strokeWidth="2"/>
                <path className="myPathFill" d="M52.7068 35.2641C53.0973 34.8736 53.0973 34.2404 52.7068 33.8499L46.3428 27.4859C45.9523 27.0954 45.3191 27.0954 44.9286 27.4859C44.5381 27.8765 44.5381 28.5096 44.9286 28.9001L50.5854 34.557L44.9286 40.2139C44.5381 40.6044 44.5381 41.2375 44.9286 41.6281C45.3191 42.0186 45.9523 42.0186 46.3428 41.6281L52.7068 35.2641ZM19.2148 35.557L51.9996 35.557L51.9996 33.557L19.2148 33.557L19.2148 35.557Z" fill="#36A9E1"/>
            </svg>
        </button>
        </>
    )
}

export default ButtonSwitch;