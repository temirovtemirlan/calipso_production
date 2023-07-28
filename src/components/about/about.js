import React, { useEffect } from "react";
import aboutOne from '../../img/about__img-01.svg';
import aboutTwo from '../../img/about__img-02.svg';
import aboutThree from '../../img/about__img-03.svg';
import AOS from 'aos';
import './about.scss';
import { useTranslation } from "react-i18next";

const About = () => {

    const { t } = useTranslation();


    useEffect(() => {
        AOS.init();
    })

    const aboutItems = [
        {   
            img: aboutOne,
            title: t("about.block-1.title"),
            description: t("about.block-1.descr"),
            delay: 200,
            duration: 1500
        },
        {
            title: t("about.block-2.title"),
            img: aboutTwo,
            description: t("about.block-2.descr"),
            delay: 200,
            duration: 1500
        },
        {
            title: t("about.block-3.title"),
            img: aboutThree,
            description: t("about.block-3.descr"),
            delay: 200,
            duration: 1500
        }
        
];

    return (
        <section id="water">
            <div className="about">
                <div className="about__inner about__container">
                    <h2 className="about__title title about__title--my">{t("about.title")}</h2>
                    <div className="row about__block d-flex justify-content-center w-100">
                        {aboutItems.map((data, index) => {
                            const imageNumber = (index + 1).toString().padStart(2, '0');
                            const imagePath = `../../img/about__img-${imageNumber}.svg`;
                            const alt = (index + 1).toString().padStart(2, '0');

                            return (
                                <AboutWater key={index} data={data} alt={alt}  />
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
};

const AboutWater = ({ data, alt  }) => {
    return (
        <div className="col-lg-4 col-md-3 col-sm-12 about__item" data-aos="fade-up" data-aos-duration={data.duration}>
            <div className="about__img about__img--my">
                <img src={data.img} alt={alt} />
            </div>
            <span className="about__subject about__subject--mb">{data.title}</span>
            <p className="about__descr">{data.description}</p>
        </div>
    );
};

const accessToServer = () =>  {
    const url = null;
    
    fetch(url, {
        "Content-Type": 'content/json', 
    })
}

export default About;
