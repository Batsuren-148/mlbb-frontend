import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHeroesData = createAsyncThunk(
    "heroes/fetchData",
    async () => {
        try {
            const response = await axios.get("http://localhost:8000/heroes");
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

// get hero information
export const fetchHeroById = createAsyncThunk(
    "heroes/fetchById",
    async (id) => {
        try {
            const response = await axios.get(
                `http://localhost:8000/heroes/${id}`
            );
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);
