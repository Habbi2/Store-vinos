import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import productsReducer from "./products";
import {usersReducer} from "./user";
import { searchReducer } from "./search";
import { cartReducer } from "./cart";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    products: productsReducer,
    users: usersReducer,
    search: searchReducer,
    cart: cartReducer
  },
});

export default store;
