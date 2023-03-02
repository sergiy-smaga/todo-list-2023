import { ListElement } from "../ListElement/ListElement";
import useItemsSlice from "../../redux/itemsSlice/itemsHook";

export const ToDoList = () => {
  const { items } = useItemsSlice();

  return (
    <>
      <h2>ID / Title / Description / Status</h2>
      <ul>
        {items.map((item) => (
          <ListElement key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};
