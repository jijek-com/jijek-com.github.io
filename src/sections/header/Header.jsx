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
                    <h3>Привет, я Евгения Маисеева</h3>
                    <p>Занимаю должность Frontend Developer с более чем 4-летним опытом в коммерческой разработке, 
                        специализируясь на верстке и разработке интерактивных пользовательских интерфейсов. 
                        Обладаю глубокими знаниями JavaScript, а также опытом работы с фреймворками Angular и React.</p>
                    <p>Я ценю возможности для интеллектуального и профессионального роста. Мне нравится изучать новые 
                        технологии и прикладывать усилия к постоянному совершенствованию своих навыков в области 
                        программирования.</p>

                    <p>В поисках динамичной команды, которая ставит перед собой амбициозные задачи 
                        и стремится к технологическому лидерству, где я смогу внести значительный вклад и дальше 
                        развиваться как специалист.</p>    
             
                    <div className="header__cta">
                        <a className='btn primary' href="#contacts">Подробнее</a>
                        <a className='btn light'
                        target="_blank"

                        rel="noopener noreferrer"
                        href={cv} download="Maiseeva Evgeniia">Download CV <HiDownload/></a>
                    </div> 
                </div>
            </div>
        </section>
    );
}

export default Header;