import { createSlice } from "@reduxjs/toolkit";
import { getCampersThunk } from "./operations";


const initialState = {
    cars: [],
    favorites: [],
    page: 1,
};


export const camperSlice = createSlice({
    name: 'campers',
    initialState,
    reducers: {
        addCamper(state, action) {
            state.favorites.push(action.payload);
        },
        removeCamper(state, action) {
            state.favorites = state.favorites.filter(
                item => item._id !== action.payload
            );
    },
        loadMore(state) {
            state.page = state.page += 1;
        },
        refreshCampers(state) {
            state.page = 1;
            state.campers = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCampersThunk.fulfilled, (state, { payload }) => {
                if (state.page === 1) {
                    state.cars = payload;
                } else {
                    state.cars.push(...payload);
                }
            });
    },
    
})

export const { addCamper, removeCamper, loadMore, refreshCampers } = camperSlice.actions
export const campersReducer = camperSlice.reducer