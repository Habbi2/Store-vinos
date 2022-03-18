import { createReducer, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import axios from "axios";

export const initialState = [];

export const setCart = createAction("SET_CART");

export const setAddCart = createAsyncThunk("ADD-CART", (id) => {
    return axios.post("/api/cart/add", id).then((res) => res.data);
});

export const setDeleteCart = createAsyncThunk("DELETE-CART", (id) => {
    return axios.post("/api/cart/delete", id).then((res) => res.data);
});

export const setEditCart = createAsyncThunk("DELETE-CART", (body) => {
    return axios.post("/api/cart/edit", body).then((res) => res.data);
});

export const cartReducer = createReducer(initialState, {
    [setCart]: (state, action) => action.payload,
    [setAddCart.fulfilled]: (state, action) => [...state,action.payload],
    [setDeleteCart.fulfilled]: (state, action) => action.payload,
    [setEditCart.fulfilled]: (state, action) => action.payload,
})