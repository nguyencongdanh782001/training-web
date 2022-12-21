import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface valueType {
  data: [
    {
      id: string;
      name: string;
      age: number;
    }
  ];
  searchData: [];
}

const initialValue: valueType = {
  data: [{ id: "928uhds", name: "danh", age: 21 }],
  searchData: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialValue,
  reducers: {
    addTodo(
      state,
      action: PayloadAction<{ id: string; name: string; age: number }>
    ) {
      state.data.unshift(action.payload);
    },
    editTodo(
      state,
      action: PayloadAction<{ id: string; name: string; age: number }>
    ) {
      state.data = state.data.map((item) =>
        item.id === action.payload.id ? action.payload : item
      ) as any;
    },
    deleteTodo(state, action: PayloadAction<any>) {
      state.data = state.data.filter(
        (item) => item.id !== action.payload
      ) as any;
    },
    searchTodo(state, action: PayloadAction<any>) {
      state.searchData = state.data.filter(
        (item) => item.name === action.payload
      ) as any;
    },
  },
});

export const { addTodo, deleteTodo, editTodo, searchTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
