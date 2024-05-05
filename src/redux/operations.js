import { createAsyncThunk } from '@reduxjs/toolkit';
import { BaseURL } from '../helpers/constants';
import axios from 'axios';

axios.defaults.baseURL = BaseURL;



// export const getCampersThunk = createAsyncThunk(
//   'campers/getCampers',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await axios.get(`/campers`);
//       return data;
//     }catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const getCampersThunk = createAsyncThunk(
  'campers/getCampers',
  async (page = 1, thunkAPI) => {
    try {
      const itemsPerPage = 4;
      const { data } = await axios.get(`/campers?page=${page}&limit=${itemsPerPage}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// export const getFavoritesCampersThunk = createAsyncThunk(
//   'campers/getFavorites',
//   async (_, thunkAPI) => {
//     try {
//         const { data } = await axios.get('/favorites');
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// )