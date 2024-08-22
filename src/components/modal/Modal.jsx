import { Fragment } from "react";
import ReactDOM from "react-dom";

import Card from "../card/Card";

import { useModalContext } from "../../context/modal-context";

import "./Modal.scss";

const Modal = ({ className, children }) => {
  const { showModal, closeModalHandler } = useModalContext();
  
  return (
    <Fragment>
      {showModal &&
        ReactDOM.createPortal(
          <>
            <article id="backdrop" onClick={closeModalHandler}></article>
            <Card className={className}>{children}</Card>
          </>,
          document.querySelector("#overlays")
        )}
    </Fragment>
  );
};

export default Modal;
