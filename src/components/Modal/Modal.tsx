import { createPortal } from "react-dom";
import css from "./Modal.module.css";
import { IPropsModal } from "../../types";

const modalRoot = document.querySelector("#modal-root");

export const Modal: React.FC<IPropsModal> = ({ onClose, children }) => {
  return createPortal(
    <div className={css.overlay}>
      <div className={css.modal}>
        <div>{children}</div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    modalRoot!
  );
};
