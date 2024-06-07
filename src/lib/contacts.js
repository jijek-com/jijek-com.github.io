import { HiOutlineMail } from "react-icons/hi";
import { FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";

export const contacts = [
  { id: 1, icon: <HiOutlineMail />, link: "mailto:mas.eug55@gmail.com", ariaLabel: 'mail' },
  {
    id: 2,
    icon: <FaTelegramPlane />,
    link: "https://t.me/JijekCom",
    ariaLabel: 'telegram'
  },
  { id: 3, icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/eugenia-mas/", ariaLabel: 'linked-in' },
];

export default contacts;
