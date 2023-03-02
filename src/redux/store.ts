import { configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "./itemsSlice/itemsSlice";
import { combineReducers } from "redux";
import { useDispatch } from "react-redux";

const todosReducer = combineReducers({
  items: itemsReducer,
});

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
