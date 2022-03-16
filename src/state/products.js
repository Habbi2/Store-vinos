import { createAction, createReducer } from "@reduxjs/toolkit";

export const setProducts = createAction("SET_PRODUCTS");

export const setTintos = createAction("SET_TINTOS");

export const setBlancos = createAction("SET_BLANCOS");

export const setRosados = createAction("SET_ROSADOS");

const defaultState = [];

const productsReducer = createReducer(defaultState, {
  [setProducts]: (state, action) => action.payload,
  [setTintos]: (state, action) => action.payload,
  [setBlancos]: (state, action) => action.payload,
  [setRosados]: (state, action) => action.payload,
});

export default productsReducer;
