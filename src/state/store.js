import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import productsReducer from "./products";
import {usersReducer} from "./user";
import { searchReducer } from "./search";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    products: productsReducer,
    users: usersReducer,
    search: searchReducer
  },
});

export default store;
