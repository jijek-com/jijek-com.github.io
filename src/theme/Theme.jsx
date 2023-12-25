import Modal from "../components/modal/Modal";
import { primaryColors, backgroundColors } from "../lib/theme";
import PrimaryColor from "./PrimaryColor";
import BackgroundColor from "./BackgroundColor";
import "./Theme.scss";

const Theme = () => {
  return (
    <Modal className="theme__modal">
      <h3>Настройка цветовой темы</h3>

      <div className="theme__primary-wrapper">
        <h5>Основной цвет</h5>
        <div className="theme__primary-colors">
          {primaryColors.map((pColor) => (
            <PrimaryColor key={pColor.className} className={pColor.className} />
          ))}
        </div>
      </div>
      <div className="theme__background-wrapper">
        <h5>Фон</h5>
        <div className="theme__background-colors">
          {backgroundColors.map((bColor) => (
            <BackgroundColor
              key={bColor.className}
              className={bColor.className}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default Theme;