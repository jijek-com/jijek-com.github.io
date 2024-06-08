import navbar from "../../lib/navbar";
import Scrollspy from "react-scrollspy";
import Nav from "./Nav";
import "./FloatingNav.scss";

const FloatingNav = () => {
  return (
    <div id="floating__nav">
      <Scrollspy
        offset={-400}
        className="scrollspy"
        items={["header", "education", "experience", "portfolio", "contacts"]}
        currentClassName="active"
      >
        {navbar.map((item) => (
          <Nav key={item.id} item={item} />
        ))}
      </Scrollspy>
    </div>
  );
};

export default FloatingNav;