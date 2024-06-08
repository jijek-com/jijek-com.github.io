import { FaHome, FaStar } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { AiFillMessage, AiFillAppstore } from "react-icons/ai";

const navbar = [
    { id: 1, link: "#", title: "Главная", icon: <FaHome />, ariaLabel: 'main' },
    { id: 2, link: "#education", title: "Образование", icon: <IoSchool />, ariaLabel: 'education' },
    { id: 3, link: "#experience", title: "Опыт", icon: <FaStar />, ariaLabel: 'experience' },
    { id: 4, link: "#portfolio", title: "Портфолио", icon: <AiFillAppstore />, ariaLabel: 'portfolio' },
    { id: 5, link: "#contacts", title: "Контакты", icon: <AiFillMessage/>, ariaLabel: 'contacts' },
  ];
  
  export default navbar;