import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios.get(
      "https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/"
    );
    return response.data;
  }
);

type SliceState = {
  items: Array<{
    name: string;
    price: number;
    category: string;
    description: string;
    avatar: string;
    developerEmail: string;
  }>;
  isLoading: boolean;
  error: string | null;
};

const productsSlice = createSlice({
  name: "products",

  initialState: {
    items: [],
    isLoading: false,
    error: null,
  } as SliceState,

  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state.items));
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(
        (item) => item.jobId !== action.payload.jobId
      );
      localStorage.setItem("todos", JSON.stringify(state.items));
    },
    editTodo: (state, action) => {
      state.items.forEach((item) => {
        if (item.jobId === action.payload.jobId) {
          item.jobName = action.payload.jobName;
          item.jobUrgency = action.payload.jobUrgency;
        }
      });
      localStorage.setItem("todos", JSON.stringify(state.items));
    },
    persistLocal: (state, action) => {
      state.items = action.payload;
    },
  },

  extraReducers: {
    [getProducts.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled.toString()]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [getProducts.rejected.toString()]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});

export const { addTodo, deleteTodo, editTodo, persistLocal } =
  productsSlice.actions;

export default productsSlice.reducer;
