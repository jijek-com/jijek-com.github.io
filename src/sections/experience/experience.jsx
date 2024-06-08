import experience from '../../lib/experience';

import './Experience.scss';

const Experience = () => {
    return (
        <section id="experience">
            <h2>Опыт работы</h2>

            <div className="container experience__container" data-aos="fade-up">

                <div className="experience__line"></div>

                {experience.map((item) => (
    
                    <div key={item.id} className="experience__notification">
                        <div className="experience__circle"></div>

                        <div className="experience__txt">
                            <p className="experience__title">{item.spec} ○ {item.title} ○ ({item.date})</p>
                            <div className="experience__comment">
                                <span>{item.desc}</span>
                            </div>

                            <a className="btn experience__btn" href={item.link}>Перейти</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;