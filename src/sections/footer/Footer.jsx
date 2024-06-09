import navbar from "../../lib/navbar";
import header from "../../lib/header";

import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <ul className="nav__menu">
                {navbar.map((fLink) => (
                    <li key={fLink.id}>
                    <a href={fLink.link}>{fLink.title}</a>
                    </li>
                ))}
                </ul>
                <div className="footer__socials">
                {header.map((social) => (
                    <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    >
                    {social.icon}
                    </a>
                ))}
                </div>
            </div>
            <div className="footer__copyright">
                <small>2024 Jijek-com &copy; All Right Reserved</small>
            </div>
        </footer>
    );
}

export default Footer;