import {useEffect} from 'react';
import AOS from "aos";

import header from '../../lib/header';

import cv from '../../assets/docs/cv.pdf';
import {HiDownload} from 'react-icons/hi';

import './Header.scss';

const Header = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
      
    return (
        <section id="header" className='header'>
            <div className="container header__container">
                <div className="header__socials">
                    {header.map(item => (
                        <a
                            key={item.id}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        {item.icon}
                      </a>
                    ))}
                </div>

                <div className="header__info">
                    <h1>Frontend Developer</h1>
                    <h3>Привет, я Евгения Мас</h3>
                    <p>Мой опыт в коммерческой разработке составляет 4 года на должности Верстальщик/frontend-developer.</p>
                    <p>Коротко обо мне: люблю думать, учиться и верстать, знаю JS. Пишу код в Angular и React. В поисках крутой команды, способной обеспечить мне возможность для профессионального роста и совершенствованию навыков.</p>
                    <p>Открыта для изучения новых технологий и возможности учавствовать в интересных проектах, позволяющих расширить мою техническую экспертизу</p>

                    <div className="header__cta">
                        <a className='btn primary' href="#contact">Подробнее</a>
                        <a className='btn light'
                        target="_blank"
                        rel="noopener noreferrer"
                        href={cv} download>Download CV <HiDownload/></a>
                    </div> 
                </div>
            </div>
        </section>
    );
}

export default Header;