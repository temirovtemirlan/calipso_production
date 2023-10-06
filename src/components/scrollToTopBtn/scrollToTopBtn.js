import React, { useState, useEffect } from "react";

import "./scrollToTopBtn.scss";
const ScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Проверяем положение скролла при загрузке страницы
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Определяем, когда кнопка должна становиться видимой
    const scrollTop = window.pageYOffset;
    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    // Прокручиваем страницу вверх
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <svg
        width="30"
        height="11"
        viewBox="0 0 21 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.7751 7.96244C1.5247 7.91244 1.2724 7.78541 1.1196 7.55741C0.8138 7.10042 0.9419 6.45944 1.4005 6.15444L10.3912 0.170483C10.7264 -0.0525147 11.1798 -0.0525147 11.5151 0.170483L20.5058 6.15444C20.9643 6.45944 21.0924 7.10042 20.7867 7.55741C20.481 8.01441 19.8405 8.14244 19.3819 7.83744L10.9531 2.22747L2.5244 7.83744C2.2951 7.99044 2.0256 8.01244 1.7751 7.96244Z"
          fill="black"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopBtn;
