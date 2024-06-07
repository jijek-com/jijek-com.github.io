import Scrollspy from "react-scrollspy";
import { IoIosColorPalette } from "react-icons/io";

import { useModalContext } from '../../context/modal-context';
import navbar from '../../lib/navbar';

import NavigationItem from './NavigationItem';

import './Navbar.scss';

const Navbar = () => {
    const { showModalHandler } = useModalContext();
    
    return (
        <nav className="nav">
            <div className="container nav__container">
                <a className="nav__logo" href="index.html">Jijek-com</a>

                <Scrollspy
                    offset={-400}
                    className="nav__menu"
                    items={["header", "education", "experience", "portfolio", "contacts"]}
                    currentClassName="active">
                     {navbar.map((item) => (
                        <NavigationItem key={item.id} item={item} />
                    ))}
                </Scrollspy>

                <button onClick={showModalHandler} aria-label="change background and font size">
                    <IoIosColorPalette />
                </button>
            </div>
        </nav>
    );
}

export default Navbar;