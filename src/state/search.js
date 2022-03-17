import { createAction, createReducer } from '@reduxjs/toolkit'

export const initialState = [];

export const setSearch = createAction("SET_SEARCH");

export const searchReducer = createReducer(initialState, {
    [setSearch]: (state, action) => action.payload,
}) 
