import { createReducer, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const initialState = {};


export const setLoginRequest = createAsyncThunk("LOGIN", (form) => {
    return axios.post("/api/users/login", form).then((res) => res.data);
});

export const setRegisterRequest = createAsyncThunk("REGISTER", (form) => {
    return axios.post("/api/users/register", form).then((res) => res.data);
});

export const setLogoutRequest = createAsyncThunk("LOGOUT", () => {
    return axios.post("/api/users/logout").then((res) => res.data);
})

export const setUserMeRequest = createAsyncThunk("ME", () => {
    return axios.get("/api/users/me").then((res) => res.data);
})

export const usersReducer = createReducer(initialState, {
    [setLoginRequest.fulfilled]: (state, action) => action.payload,
    [setRegisterRequest.fulfilled]: (state, action) => action.payload,
    [setLogoutRequest.fulfilled]: (state, action) => action.payload,
    [setUserMeRequest.fulfilled]: (state, action) => action.payload,
})