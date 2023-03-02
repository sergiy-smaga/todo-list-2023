import { useState } from "react";
import css from "./ListElement.module.css";
import { Modal } from "../Modal/Modal";
import useItemsSlice from "../../redux/itemsSlice/itemsHook";
import { IPropListElement } from "../../types";

export const ListElement: React.FC<IPropListElement> = ({ item }) => {
  const { title, description, status, id } = item;

  const { changeStatus } = useItemsSlice();

  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  return (
    <>
      <li onClick={() => setIsModalOpened(true)}>
        <div className={css.listitem}>
          <div>{id}</div>
          <div>{title}</div>
          <div>{description}</div>
          <div>
            <input
              type="checkbox"
              onChange={() => changeStatus(id)}
              checked={status}
            />
          </div>
        </div>
      </li>
      {isModalOpened && (
        <Modal onClose={() => setIsModalOpened(false)}>
          <div className={css.modalContent}>
            <h3>{title}</h3>
            <div>{description}</div>
            <div>
              <label>Status:</label>
              <input
                type="checkbox"
                onChange={() => changeStatus(id)}
                checked={status}
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
