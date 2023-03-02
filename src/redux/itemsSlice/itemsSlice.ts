import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../../types";

const initialState: ITodo[] = [];

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem(state, { payload }) {
      state.push({ ...payload, id: state.length + 1, status: false });
    },
    changeStatus(state, { payload }) {
      for (const task of state) {
        if (task.id === payload) {
          task.status = !task.status;
          break;
        }
      }
    },
  },
});

export const itemsReducer = itemsSlice.reducer;
export const { addItem, changeStatus } = itemsSlice.actions;
