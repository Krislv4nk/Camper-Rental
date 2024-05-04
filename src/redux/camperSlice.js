import { createSlise } from "@reduxjs/toolkit";


const initialState = {
    campers: [],
    favorites: [],
    filter: '',
    error: null,
    isLoading: false,
};

export const camperSlice = createSlise({
    name: 'camper',
    initialState,
    reducers: {
        getCampers: (state, action) => {
            state.campers = action.payload;
        },
        getFavorites: (state, action) => {
            state.favorites = action.payload;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },
})

export const { getCampers, getFavorites, setFilter, setError, setIsLoading } = camperSlice.actions;
export const camperReducer = camperSlice.reducer