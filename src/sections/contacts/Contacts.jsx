import contacts from "../../lib/contacts";
import "./Contacts.scss";

const Contacts = () => {
    return (
        <article className="contacts" id="contacts">
            <h2>Мои контакты</h2>
            <p>Напишите мне сообщение по любой из ссылок ниже!</p>
            <div className="container contacts__container" data-aos="fade-up">
                {contacts.map((item) => (
                    <a
                        key={item.id}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.ariaLabel}
                    >
                        {item.icon}
                    </a>
                ))}
            </div>
        </article>
    );
}

export default Contacts;