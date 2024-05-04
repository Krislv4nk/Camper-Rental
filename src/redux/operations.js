import { createAsyncThunk } from '@reduxjs/toolkit';
import { BaseURL, Per_Page } from '../helpers/constants';
import axios from 'axios';

axios.defaults.baseURL = BaseURL;



export const getCampersThunk = createAsyncThunk(
  'campers/getCampers',
  async (page, thunkAPI) => {
    try {
        const { data } = await axios.get(`/adverts?per_page=${Per_Page}&page=${page}`);
      return data;
    }catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// adverts?per_page=${Per_Page}&page=${page}

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