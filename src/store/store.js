import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import productsReducer from "./products";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    products: productsReducer,
  },
});

export default store;
