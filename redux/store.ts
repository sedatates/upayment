import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./features/categorySlice";
import productsSlice from "./features/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    categories: categorySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
