import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const response = await axios.get(
      "https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/"
    );
    return response.data;
  }
);

type SliceState = {
  items: Array<{
    id: string;
    name: string;
    createdAt: string;
  }>;
  isLoading: boolean;
  error: string | null;
};

const categorySlice = createSlice({
  name: "category",

  initialState: {
    items: [],
    isLoading: false,
    error: null,
  } as SliceState,

  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [getCategories.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [getCategories.fulfilled.toString()]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [getCategories.rejected.toString()]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});

export const { setProducts } = categorySlice.actions;

export default categorySlice.reducer;
