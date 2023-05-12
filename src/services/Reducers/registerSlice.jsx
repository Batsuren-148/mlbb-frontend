import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerUser } from "../Auth/registerAuth";
const initialState = {
    user: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

const registerSlice = createSlice({
    name: "registerUser",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                toast.info("Register pending!", { autoClose: 3000 });
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.isLoading = false;
                state.isSuccess = true;
                toast.success("Register successful!", { autoClose: 3000 });
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.error.message;
                toast.error(action.error.message, {
                    autoClose: 3000,
                });
            });
    },
});

export default registerSlice.reducer;
