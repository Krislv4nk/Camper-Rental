import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const $campersInstance = axios.create({
  baseURL: 'https://663518c09bb0df2359a3cd97.mockapi.io/campers',
});



export const getCampersThunk = createAsyncThunk(
  '/getAll',
  async (_, thunkAPI) => {
    try {
        const { data } = await $campersInstance.get('/');
      return data;
    }catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);


export const getFavoritesCampersThunk = createAsyncThunk(
  'campers/getFavorites',
  async (_, thunkAPI) => {
    try {
        const { data } = await $campersInstance.get('/favorites');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)