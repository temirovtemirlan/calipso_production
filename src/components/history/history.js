// history.js
import React from "react";
import './history.scss';
import { useTranslation } from "react-i18next";
import poster from '../../img/poster.png';

const History = ({bgColor,title,description,showButton, img, list, setId }) => {
  const { t } = useTranslation();
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

                            {showButton ? <a className="accent__btn accent__btn--lg link__btn" href="#catalog">{t('header-btn')}</a> : null}
                        </div>

                        <div data-aos="fade-left" data-aos-duration="1400" className="col-lg-6 col-md-12 history__img">
                          <video poster={poster} playsInline className="w-100" src="https://calipso.kg/video-phone.mp4" controls controlsList="nodownload"></video>
                    </div>
                    </div>

                </div>
            </div>
        </section>
        </>
    )
}
export default History;

const ListItem = ({ data }) => {
    const {t} = useTranslation();
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

