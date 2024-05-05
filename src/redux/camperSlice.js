import { createSlice } from "@reduxjs/toolkit";
import { getCampersThunk } from "./operations";


const initialState = {
  campers: {
      favorites: [],
    adverts: [],
    page: 1,
  filter: '',
  },
  isLoading: false,
    error: null,
};


export const camperSlice = createSlice({
    name: 'campers',
    initialState,
  reducers: {
      incrementPage: state => {
      state.campers.page += 1;
    },
       addFavorite(state, action) {
            state.favorites.push(action.payload);
      },
      
      removeFavorite(state, action) {
        state.favorites = state.favorites.filter(
          (favorite) => favorite._id !== action.payload
        );
      },
      
      refreshFavorites(state, action) {
        state.favorites = action.payload;
      },
  },
    
    extraReducers: (builder) => {
        builder
          .addCase(getCampersThunk.pending, (state) => {
            state.campers.isLoading = true;
          })
          .addCase(getCampersThunk.fulfilled, (state, action) => {
            state.campers.isLoading = false;
            state.campers.adverts = action.payload;
            state.error = null;
          })
          .addCase(getCampersThunk.rejected, (state, action) => {
            state.campers.isLoading = false;
            state.campers.error = action.payload;
          });
      },
    });
    
        export const { addFavorite, removeFavorite, refreshFavorites,  incrementPage } = camperSlice.actions;
        
        export const campersReducer = camperSlice.reducer;