import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://67638ce917ec5852cae92f59.mockapi.io/'

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async(_, thunkAPI) => {
        try {
            const response = await axios.get('contacts')
            return response.data
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Error fetching contacts')  
        }
    }
)