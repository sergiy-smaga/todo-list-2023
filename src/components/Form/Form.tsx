import { useState } from "react";
import useItemsSlice from "../../redux/itemsSlice/itemsHook";
import css from "./Form.module.css";

export const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState<boolean>(false);
  const [descriptionError, setDescriptionError] = useState<boolean>(false);

  const { addItem } = useItemsSlice();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !description) {
      !title && setTitleError(true);
      !description && setDescriptionError(true);
      return;
    }

    addItem({ title, description });
    setTitle("");
    setDescription("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "title":
        setTitleError(false);
        setTitle(e.target.value);
        break;
      case "description":
        setDescriptionError(false);
        setDescription(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.textfield}>
        <label htmlFor="title">Title</label>
        <input
          className={titleError ? css.inputError : css.input}
          onChange={handleChange}
          id="title"
          value={title}
          type="text"
          name="title"
        />
        {titleError && <span className={css.error}>This field is empty</span>}
      </div>
      <div className={css.textfield}>
        <label htmlFor="description">Description</label>
        <input
          className={descriptionError ? css.inputError : css.input}
          onChange={handleChange}
          id="description"
          type="text"
          value={description}
          name="description"
        />
        {descriptionError && (
          <span className={css.error}>This field is empty</span>
        )}
      </div>

      <button type="submit">Create</button>
    </form>
  );
};
