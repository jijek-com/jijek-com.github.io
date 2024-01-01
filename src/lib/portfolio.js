import Image2 from "../assets/images/image1.png";
import Image1 from "../assets/images/image2.png";
import Image3 from "../assets/images/image3.png";

const portfolio = [
  {
    id: 1,
    category: "Other",
    image: Image1,
    title: "Best Discount",
    desc: "2 лендинга для клиентов и предпринимателей. С использованием Бэм, google map, scss, javascript",
    tags: ['Scss', 'Javascript'],
    demo: "https://app-bd.com/",
    isShowGitBtn: false,
    github: "",
  },
  {
    id: 2,
    category: "Other",
    image: Image2,
    title: "Mentor party",
    desc: "Лендинг для вечеринки компании Best Discount. С использованием Бэм, scss, javascript",
    tags: ['Scss', 'Javascript'],
    demo: "https://bd-party.vercel.app/",
    isShowGitBtn: false,
    github: "https://github.com/jijek-com/bd-party",
  },
  {
    id: 3,
    category: "Other",
    image: Image3,
    title: "LK Best Discount",
    desc: "Лендинг для личного кабинета компании Best Discount. С использованием Бэм, scss, javascript",
    tags: ['Scss', 'Javascript'],
    demo: "https://bd-my-page.vercel.app/",
    isShowGitBtn: false,
    github: "https://github.com/jijek-com/bd-myPage",
  }
];

export default portfolio;