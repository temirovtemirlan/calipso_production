// history.js
import React from "react";
import './history.scss';

const History = ({bgColor,title,description,showButton, img, list, setId }) => {
    return (
        <>
        {/* aboutcompany */}
        <section id={setId}>
            <div className="history" style={{backgroundColor: bgColor}}>
                <div className="history__inner history__inner--py history__container">
                    <h2 className="history__title title history__title">{title}</h2>
                    <div className="row history__block  row-gap-3 d-flex justify-content-between">

                        <div data-aos="fade-right" data-aos-duration="1400" className="col-lg-5 col-md-12 history__content">

                            {
                                list ? <ListItem data={list}/> : null 
                            }
                            
                            <p className="history__descr history__descr--my">
                                {description}
                            </p>

                            {showButton ? <a className="accent__btn accent__btn--lg link__btn" href="#catalog">Купить сейчас</a> : null}
                        </div>

                        <div data-aos="fade-left" data-aos-duration="1400" className="col-lg-6 col-md-12 history__img"><img className="w-100" src={img} alt="image"/></div>
                    </div>

                </div>
            </div>
        </section>
        </>
    )
}
export default History;

const ListItem = ({ data }) => {
    return (
      <>
        <ul className="history__list history__list--mx">
          {data.map((item, index) => (
            <li
              key={index}
              data-aos="fade-right"
              data-aos-duration={800 - index * 200}
              className="history__list-item"
            >
              <span>{`0${index + 1}`}</span>
              {item.title}
            </li>
          ))}
        </ul>
      </>
    );
};

