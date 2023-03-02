import { useSelector, useDispatch } from "react-redux";
import { addItem, changeStatus } from "./itemsSlice";
import { ITodoPayload, ITodo } from "../../types";

const getItems = (state: { todos: { items: ITodo[] } }) => state.todos.items;

const useItemsSlice = () => {
  const dispatch = useDispatch();
  const items = useSelector(getItems);
  const handleAddItem = (data: ITodoPayload) => dispatch(addItem(data));
  const handleChangeStatus = (data: number) => dispatch(changeStatus(data));

  return {
    items,
    addItem: handleAddItem,
    changeStatus: handleChangeStatus,
  };
};

export default useItemsSlice;
