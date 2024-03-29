import expirience from '../../lib/expirience';

import './Expirience.scss';

const Expirience = () => {
    return (
        <section id="expirience">
            <h2>Опыт работы</h2>

            <div className="container expirience__container" data-aos="fade-up">

                <div class="expirience__line"></div>

                {expirience.map((item) => (
    
                    <div key={item.id} class="expirience__notification">
                        <div class="expirience__circle"></div>

                        <div class="expirience__txt">
                            <h4 >{item.spec} ○ {item.title} ○ ({item.date})</h4>
                            <div class="expirience__comment">
                                <span>{item.desc}</span>
                            </div>

                            <a className='btn expirience__btn' href={item.link}>Перейти</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Expirience;