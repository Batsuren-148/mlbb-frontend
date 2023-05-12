import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
    "user/register",
    async (userData) => {
        try {
            const response = await axios.post(
                "http://localhost:8000/register",
                userData
            );
            return response.data;
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.error);
                throw new Error(JSON.stringify(error.response.data.error));
            } else if (error.request) {
                // The request was made but no response was received
                throw new Error("Server did not respond.");
            } else {
                // Something happened in setting up the request that triggered an Error
                throw new Error("An error occurred while sending the request.");
            }
        }
    }
);
