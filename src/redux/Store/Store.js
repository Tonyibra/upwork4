import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../Slices/CardSlice";
export const store = configureStore({
  reducer: {
    data: cardReducer,
  },
});
