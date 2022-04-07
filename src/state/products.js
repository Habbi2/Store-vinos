import { createAction, createReducer } from "@reduxjs/toolkit";

export const setProducts = createAction("SET_PRODUCTS");

const defaultState = [];

const productsReducer = createReducer(defaultState, {
  [setProducts]: (state, action) => action.payload,
});

export default productsReducer;
