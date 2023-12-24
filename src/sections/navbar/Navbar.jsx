import { IoIosColorPalette } from "react-icons/io";

import { useModalContext } from '../../context/modal-context';
import navbar from '../../lib/navbar';

import './Navbar.scss';

const Navbar = () => {
    const { showModalHandler } = useModalContext();
    
    return (
        <nav className="nav">
            <div className="container nav__container">
                <a className="nav__logo" href="index.html">JijekCom</a>

                <ul className="nav__menu">
                    {navbar.map(item => (
                        <li key={item.id}>
                            <a href={item.link}>{item.title}</a>
                        </li>
                    ))}
                </ul>

                <button onClick={showModalHandler}>
                    <IoIosColorPalette />
                </button>
            </div>
        </nav>
    );
}

export default Navbar;