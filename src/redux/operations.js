import { createAsyncThunk } from '@reduxjs/toolkit';
import { BaseURL } from '../helpers/constants';
import axios from 'axios';

axios.defaults.baseURL = BaseURL;



export const getCampersThunk = createAsyncThunk(
  'campers/getCampers',
  async (page, thunkAPI) => {
    try {
      const { data } = await axios.get(`/campers`);
       console.log(data);
      return data;
    }catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const getFavoritesCampersThunk = createAsyncThunk(
  'campers/getFavorites',
  async (_, thunkAPI) => {
    try {
        const { data } = await axios.get('/favorites');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)