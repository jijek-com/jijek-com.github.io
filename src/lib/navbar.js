import { FaHome, FaStar } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { AiFillMessage, AiFillAppstore } from "react-icons/ai";

const navbar = [
    { id: 1, link: "#", title: "Главная", icon: <FaHome /> },
    { id: 2, link: "#education", title: "Образование", icon: <IoSchool /> },
    { id: 3, link: "#experience", title: "Опыт", icon: <FaStar /> },
    { id: 4, link: "#portfolio", title: "Портфолио", icon: <AiFillAppstore /> },
    { id: 5, link: "#contacts", title: "Контакты", icon: <AiFillMessage/> },
  ];
  
  export default navbar;