import React, { useState, useEffect } from 'react';
import './fixedHead.scss';
import Menu from '../menu/';

import Logo from '../../img/logo-calipso.svg';

const FixedHead = ({cartToOpen, handleToggleBurger, burger}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    })

    const handleScroll = () => {
        // Определяем, когда кнопка должна становиться видимой
        const scrollTop = window.pageYOffset;
        if (scrollTop > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

    const handleOpenBurgerMenu = () => {
      console.log(burger)
    }

    return (
        <>
            <header className={`fixed__header ${isVisible ? 'fixed__show' : 'fixed__hide'}`}>
                <div className="fixed__container">
                  <Menu handleOpenMenu={handleOpenBurgerMenu} burgerToOpen={handleToggleBurger} paddingT='20px' paddingB='20px'/>
                </div>
            </header>
        </>
    )

  };
  
  export default FixedHead;