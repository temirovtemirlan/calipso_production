import React, { useEffect } from "react";
import aboutOne from '../../img/about__img-01.svg';
import aboutTwo from '../../img/about__img-02.svg';
import aboutThree from '../../img/about__img-03.svg';
import AOS from 'aos';
import './about.scss';

const About = () => {

    useEffect(() => {
        AOS.init();
    })

    const aboutItems = [
        {   
            img: aboutOne,
            title: "Качество воды «Calipso",
            description: "Вода «Calipso» натурального происхождения из артезианской скважины глубиной 178 м. Завод по добыче и розливу воды расположен у подножия снежных вершин - на южном склоне горного хребта Ысык-Ата, на высоте 2023 м над уровнем моря.",
            delay: 200,
            duration: 1500
        },
        {
            title: "СВОЙСТВА И СОСТАВ CALIPSO",
            img: aboutTwo,
            description: "Скважина была пробурена, чтобы открыть источник пресной воды. Вместо пресной воды была обнаружена «живая» питьевая вода, с хлоридно-сульфатно-натриевым содержанием и уникальным природным pH = 7,8.",
            delay: 200,
            duration: 1500
        },
        {
            title: "КАЛИПСО – ИСТОЧНИК ЗДОРОВЬЯ",
            img: aboutThree,
            description: "Мы работаем для того, чтобы у каждого была возможность пить вкусную, полезную воду и быть здоровым.  Экологичность, чистота, природная польза и вкус – 4 идеальных составляющих воды Калипсо. При регулярном употреблении воды Calipso: (Пиктограммки и надписи) •  Улучшается работа мозга •  Ускоряется метаболизм •  Кожа становится чистой •  Повышается продуктивность Растет энергияУкрепляются мышцы и кости  Выводятся токсины",
            delay: 200,
            duration: 1500
        }
        
];

    return (
        <section>
            <div className="about">
                <div className="about__inner about__container">
                    <h2 className="about__title title about__title--my">о воде</h2>

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
