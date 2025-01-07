import { configureStore } from "@reduxjs/toolkit";
import flowers from "../features/flowers-slice";

const store = configureStore({
  reducer:{
    cart: flowers.reducer
  }
})

export default store;