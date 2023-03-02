import { Form } from "./components/Form/Form";
import { ToDoList } from "./components/ToDoList/ToDoList";
import css from "./App.module.css";

export const App = () => {
  return (
    <div className={css.container}>
      <h2>Add new task</h2>
      <Form />
      <h2>ToDo list</h2>
      <ToDoList />
    </div>
  );
};
