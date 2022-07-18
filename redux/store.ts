import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    categories: productsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
