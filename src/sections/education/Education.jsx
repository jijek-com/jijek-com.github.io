import Card from '../../components/card/Card';
import education from '../../lib/education';

import './Education.scss';

const Education = () => {
    return (
        <article className="education" id="education">
            <h2>Образование</h2>

            <div className="container education__container" data-aos="fade-up">
                {education.map((item) => (
                <Card key={item.id} className="education">
                    <div className="education__icon">{item.icon}</div>
                    <div className="education__details">
                    <p className="education__title">{item.title}</p>
                    <p>{item.desc}</p>
                    </div>
                </Card>
                ))}
            </div>
        </article>
    );
}

export default Education;
