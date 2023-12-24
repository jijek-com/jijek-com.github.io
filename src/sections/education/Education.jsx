import Card from '../../components/card/Card';
import education from '../../lib/education';

import './Education.scss';

const Education = () => {
    return (
        <section className="education" id="education">
            <h2>Образование</h2>

            <div className="container education__container" data-aos="fade-up">
                {education.map((item) => (
                <Card key={item.id} className="education">
                    <div className="education__icon">{item.icon}</div>
                    <div className="education__details">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                    </div>
                </Card>
                ))}
            </div>
        </section>
    );
}

export default Education;
