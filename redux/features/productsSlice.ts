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

export const deleteProductService = createAsyncThunk(
  "products/deleteProductService",
  async (id: number) => {
    await axios.delete(
      `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`
    );
  }
);

export const addProductService = createAsyncThunk(
  "products/addProductService",
  async (data: any) => {
    await axios.post(
      "https://62286b649fd6174ca82321f1.mockapi.io/case-study/products",
      data
    );
  }
);

type SliceState = {
  items: Array<{
    id: string;
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
    setProducts: (state, action) => {
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
    [deleteProductService.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [deleteProductService.fulfilled.toString()]: (state, action) => {
      state.items.filter((item) => item.id !== action.payload);
      state.isLoading = false;
    },
    [deleteProductService.rejected.toString()]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
    [addProductService.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [addProductService.fulfilled.toString()]: (state, action) => {
      state.items.push(action.payload);
      state.isLoading = false;
    },
    [addProductService.rejected.toString()]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
