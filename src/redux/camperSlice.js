import { createSlice } from "@reduxjs/toolkit";
import { getCampersThunk } from "./camperSlice.operations";


const initialState = {
    _id: null,
    name: '',
    price: 0,
    rating: 0,
    location: '',
    adults: 0,
    children: 0,
    engine: '',
    transmission: '',
    form: '',
    length: 0,
    width: 0,
    height: 0,
    tank: 0,
    consumption: 0,
    description: '',
    details: {},
    gallery: [],
    reviews: [],
    error: null,
    isLoading: false,
    favorites: false,
};


export const camperSlice = createSlice({
    name: 'campers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getCampersThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.campers = action.payload;
        })
        .addCase(getCampersThunk.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getCampersThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
    
})


export const camperReducer = camperSlice.reducer