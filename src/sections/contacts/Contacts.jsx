import contacts from "../../lib/contacts";
import "./Contacts.scss";

const Contacts = () => {
    return (
        <article className="contacts" id="contacts">
            <h2>Напишите мне сообщение</h2>
            <div className="contacts__btn">
                <span className="contacts__btn-title">Мои контакты</span>
                <div className="contacts__container">
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
            </div>
        </article>
    );
}

export default Contacts;