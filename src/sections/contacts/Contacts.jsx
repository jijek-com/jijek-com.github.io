import contacts from "../../lib/contacts";
import "./Contacts.scss";

const Contacts = () => {
    return (
        <section className="contact" id="contacts">
            <h2>Мои контакты</h2>
            <p>Напишите мне сообщение по любой из ссылок ниже!</p>
            <div className="container contact__container" data-aos="fade-up">
                {contacts.map((item) => (
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
        </section>
    );
}

export default Contacts;