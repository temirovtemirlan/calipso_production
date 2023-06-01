import React, { useState } from "react";
import './button.scss';

const Button = ({ handleBurgerOpened, burger, setBurger }) => {

    return (
      <>
        <button
          onClick={handleBurgerOpened}
          className="burger__menu">
          Click
        </button>
      </>
    );
  };

export default Button;