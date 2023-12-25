import Card from '../../components/card/Card';
import expirience from '../../lib/expirience';

import './Expirience.scss';

const Expirience = () => {
    return (
        <section id="expirience">
            <h2>Опыт работы</h2>

            <div className="container expirience__container" data-aos="fade-up">
                {expirience.map((item) => (
                    <Card key={item.id} className="expirience light">
                        <div className="expirience__details">
                            <h4>{item.spec} ○ {item.title} ○ ({item.date})</h4>
                            <p>{item.desc}</p>

                            <a className='btn' href={item.link}>Перейти</a>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export default Expirience;